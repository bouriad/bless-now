
import React from 'react';
import { Button } from '@/components/ui/button';

const ChurchMap: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full bg-sky-100 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* This is a placeholder for the actual map implementation */}
        <div className="text-center">
          <div className="w-16 h-16 mb-4 mx-auto rounded-full bg-sky-200 flex items-center justify-center">
            <span className="text-sky-600 text-2xl">🌎</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map Coming Soon</h3>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Our interactive church map will allow you to explore partner churches around the world.
          </p>
          <Button className="bg-sky-500 hover:bg-sky-600">
            View Text Directory
          </Button>
        </div>
      </div>
      
      {/* Sample map pins for visual design - these would be dynamic in a real implementation */}
      <div className="map-pin absolute left-[25%] top-[30%]">✝️</div>
      <div className="map-pin absolute left-[60%] top-[40%]">✝️</div>
      <div className="map-pin absolute left-[75%] top-[35%]">✝️</div>
      <div className="map-pin absolute left-[40%] top-[60%]">✝️</div>
      <div className="map-pin absolute left-[50%] top-[25%]">✝️</div>
      <div className="map-pin absolute left-[30%] top-[55%]">✝️</div>
      <div className="map-pin absolute left-[80%] top-[65%]">✝️</div>
    </div>
  );
};

export default ChurchMap;
