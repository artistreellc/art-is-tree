
/**
 * DISABLED: All Supabase Edge Function invocations are completely removed.
 * Returns synchronous mock data to prevent any fetch error loops.
 */

export const testGoogleConnection = async () => {
  console.log('[SYNC_REVIEWS] Connection test completely disabled');
  return { success: true, message: 'Disabled: Connection test mocked' };
};

export const syncGoogleReviews = async () => {
  console.log('[SYNC_REVIEWS] Sync completely disabled');
  return { success: true, processed: 0, message: "Disabled: Sync mock successful" };
};
