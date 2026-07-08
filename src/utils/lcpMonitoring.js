import { onCLS, onFCP, onLCP, onINP, onTTFB } from 'web-vitals';

/**
 * Core Web Vitals & Performance Monitoring using web-vitals
 * Tracks LCP, FCP, INP, CLS, TTFB in real-time.
 */

export const performanceData = {
  metrics: {
    LCP: null,
    FCP: null,
    CLS: null,
    INP: null,
    TTFB: null,
    SpeedIndex: null,
    TBT: 0
  },
  longTasks: []
};

let observersInitialized = false;

const reportMetricToConsole = (metric) => {
  const { name, value, rating } = metric;
  performanceData.metrics[name] = Math.round(value * 100) / 100;
  
  if (rating === 'poor') {
    console.warn(`⚠️ [PerfMon] Poor ${name} detected: ${value} (Rating: ${rating})`);
  } else if (rating === 'needs-improvement') {
    console.warn(`⚠️ [PerfMon] ${name} needs improvement: ${value}`);
  } else {
    if (import.meta.env.DEV) console.log(`✅ [PerfMon] Good ${name}: ${value}`);
  }
};

export const initPerformanceMonitoring = () => {
  if (observersInitialized || typeof window === 'undefined') return;
  observersInitialized = true;
  
  if (import.meta.env.DEV) console.log('📊 [PerfMon] Initializing Core Web Vitals monitoring...');

  // Track standard Web Vitals using web-vitals library
  onCLS(reportMetricToConsole);
  onFCP(reportMetricToConsole);
  onLCP(reportMetricToConsole);
  onINP(reportMetricToConsole);
  onTTFB(reportMetricToConsole);

  // Fallback for Long Tasks / TBT calculation since web-vitals doesn't do TBT directly
  try {
    let tbtValue = 0;
    const longTaskObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const blockingTime = entry.duration - 50;
        if (blockingTime > 0) {
          tbtValue += blockingTime;
          performanceData.metrics.TBT = Math.round(tbtValue);
          performanceData.longTasks.push({
            name: entry.name,
            duration: Math.round(entry.duration),
            blockingTime: Math.round(blockingTime)
          });
          
          if (blockingTime > 200) {
            console.warn(`⚠️ [PerfMon] Severe Long Task detected: ${Math.round(entry.duration)}ms (Blocking: ${Math.round(blockingTime)}ms)`);
          }
        }
      }
    });
    longTaskObserver.observe({ type: 'longtask', buffered: true });
  } catch (e) {
    if (import.meta.env.DEV) console.log('[PerfMon] Long Tasks API not supported in this browser.');
  }
};

export const getMetrics = () => ({ ...performanceData });