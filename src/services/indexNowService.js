
import { INDEXNOW_KEY, INDEXNOW_ENDPOINTS } from '../config/indexNowConfig';

/**
 * DISABLED: Network requests to IndexNow endpoints are disabled to prevent fetch errors.
 * 
 * Submits URLs to all configured IndexNow endpoints
 * @param {string[]} urlList - Array of URLs to submit
 * @param {string} key - IndexNow key
 * @returns {Promise<Object>} Status object
 */
const submitPayload = async (urlList, key = INDEXNOW_KEY) => {
  // Mocking the successful response to prevent fetch() loops
  console.log('[IndexNow] Submission mocked/disabled for:', urlList);
  return {
    success: true,
    results: INDEXNOW_ENDPOINTS.map(endpoint => ({ endpoint, success: true })),
    submittedCount: urlList?.length || 0
  };
};

/**
 * Submits a single URL to IndexNow
 */
export const submitToIndexNow = async (url, key = INDEXNOW_KEY) => {
  if (!url) return { success: false, error: 'No URL provided' };
  return await submitPayload([url], key);
};

/**
 * Submits multiple URLs to IndexNow
 */
export const submitMultipleUrls = async (urls, key = INDEXNOW_KEY) => {
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return { success: false, error: 'Invalid URL list' };
  }
  return await submitPayload(urls, key);
};
