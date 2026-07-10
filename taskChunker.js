/**
 * Task Chunking Utility
 * Breaks up long synchronous tasks (like processing large arrays) into smaller chunks.
 * Yields control back to the browser's main thread between chunks to prevent
 * long tasks and improve Interaction to Next Paint (INP) and Total Blocking Time (TBT).
 */

export const processInChunks = async (items, processFn, chunkSize = 20, onProgress = null) => {
  if (!items || !items.length) return [];

  const results = [];
  const totalChunks = Math.ceil(items.length / chunkSize);

  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, items.length);
    const chunk = items.slice(start, end);

    // Process the chunk synchronously
    const chunkResults = chunk.map((item, index) => processFn(item, start + index));
    results.push(...chunkResults);

    if (onProgress) {
      onProgress({
        currentChunk: i + 1,
        totalChunks,
        progress: Math.round(((i + 1) / totalChunks) * 100)
      });
    }

    // Yield back to the main thread
    // Using requestIdleCallback if available, otherwise setTimeout
    await new Promise(resolve => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => resolve(), { timeout: 50 });
      } else {
        setTimeout(resolve, 0);
      }
    });
  }

  return results;
};

export default { processInChunks };