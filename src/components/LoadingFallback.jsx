import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full bg-transparent p-4">
      <div className="w-12 h-12 border-4 border-[#1B4D3E]/20 border-t-[#1B4D3E] rounded-full animate-spin"></div>
      <p className="mt-4 text-[#1B4D3E] font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingFallback;