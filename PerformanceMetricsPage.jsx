import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Clock, Zap, AlertTriangle, CheckCircle, RefreshCcw } from 'lucide-react';
import { getMetrics } from '@/utils/lcpMonitoring';
import { Button } from '@/components/ui/button';

const PerformanceMetricsPage = () => {
  const [metrics, setMetrics] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchMetrics = () => {
    const currentMetrics = getMetrics();
    setMetrics(currentMetrics);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value, good, poor) => {
    if (value === null || value === undefined) return 'text-gray-400';
    if (value <= good) return 'text-green-500';
    if (value >= poor) return 'text-red-500';
    return 'text-yellow-500';
  };

  const formatTime = (ms) => {
    if (ms === null || ms === undefined) return 'Waiting...';
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!metrics) return null;

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <Helmet>
        <title>Performance Metrics | Tree Service Virginia Beach</title>
        <meta name="description" content="Performance metrics and monitoring. Track website performance, Core Web Vitals, and optimization metrics for your professional tree care business website." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-playfair flex items-center gap-3">
            <Activity className="w-8 h-8 text-[#1B4D3E]" />
            Core Web Vitals Dashboard
          </h1>
          <p className="text-gray-500 mt-2">Real-time performance monitoring across all routes.</p>
        </div>
        <Button onClick={fetchMetrics} variant="outline" className="flex items-center gap-2">
          <RefreshCcw className="w-4 h-4" />
          Refresh (Auto-updates)
        </Button>
      </div>

      {metrics.metrics.LCP > 2500 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-8 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
          <div>
            <h3 className="text-red-800 font-bold">LCP Alert</h3>
            <p className="text-red-700 text-sm">Largest Contentful Paint is over 2.5s. Consider optimizing hero images (use eager loading, proper sizing) and reducing render-blocking resources.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* LCP */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">LCP</p>
              <p className="text-xs text-gray-400">Largest Contentful Paint</p>
            </div>
            <Clock className={`w-6 h-6 ${getStatusColor(metrics.metrics.LCP, 2500, 4000)}`} />
          </div>
          <div className="mt-auto">
            <span className={`text-3xl font-bold ${getStatusColor(metrics.metrics.LCP, 2500, 4000)}`}>
              {formatTime(metrics.metrics.LCP)}
            </span>
            <div className="w-full bg-gray-100 h-2 mt-3 rounded-full overflow-hidden">
              <div 
                className={`h-full ${metrics.metrics.LCP <= 2500 ? 'bg-green-500' : metrics.metrics.LCP >= 4000 ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ width: `${Math.min((metrics.metrics.LCP || 0) / 4000 * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* FCP */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">FCP</p>
              <p className="text-xs text-gray-400">First Contentful Paint</p>
            </div>
            <Zap className={`w-6 h-6 ${getStatusColor(metrics.metrics.FCP, 1800, 3000)}`} />
          </div>
          <div className="mt-auto">
            <span className={`text-3xl font-bold ${getStatusColor(metrics.metrics.FCP, 1800, 3000)}`}>
              {formatTime(metrics.metrics.FCP)}
            </span>
            <div className="w-full bg-gray-100 h-2 mt-3 rounded-full overflow-hidden">
              <div 
                className={`h-full ${metrics.metrics.FCP <= 1800 ? 'bg-green-500' : metrics.metrics.FCP >= 3000 ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ width: `${Math.min((metrics.metrics.FCP || 0) / 3000 * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* CLS */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">CLS</p>
              <p className="text-xs text-gray-400">Cumulative Layout Shift</p>
            </div>
            <Activity className={`w-6 h-6 ${getStatusColor(metrics.metrics.CLS, 0.1, 0.25)}`} />
          </div>
          <div className="mt-auto">
            <span className={`text-3xl font-bold ${getStatusColor(metrics.metrics.CLS, 0.1, 0.25)}`}>
              {(metrics.metrics.CLS || 0).toFixed(3)}
            </span>
            <div className="w-full bg-gray-100 h-2 mt-3 rounded-full overflow-hidden">
              <div 
                className={`h-full ${metrics.metrics.CLS <= 0.1 ? 'bg-green-500' : metrics.metrics.CLS >= 0.25 ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ width: `${Math.min((metrics.metrics.CLS || 0) / 0.25 * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* TBT */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">TBT</p>
              <p className="text-xs text-gray-400">Total Blocking Time</p>
            </div>
            <Activity className={`w-6 h-6 ${getStatusColor(metrics.metrics.TBT, 200, 600)}`} />
          </div>
          <div className="mt-auto">
            <span className={`text-3xl font-bold ${getStatusColor(metrics.metrics.TBT, 200, 600)}`}>
              {metrics.metrics.TBT}ms
            </span>
            <div className="w-full bg-gray-100 h-2 mt-3 rounded-full overflow-hidden">
              <div 
                className={`h-full ${metrics.metrics.TBT <= 200 ? 'bg-green-500' : metrics.metrics.TBT >= 600 ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ width: `${Math.min((metrics.metrics.TBT || 0) / 600 * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900">Long Tasks Log</h2>
          <p className="text-sm text-gray-500">Tasks taking longer than 50ms that block the main thread.</p>
        </div>
        <div className="p-0">
          {metrics.longTasks.length === 0 ? (
            <div className="p-8 text-center text-gray-500 flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-3" />
              <p>No long tasks detected. The main thread is running smoothly!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 uppercase">
                  <tr>
                    <th className="px-6 py-3">Task Name</th>
                    <th className="px-6 py-3 text-right">Duration (ms)</th>
                    <th className="px-6 py-3 text-right">Blocking Time (ms)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {metrics.longTasks.slice(-10).reverse().map((task, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{task.name}</td>
                      <td className="px-6 py-4 text-right">{task.duration}</td>
                      <td className="px-6 py-4 text-right text-red-500 font-semibold">{task.blockingTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-right">Last updated: {lastUpdated.toLocaleTimeString()}</p>
    </div>
  );
};

export default PerformanceMetricsPage;