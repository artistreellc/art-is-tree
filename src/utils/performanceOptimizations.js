/**
 * Performance Optimization Utilities
 */

export const deferToIdleCallback = (callback, timeout = 3000) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout });
  } else {
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50)
      });
    }, 1);
  }
};