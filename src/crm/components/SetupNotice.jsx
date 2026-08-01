import React from 'react';
import { Settings2 } from 'lucide-react';

// Shown when the CRM API isn't wired up yet (missing token / env / schema).
// Keeps the app friendly instead of throwing a raw error at the owner.
const SetupNotice = ({ error }) => {
  const unauthorized = error?.status === 401;
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
          <Settings2 className="w-5 h-5" />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Almost ready — finish the connection</h2>
      </div>
      <p className="text-sm text-slate-600 mb-4">
        The CRM interface is live, but it isn&apos;t talking to your database yet.
        {unauthorized ? ' The access token is missing or incorrect.' : ' A few environment variables need to be set on Vercel.'}
      </p>
      <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
        <li>Run the schema in <code className="bg-slate-100 px-1 rounded">supabase/migrations/0001_crm_schema.sql</code> on your Supabase project.</li>
        <li>In Vercel → Settings → Environment Variables, add: <code className="bg-slate-100 px-1 rounded">SUPABASE_SERVICE_ROLE_KEY</code>, <code className="bg-slate-100 px-1 rounded">CRM_ACCESS_TOKEN</code>, and <code className="bg-slate-100 px-1 rounded">VITE_CRM_ACCESS_TOKEN</code> (same value as CRM_ACCESS_TOKEN).</li>
        <li>Redeploy. Full step-by-step is in <code className="bg-slate-100 px-1 rounded">CRM_README.md</code>.</li>
      </ol>
    </div>
  );
};

export default SetupNotice;
