
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { getMENAChurches } from '@/data/mockChurches';

const ChurchMapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const churches = getMENAChurches();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-sky-50 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-playfair font-bold text-navy mb-2">
                Partner Churches Map
              </h1>
              <p className="text-navy/80 font-public max-w-2xl mx-auto">
                Explore our network of churches making a difference across the Middle East and North Africa.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto bg-white rounded-lg p-4 shadow-sm">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input 
                  placeholder="Search by country, city, or church name..." 
                  className="flex-grow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="bg-sky hover:bg-sky/90" type="submit">
                  <Search size={18} />
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="relative h-[600px] w-full bg-sky-100 rounded-xl overflow-hidden border shadow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for actual map implementation */}
                <div className="text-center">
                  <div className="w-20 h-20 mb-4 mx-auto rounded-full bg-sky-200 flex items-center justify-center">
                    <span className="text-sky-600 text-3xl">🌎</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-navy/80 mb-6 max-w-md mx-auto font-public">
                    Our interactive church map will allow you to explore partner churches across the MENA region.
                  </p>
                  <Button className="bg-sky hover:bg-sky/90" asChild>
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
                    left: `${15 + (index % 5) * 15}%`, 
                    top: `${20 + (index % 4) * 15}%` 
                  }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-sky flex items-center justify-center shadow-lg z-10">
                    <MapPin size={22} className="text-white" />
                  </div>
                  
                  {/* Popup card on hover */}
                  <div className="absolute w-56 bg-white rounded-md shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none -translate-y-2 group-hover:translate-y-0 z-20" style={{ bottom: '100%', marginBottom: '12px' }}>
                    <div className="h-28 w-full mb-2 rounded overflow-hidden">
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
                    <p className="text-xs text-navy/70 mb-2">{church.city}, {church.country}</p>
                    <Button size="sm" className="w-full bg-gold hover:bg-gold/90 text-white text-xs" asChild>
                      <Link to={`/churches/${church.id}`}>View Church Profile</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-playfair font-semibold mb-6 text-navy">Featured Partner Churches</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {churches.slice(0, 6).map((church) => (
                <div key={church.id} className="bg-white rounded-lg shadow-sm overflow-hidden border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={church.image} 
                      alt={church.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair font-semibold text-lg mb-1 text-navy">{church.name}</h3>
                    <div className="text-navy/70 text-sm mb-3 font-public">{church.city}, {church.country}</div>
                    <p className="text-sm text-navy/80 mb-4 font-public">
                      {church.description.substring(0, 100)}...
                    </p>
                    <div className="flex justify-end text-sm">
                      <Link to={`/churches/${church.id}`} className="text-sky hover:text-sky/80 font-medium">
                        View Profile →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChurchMapPage;
