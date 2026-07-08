import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function DebugGooglePlacesPage() {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const isKeyConfigured = Boolean(apiKey);

  const testConnection = async () => {
    if (!isKeyConfigured) {
      setTestResult({
        success: false,
        message: 'Cannot test: VITE_GOOGLE_PLACES_API_KEY is missing from environment variables.'
      });
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      // Simple Places Text Search API call to verify API key validity
      // Using a proxy or directly assuming CORS isn't strictly blocking this simple text fetch,
      // or relying on the browser to at least return a 403/200 code
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Virginia+Beach&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK' || data.status === 'ZERO_RESULTS') {
        setTestResult({
          success: true,
          message: 'Connection successful! The API key is valid and Places API is reachable.',
          data: data
        });
      } else {
        setTestResult({
          success: false,
          message: `API returned an error status: ${data.status}`,
          details: data.error_message || 'No additional details provided by the API.'
        });
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Network error occurred while reaching out to Google Places API. Note: This might be due to CORS policies on the client side.',
        details: error.message
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
          Verify your Google Places API configuration and test external connectivity.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="bg-card text-card-foreground">
            <CardTitle className="flex items-center gap-2">
              Configuration Status
              {isKeyConfigured ? (
                <Badge variant="default" className="bg-green-600 hover:bg-green-700">Configured</Badge>
              ) : (
                <Badge variant="destructive">Missing</Badge>
              )}
            </CardTitle>
            <CardDescription>Environment variable check for VITE_GOOGLE_PLACES_API_KEY</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-card-foreground">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-mono text-sm bg-muted p-2 rounded-md truncate max-w-sm">
                  {isKeyConfigured ? `${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}` : 'Key not found'}
                </p>
                <p className="text-xs text-muted-foreground">Make sure this matches your Google Cloud Console.</p>
              </div>
              <Button 
                onClick={testConnection} 
                disabled={isTesting || !isKeyConfigured}
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