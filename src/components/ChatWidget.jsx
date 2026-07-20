import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

// Site-wide Claude-powered chat assistant.
//
// - Floating bubble fixed bottom-right; sits above the mobile CTA bar
//   (h-16) on small screens and below the cookie banner (z-[60]) in the
//   stacking order so consent always stays on top.
// - Conversation persists in sessionStorage, so it survives hard reloads;
//   SPA navigation never unmounts it because it lives in Layout.
// - All intelligence + escalation rules live server-side in /api/chat.
//   If the endpoint is unconfigured or errors, the widget degrades to an
//   honest "call us" message — it never dead-ends a customer.

const STORAGE_KEY = 'aitree-chat-v1';
const PHONE_DISPLAY = '(757) 319-5131';
const PHONE_HREF = 'tel:+17573195131';

// `local: true` marks messages that exist only in the UI (welcome, error
// fallbacks) and must never be replayed to the API as conversation context.
const WELCOME = {
  role: 'assistant',
  local: true,
  content:
    'Hi! I’m the Art-is-Tree assistant. I can answer questions about our tree services, service area, discounts, and ways to keep a job affordable. For anything specific to your property — pricing, scheduling, or looking at a tree — I’ll point you to Mike and the crew. How can I help?',
};

const FALLBACK_TEXT = `I’m having trouble connecting right now — but a real person is easy to reach. Call us at ${PHONE_DISPLAY} (24/7 for emergencies) or use the contact page for a free written estimate.`;

const loadSaved = () => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch (e) {
    /* corrupted storage — start fresh */
  }
  return null;
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const openedEventSent = useRef(false);

  // Restore a previous session's conversation after mount (SSG-safe).
  useEffect(() => {
    const saved = loadSaved();
    if (saved) setMessages(saved);
  }, []);

  // Persist the conversation (welcome-only state isn't worth saving).
  useEffect(() => {
    if (messages.length <= 1) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch (e) {
      /* storage full/blocked — chat still works in memory */
    }
  }, [messages]);

  // Keep the newest message in view.
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  // Focus the input when the panel opens; Escape closes it.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        setHasOpened(true);
        if (!openedEventSent.current && typeof window !== 'undefined' && window.dataLayer) {
          // GTM does nothing with this unless a trigger is added — no double-count risk.
          window.dataLayer.push({ event: 'chat_opened' });
          openedEventSent.current = true;
        }
      }
      return next;
    });
  }, []);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const outgoing = { role: 'user', content: text.slice(0, 1500) };
    // Build the API window from real dialogue only (welcome + fallback
    // messages are `local` and never sent as context).
    const history = [...messages.filter((m) => !m.local), outgoing].slice(-16);
    setMessages((prev) => [...prev, outgoing]);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }),
      });
      const data = res.ok ? await res.json() : { error: `http_${res.status}` };
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        // Unconfigured, throttled, or upstream trouble — honest call-us fallback,
        // marked `local` so it's never replayed to the API as context.
        setMessages((prev) => [...prev, { role: 'assistant', content: FALLBACK_TEXT, local: true }]);
      }
    } catch (e) {
      setMessages((prev) => [...prev, { role: 'assistant', content: FALLBACK_TEXT, local: true }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [input, loading, messages]);

  const onSubmit = (e) => {
    e.preventDefault();
    send();
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag_report_phone_click) {
      window.gtag_report_phone_click();
    }
  };

  return (
    <>
      {/* PANEL */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Art-is-Tree"
          className="fixed z-[55] bottom-[5.5rem] right-2 left-2 sm:left-auto sm:right-5 md:bottom-24 w-auto sm:w-[24rem] max-w-[calc(100vw-1rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white"
          style={{ height: 'min(34rem, calc(100dvh - 9.5rem))' }}
        >
          {/* header */}
          <div className="bg-[#0A2F24] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#D4AF37]">
            <div className="min-w-0">
              <p className="font-playfair font-bold text-base leading-tight m-0">Art-is-Tree Assistant</p>
              <a
                href={PHONE_HREF}
                onClick={handlePhoneClick}
                className="text-xs text-gray-300 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 mt-0.5"
              >
                <Phone className="w-3 h-3" aria-hidden="true" /> Prefer a person? {PHONE_DISPLAY}
              </a>
            </div>
            <button
              onClick={toggle}
              aria-label="Close chat"
              className="p-2 -mr-1 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#FAF9F6]" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap rounded-2xl ${
                    m.role === 'user'
                      ? 'bg-[#1B4D3E] text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start" aria-label="Assistant is typing">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md shadow-sm px-4 py-3 flex gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-2 h-2 rounded-full bg-[#1B4D3E]/50 motion-safe:animate-bounce"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <form onSubmit={onSubmit} className="border-t border-gray-200 bg-white p-2.5 flex items-end gap-2">
            <label htmlFor="aitree-chat-input" className="sr-only">Type your question</label>
            <input
              id="aitree-chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our tree services…"
              maxLength={1500}
              autoComplete="off"
              className="flex-1 rounded-xl border border-gray-300 px-3.5 py-2.5 text-[15px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="bg-[#1B4D3E] text-white p-2.5 rounded-xl hover:bg-[#143a2f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
            </button>
          </form>
          <p className="text-[11px] text-gray-500 text-center bg-white pb-2 px-3 m-0">
            AI assistant — for pricing or anything about your specific tree,{' '}
            <a href={PHONE_HREF} onClick={handlePhoneClick} className="underline hover:text-[#1B4D3E]">call {PHONE_DISPLAY}</a>.
          </p>
        </div>
      )}

      {/* BUBBLE */}
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-label={open ? 'Close chat' : 'Chat with Art-is-Tree'}
        aria-expanded={open}
        className="fixed z-[55] bottom-20 md:bottom-6 right-4 md:right-5 w-14 h-14 rounded-full bg-[#1B4D3E] text-[#D4AF37] shadow-[0_10px_30px_-8px_rgba(10,47,36,0.6)] border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#143a2f] hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
      >
        {/* gentle attention ring until first open */}
        {!hasOpened && !open && (
          <span className="absolute inset-0 rounded-full bg-[#D4AF37]/30 motion-safe:animate-ping" aria-hidden="true" />
        )}
        {open ? <X className="w-6 h-6 relative" aria-hidden="true" /> : <MessageCircle className="w-6 h-6 relative" aria-hidden="true" />}
      </button>
    </>
  );
};

export default ChatWidget;
