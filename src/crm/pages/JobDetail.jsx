import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { crmApi, CRM_CONFIGURED } from '@/crm/lib/crmApi';
import { PIPELINE_STAGES, stageMeta, timeAgo } from '@/crm/constants';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Phone, Mail, MapPin, Save, MessageSquarePlus } from 'lucide-react';
import SetupNotice from '@/crm/components/SetupNotice';

const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
    {children}
  </div>
);

const inputCls = 'w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1B4D3E]';

const JobDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [state, setState] = useState({ loading: true, error: null });
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState('');
  const [noteType, setNoteType] = useState('note');

  const load = useCallback(async () => {
    try {
      const data = await crmApi.getJob(id);
      setState({ loading: false, error: null, ...data });
      setForm({
        title: data.job.title || '',
        service_type: data.job.service_type || '',
        stage: data.job.stage,
        priority: data.job.priority || 'normal',
        estimate_amount: data.job.estimate_amount ?? '',
        final_amount: data.job.final_amount ?? '',
        scheduled_for: data.job.scheduled_for ? data.job.scheduled_for.slice(0, 16) : '',
        address: data.job.address || '',
        description: data.job.description || '',
      });
    } catch (e) {
      setState({ loading: false, error: e });
    }
  }, [id]);

  useEffect(() => { load(); }, [load]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await crmApi.updateJob({
        id,
        ...form,
        scheduled_for: form.scheduled_for ? new Date(form.scheduled_for).toISOString() : null,
      });
      toast({ title: 'Saved' });
      await load();
    } catch (e) {
      toast({ title: 'Save failed', description: e.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const addNote = async () => {
    if (!note.trim()) return;
    try {
      await crmApi.addActivity({ job_id: id, contact_id: state.contact?.id, type: noteType, direction: noteType === 'call' ? 'outbound' : null, body: note.trim() });
      setNote('');
      toast({ title: 'Logged' });
      await load();
    } catch (e) {
      toast({ title: 'Could not log', description: e.message, variant: 'destructive' });
    }
  };

  if (!CRM_CONFIGURED || state.error?.status === 401) {
    return <div className="p-6 md:p-8"><SetupNotice error={state.error} /></div>;
  }
  if (state.loading) return <div className="p-8 text-sm text-slate-400">Loading job…</div>;
  if (state.error) return <div className="p-8 text-sm text-rose-600">Couldn&apos;t load this job.</div>;

  const { job, contact, activities = [] } = state;

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      <Link to="/crm/pipeline" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-[#1B4D3E] mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to pipeline
      </Link>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{job.title || 'Untitled job'}</h1>
          <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded border ${stageMeta(job.stage).color}`}>{stageMeta(job.stage).label}</span>
        </div>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-1.5 bg-[#1B4D3E] hover:bg-[#153e32] text-white text-sm px-4 py-2 rounded-lg disabled:opacity-50">
          <Save className="w-4 h-4" /> {saving ? 'Saving…' : 'Save changes'}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Job form */}
        <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <Field label="Job title"><input className={inputCls} value={form.title} onChange={set('title')} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Service type"><input className={inputCls} value={form.service_type} onChange={set('service_type')} placeholder="Tree removal…" /></Field>
            <Field label="Stage">
              <select className={inputCls} value={form.stage} onChange={set('stage')}>
                {PIPELINE_STAGES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Priority">
              <select className={inputCls} value={form.priority} onChange={set('priority')}>
                <option value="emergency">Emergency</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
              </select>
            </Field>
            <Field label="Scheduled for"><input type="datetime-local" className={inputCls} value={form.scheduled_for} onChange={set('scheduled_for')} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Estimate ($)"><input type="number" className={inputCls} value={form.estimate_amount} onChange={set('estimate_amount')} /></Field>
            <Field label="Final billed ($)"><input type="number" className={inputCls} value={form.final_amount} onChange={set('final_amount')} /></Field>
          </div>
          <Field label="Property address"><input className={inputCls} value={form.address} onChange={set('address')} /></Field>
          <Field label="Description / scope"><textarea rows={4} className={inputCls} value={form.description} onChange={set('description')} /></Field>
        </div>

        {/* Contact + timeline */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900 mb-3">Contact</h3>
            {contact ? (
              <div className="space-y-2 text-sm">
                <div className="font-medium text-slate-800">{contact.name || 'Unknown'}</div>
                {contact.phone && <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-[#1B4D3E]"><Phone className="w-4 h-4" />{contact.phone}</a>}
                {contact.email && <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-slate-600 hover:text-[#1B4D3E]"><Mail className="w-4 h-4" />{contact.email}</a>}
                {contact.address && <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4" />{contact.address}</div>}
              </div>
            ) : (
              <p className="text-sm text-slate-400">No contact linked.</p>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900 mb-3">Activity</h3>
            <div className="flex gap-2 mb-2">
              <select value={noteType} onChange={(e) => setNoteType(e.target.value)} className="text-xs border border-slate-200 rounded-lg px-2 bg-slate-50">
                <option value="note">Note</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
              </select>
            </div>
            <div className="flex gap-2 mb-4">
              <input value={note} onChange={(e) => setNote(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addNote()} placeholder="Log a note or call…" className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4D3E]" />
              <button onClick={addNote} className="bg-[#1B4D3E] hover:bg-[#153e32] text-white px-2.5 rounded-lg"><MessageSquarePlus className="w-4 h-4" /></button>
            </div>
            <ul className="space-y-3 max-h-80 overflow-y-auto">
              {activities.length === 0 && <li className="text-sm text-slate-400">No activity yet.</li>}
              {activities.map((a) => (
                <li key={a.id} className="text-sm border-l-2 border-slate-100 pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500 uppercase">{a.type.replace('_', ' ')}</span>
                    <span className="text-xs text-slate-300">{timeAgo(a.created_at)}</span>
                  </div>
                  {a.subject && <div className="text-slate-700">{a.subject}</div>}
                  {a.body && <div className="text-slate-600 whitespace-pre-wrap">{a.body}</div>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
