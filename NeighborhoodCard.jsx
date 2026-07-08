import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Navigation, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NeighborhoodCard = ({ neighborhood, onCenterMap }) => {
  const hasCoordinates = 
    neighborhood.latitude !== undefined && 
    neighborhood.latitude !== null && 
    neighborhood.longitude !== undefined && 
    neighborhood.longitude !== null;

  return (
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="bg-[#1B4D3E]/10 p-2 rounded-lg shrink-0 group-hover:bg-[#1B4D3E] transition-colors duration-300">
            <MapPin className="w-6 h-6 text-[#1B4D3E] group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full uppercase tracking-wider">
            {neighborhood.region || 'VA Beach'}
          </span>
        </div>

        <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
          {neighborhood.neighborhood_name}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
          {neighborhood.description || "Premium tree services available in this area."}
        </p>

        <div className="pt-4 border-t border-gray-100 space-y-3">
          {hasCoordinates ? (
            <div className="flex items-center text-xs text-gray-400 font-mono">
               <Navigation className="w-3 h-3 mr-1" />
               {Number(neighborhood.latitude).toFixed(4)}, {Number(neighborhood.longitude).toFixed(4)}
            </div>
          ) : (
             <div className="flex items-center text-xs text-amber-500 font-medium">
               <AlertCircle className="w-3 h-3 mr-1" />
               Location data pending
            </div>
          )}
          
          <Button 
            onClick={() => onCenterMap(neighborhood)}
            variant="outline"
            disabled={!hasCoordinates}
            className="w-full justify-between group-hover:bg-[#1B4D3E] group-hover:text-white border-[#1B4D3E]/20"
          >
            {hasCoordinates ? "View on Map" : "Map Unavailable"}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NeighborhoodCard;