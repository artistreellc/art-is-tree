
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UploadCloud, CheckCircle, AlertCircle, Loader2, RefreshCw, Radio } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { syncGoogleReviews, testGoogleConnection } from '@/utils/syncReviews';
import { cn } from '@/lib/utils';

const SyncReviewsButton = ({ onSyncSuccess, className }) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [hasError, setHasError] = useState(false); 
  const { toast } = useToast();

  const handleTestConnection = async () => {
    setIsTesting(true);
    
    // DISABLED: Calling simulated testConnection instead of invoking disabled logic
    setTimeout(() => {
      toast({
        title: "Feature Disabled",
        description: "Google Places connection test is temporarily disabled.",
        className: "bg-amber-50 text-amber-900 border-amber-200"
      });
      setIsTesting(false);
    }, 500);
  };

  const handleSync = async () => {
    if (isSyncing) return;
    
    setIsSyncing(true);
    setHasError(false);

    // DISABLED: Syncing disabled
    setTimeout(() => {
      toast({
        title: "Feature Disabled",
        description: "Google Reviews sync is temporarily disabled.",
        className: "bg-amber-50 text-amber-900 border-amber-200",
        action: <AlertCircle className="w-5 h-5 text-amber-600" />,
        duration: 4000,
      });
      setIsSyncing(false);
    }, 500);
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={handleTestConnection}
        disabled={isTesting || isSyncing}
        variant="outline"
        size="sm"
        className="text-xs h-9"
      >
        {isTesting ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Radio className="w-3 h-3 mr-2" />}
        Test Connection
      </Button>

      <Button 
        onClick={handleSync} 
        disabled={isSyncing} 
        variant={hasError ? "destructive" : "outline"} 
        className={cn(
          "gap-2 min-w-[160px] transition-all duration-200",
          hasError 
             ? "border-red-500 hover:bg-red-50 text-red-600"
             : "border-dashed border-gray-300 hover:border-[#1B4D3E] hover:text-[#1B4D3E] hover:bg-[#1B4D3E]/5",
          className
        )}
      >
        {isSyncing ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Syncing...</span>
          </>
        ) : hasError ? (
          <>
            <RefreshCw className="w-4 h-4" />
            <span>Retry Sync</span>
          </>
        ) : (
          <>
            <UploadCloud className="w-4 h-4" />
            <span>Sync Google Reviews</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SyncReviewsButton;
