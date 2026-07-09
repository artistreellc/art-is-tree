import React, { useState, useCallback, useRef, useEffect } from 'react';
import { generateSrcSet, generateWebPSrcSet, createLazyImageConfig } from '@/utils/imageOptimization';

const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '', 
  widths = [320, 640, 768, 1024, 1200],
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  aspectRatio = 'auto',
  width,
  height,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const imgRef = useRef(null);

  const handleLoad = useCallback((e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  }, [onLoad]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const webpSrcSet = generateWebPSrcSet(src, widths);
  const standardSrcSet = generateSrcSet(src, widths);
  const loadingConfig = createLazyImageConfig(priority);

  // If width/height are provided but aspect ratio is not explicitly defined,
  // calculate it natively for placeholder sizing to prevent CLS
  const computedAspectRatio = aspectRatio !== 'auto' ? aspectRatio : (width && height ? `${width}/${height}` : 'auto');

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 contain-content ${className}`} 
      style={{ 
        aspectRatio: computedAspectRatio, 
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        maxWidth: '100%',
        contain: 'layout paint size'
      }}
    >
      <picture>
        {webpSrcSet && (
          <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        )}
        {standardSrcSet && (
          <source srcSet={standardSrcSet} sizes={sizes} />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          onLoad={handleLoad}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          {...loadingConfig}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out will-change-transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </picture>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-hidden="true">
          <div className="w-6 h-6 border-2 border-[#1B4D3E]/20 border-t-[#1B4D3E] rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ResponsiveImage);