import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// SECURITY: this page must never read the Google Places API key on the client.
// A `VITE_`-prefixed var referenced via import.meta.env gets inlined into the
// public JS bundle at build time, which would leak the key. Instead we probe
// the server endpoint (/api/reviews), which holds the key server-side and only
// ever returns a { configured, total, rating, error } status — no secret.
export default function DebugGooglePlacesPage() {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [status, setStatus] = useState(null); // { configured, live }

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      const res = await fetch('/api/reviews');
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) {
        setStatus({ configured: false, live: false });
        setTestResult({
          success: false,
          message: `The /api/reviews endpoint did not return JSON (HTTP ${res.status}). The serverless function may not be deployed.`,
        });
        return;
      }
      const data = await res.json();
      const configured = data.configured !== false;
      const live = typeof data.total === 'number' && data.total > 0;
      setStatus({ configured, live });

      const gs = data.googleStatus;
      const gsHelp = {
        REQUEST_DENIED: 'Google denied the request — the API key is missing the (legacy) Places API, billing is off, or the key is restricted. Enable "Places API" for this key in Google Cloud (or switch to a key that has it) and confirm billing is on.',
        OVER_QUERY_LIMIT: 'The key hit its Google quota/billing cap.',
        INVALID_REQUEST: 'The Place lookup request was malformed or the Place ID is wrong.',
        ZERO_RESULTS: 'Google found no place for the lookup — set GOOGLE_PLACE_ID explicitly in Vercel.',
        UNKNOWN: 'Google returned no status — check the key and network.',
      };

      if (gs && gs !== 'OK') {
        setTestResult({
          success: false,
          message: `Google returned status: ${gs}. ${gsHelp[gs] || 'See Google Cloud Console for this key.'}`,
        });
      } else if (data.error) {
        setTestResult({
          success: false,
          message: 'The endpoint responded, but Google Places returned an error server-side. Check the API key, billing, and Places API enablement in Google Cloud.',
        });
      } else if (!configured) {
        setTestResult({
          success: false,
          message: 'The API key is NOT configured on the server. Add GOOGLE_PLACES_API_KEY (server-side, no VITE_ prefix) in Vercel and redeploy.',
        });
      } else if (live) {
        setTestResult({
          success: true,
          message: `Connection successful. Live Google data is flowing: ${data.total} reviews, ${data.rating}-star average.`,
        });
      } else {
        setTestResult({
          success: true,
          message: 'The key is configured and the endpoint is healthy, but no live review total came back yet (Place ID lookup or fresh cache). The site is using its accurate fallback values.',
        });
      }
    } catch (error) {
      setStatus({ configured: false, live: false });
      setTestResult({
        success: false,
        message: 'Network error reaching /api/reviews.',
        details: error.message,
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Google Places Debug</h1>
        <p className="text-muted-foreground mt-2">
          Verify the server-side Google Places configuration by probing the /api/reviews endpoint.
          The API key stays on the server and is never exposed here.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="bg-card text-card-foreground">
            <CardTitle className="flex items-center gap-2">
              Configuration Status
              {status == null ? (
                <Badge variant="secondary">Unknown — run the test</Badge>
              ) : status.configured ? (
                <Badge variant="default" className="bg-green-600 hover:bg-green-700">Configured</Badge>
              ) : (
                <Badge variant="destructive">Missing</Badge>
              )}
            </CardTitle>
            <CardDescription>Server-side check via /api/reviews (key never leaves the server)</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-card-foreground">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {status == null
                    ? 'Click “Test Connectivity” to ask the server whether the Places key is configured and live.'
                    : status.live
                      ? 'Live Google review data is flowing through the endpoint.'
                      : status.configured
                        ? 'Key configured; endpoint healthy.'
                        : 'Key not configured on the server.'}
                </p>
              </div>
              <Button
                onClick={testConnection}
                disabled={isTesting}
                className="w-full md:w-auto"
              >
                {isTesting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Test Connectivity
              </Button>
            </div>
          </CardContent>
        </Card>

        {testResult && (
          <Alert variant={testResult.success ? 'default' : 'destructive'} className={testResult.success ? 'border-green-600/50 bg-green-50/50 dark:bg-green-900/10' : ''}>
            {testResult.success ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle className={testResult.success ? 'text-green-700 dark:text-green-400 font-semibold' : 'font-semibold'}>
              {testResult.success ? 'Test Successful' : 'Test Failed'}
            </AlertTitle>
            <AlertDescription className="mt-2 text-sm">
              <p>{testResult.message}</p>
              {testResult.details && (
                <p className="mt-1 font-mono text-xs opacity-80 bg-background/50 p-2 rounded">{testResult.details}</p>
              )}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
