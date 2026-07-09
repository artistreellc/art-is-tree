import React, { useState, useCallback, useRef, useEffect, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Loader2, AlertTriangle, XCircle, Maximize, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scriptLoader } from '@/utils/dynamicScriptLoader';

const containerStyle = { width: '100%', height: '100%', minHeight: '600px', borderRadius: '0.75rem' };
const defaultCenter = { lat: 36.8529, lng: -75.9780 };
const CITY_COLORS = { "Virginia Beach": "#1B4D3E", "Norfolk": "#2563EB", "Chesapeake": "#D97706", "Portsmouth": "#7C3AED", "Suffolk": "#DC2626", "Default": "#4B5563" };

const GoogleMapsNeighborhoods = forwardRef(({ neighborhoods, selectedNeighborhood, isLoading }, ref) => {
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [showDebug, setShowDebug] = useState(false);
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  
  const wrapperRef = useRef(null);
  const mapContainerRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const loadMapsAPI = async () => {
      try {
        if (!apiKey) throw new Error('Google Maps API key not configured');
        await scriptLoader.loadGoogleMaps(apiKey, ['places', 'geometry']);
        setMapsLoaded(true);
      } catch (error) {
        setLoadError(error);
      }
    };
    loadMapsAPI();
  }, [apiKey, isVisible]);

  useEffect(() => {
    if (!mapsLoaded || !mapContainerRef.current || map) return;
    try {
      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: defaultCenter, zoom: 10, disableDefaultUI: false, zoomControl: true, streetViewControl: false, mapTypeControl: false, fullscreenControl: true,
        styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }]
      });
      setMap(mapInstance);
      setInfoWindow(new window.google.maps.InfoWindow());
    } catch (error) {
      setLoadError(error);
    }
  }, [mapsLoaded, map]);

  const { validNeighborhoods, debugStats } = useMemo(() => {
    if (!neighborhoods) return { validNeighborhoods: [], debugStats: null };
    const valid = neighborhoods.filter(n => n.latitude != null && n.longitude != null && !isNaN(parseFloat(n.latitude)));
    const byCity = valid.reduce((acc, n) => { acc[n.city || 'Unknown'] = (acc[n.city || 'Unknown'] || 0) + 1; return acc; }, {});
    return { validNeighborhoods: valid, debugStats: { totalReceived: neighborhoods.length, validCount: valid.length, invalidCount: neighborhoods.length - valid.length, byCity } };
  }, [neighborhoods]);

  useEffect(() => {
    if (!map || !mapsLoaded || !window.google) return;
    markers.forEach(marker => marker.setMap(null));
    if (validNeighborhoods.length === 0) { setMarkers([]); return; }

    const newMarkers = validNeighborhoods.map(hood => {
      const marker = new window.google.maps.Marker({
        position: { lat: parseFloat(hood.latitude), lng: parseFloat(hood.longitude) },
        map: map, title: hood.neighborhood_name,
        icon: { path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", fillColor: CITY_COLORS[hood.city] || CITY_COLORS["Default"], fillOpacity: 1, strokeWeight: 2, strokeColor: "#FFFFFF", scale: 1.5, anchor: new window.google.maps.Point(12, 22) }
      });

      marker.addListener('click', () => {
        setActiveMarker(hood.id);
        map.panTo({ lat: parseFloat(hood.latitude), lng: parseFloat(hood.longitude) });
        if (infoWindow) {
          infoWindow.setContent(`
            <div style="max-width: 240px; padding: 8px;">
              <h3 style="font-family: 'Playfair Display', serif; font-weight: bold; font-size: 18px; color: #1a1a1a;">${hood.neighborhood_name}</h3>
              <p style="font-size: 12px; color: #666; margin: 8px 0;">${hood.description || 'Tree services available.'}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=${hood.latitude},${hood.longitude}" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; color: white; background-color: ${CITY_COLORS[hood.city] || '#1B4D3E'}; padding: 8px 12px; border-radius: 4px; text-decoration: none;">Get Directions</a>
            </div>
          `);
          infoWindow.open(map, marker);
        }
      });
      return marker;
    });
    setMarkers(newMarkers);
  }, [map, validNeighborhoods, mapsLoaded]);

  const fitAllMarkers = useCallback(() => {
    if (!map || validNeighborhoods.length === 0 || !window.google) return;
    const bounds = new window.google.maps.LatLngBounds();
    validNeighborhoods.forEach(n => bounds.extend({ lat: parseFloat(n.latitude), lng: parseFloat(n.longitude) }));
    map.fitBounds(bounds);
    window.google.maps.event.addListenerOnce(map, "idle", () => { if (map.getZoom() > 14) map.setZoom(14); });
  }, [map, validNeighborhoods]);

  useImperativeHandle(ref, () => ({ resetMap: () => { setActiveMarker(null); if (infoWindow) infoWindow.close(); fitAllMarkers(); }, fitBoundsToAll: fitAllMarkers }), [fitAllMarkers, infoWindow]);

  if (!apiKey) return <div className="p-8 text-center bg-red-50 text-red-800 rounded-xl"><AlertTriangle className="mx-auto mb-4" />Google Maps API key is missing.</div>;
  if (loadError) return <div className="p-8 text-center bg-red-50 text-red-800 rounded-xl"><XCircle className="mx-auto mb-4" />{loadError.message}</div>;

  return (
    <div ref={wrapperRef} className="flex flex-col gap-4 relative w-full h-[600px]">
      {(!isVisible || !mapsLoaded || isLoading) ? (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center rounded-xl border border-gray-200">
          <Loader2 className="w-12 h-12 text-[#1B4D3E] animate-spin mb-4" />
          <p className="text-gray-500 font-medium">Initializing Service Area Map...</p>
        </div>
      ) : (
        <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-gray-200 z-0 relative bg-white">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <Button size="sm" variant="secondary" onClick={fitAllMarkers} className="shadow-lg bg-white hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2">
              <Maximize className="w-3 h-3 mr-2" /> Show All Neighborhoods
            </Button>
          </div>
          <div ref={mapContainerRef} style={containerStyle} />
        </div>
      )}
    </div>
  );
});

export default React.memo(GoogleMapsNeighborhoods);