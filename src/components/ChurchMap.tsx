
import React from 'react';
import { Button } from '@/components/ui/button';
import { getMENAChurches } from '@/data/mockChurches';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const ChurchMap: React.FC = () => {
  const churches = getMENAChurches().slice(0, 7); // Use only a few churches for the map preview

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
          <Button className="bg-sky hover:bg-sky-600" asChild>
            <Link to="/churches">View Churches Directory</Link>
          </Button>
        </div>
      </div>
      
      {/* Sample map pins with proper images */}
      {churches.map((church, index) => (
        <div 
          key={church.id}
          className="absolute flex flex-col items-center cursor-pointer group"
          style={{ 
            left: `${20 + index * 10}%`, 
            top: `${30 + (index % 3) * 15}%` 
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white bg-sky flex items-center justify-center shadow-md z-10">
            <MapPin size={20} className="text-white" />
          </div>
          
          {/* Popup card on hover */}
          <div className="absolute w-48 bg-white rounded-md shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none -translate-y-2 group-hover:translate-y-0 z-20" style={{ bottom: '100%', marginBottom: '10px' }}>
            <div className="h-20 w-full mb-2 rounded overflow-hidden">
              <img 
                src={church.image} 
                alt={church.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e";
                }}
              />
            </div>
            <h4 className="text-sm font-semibold text-navy truncate">{church.name}</h4>
            <p className="text-xs text-navy/70 mb-1">{church.city}, {church.country}</p>
            <Button size="sm" className="w-full bg-gold hover:bg-gold/90 text-white text-xs h-7" asChild>
              <Link to={`/churches/${church.id}`}>View Profile</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChurchMap;
