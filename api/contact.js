// Vercel serverless function: receives the contact form and emails it via Resend.
//
// Required env var (set in Vercel Project Settings -> Environment Variables):
//   RESEND_API_KEY      Your Resend API key (https://resend.com/api-keys)
// Optional env vars:
//   CONTACT_TO_EMAIL    Where inquiries are delivered (default: artistreeofvirginia@gmail.com)
//   CONTACT_FROM_EMAIL  Verified Resend sender (default: onboarding@resend.dev for testing).
//                       For production, verify artistreevabeach.com in Resend and set this to
//                       something like "Art-is-Tree Website <no-reply@artistreevabeach.com>".

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'artistreeofvirginia@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Art-is-Tree Website <onboarding@resend.dev>';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'Email service is not configured.' });
  }

  // Vercel parses JSON bodies automatically; fall back to manual parse just in case.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: bots fill hidden fields. If present, pretend success and drop it.
  if ((body.company || '').trim() !== '') {
    return res.status(200).json({ success: true });
  }

  const cap = (v, n) => (v || '').toString().trim().slice(0, n);
  const name = cap(body.name, 100);
  const phone = cap(body.phone, 30);
  const email = cap(body.email, 200);
  const address = cap(body.address, 200);
  const serviceNeeded = cap(body.serviceNeeded, 80);
  const urgency = cap(body.urgency, 80);
  const message = cap(body.message, 5000);

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, error: 'Please complete all required fields.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
  }

  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    ['Property Address', address],
    ['Service Needed', serviceNeeded],
    ['Timeline', urgency || 'Not specified'],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h2 style="color:#1B4D3E;margin:0 0 12px">New website inquiry — Art-is-Tree LLC</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows.map(([k, v]) => `
          <tr>
            <td style="padding:6px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:bold;white-space:nowrap">${escapeHtml(k)}</td>
            <td style="padding:6px 12px;border:1px solid #e5e7eb">${escapeHtml(v)}</td>
          </tr>`).join('')}
      </table>
      <h3 style="color:#1B4D3E;margin:18px 0 6px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>`;

  const text = [
    'New website inquiry — Art-is-Tree LLC',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New estimate request from ${name}${serviceNeeded ? ` — ${serviceNeeded}` : ''}`,
        html,
        text,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('[api/contact] Resend error', resendRes.status, detail);
      return res.status(502).json({ success: false, error: 'Failed to send your message. Please call us instead.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[api/contact] error', err);
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again or call us.' });
  }
}
