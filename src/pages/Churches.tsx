
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Filter, Search } from 'lucide-react';
import { getMENAChurches } from '@/data/mockChurches';
import { searchChurches } from '@/utils/searchUtils';
import { Input } from '@/components/ui/input';

const Churches = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';

  const [churches] = useState(getMENAChurches());
  const [countryFilter, setCountryFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredChurches, setFilteredChurches] = useState(churches);
  
  // Get unique countries and cities for filters
  const countries = [...new Set(churches.map(church => church.country))];
  const cities = countryFilter === 'all' 
    ? [...new Set(churches.map(church => church.city))]
    : [...new Set(churches.filter(church => church.country === countryFilter).map(church => church.city))];
  
  // Apply filters and search
  useEffect(() => {
    let result = churches;
    
    // Apply search if there is a query
    if (searchQuery) {
      result = searchChurches(result, searchQuery);
    }
    
    // Apply filters
    if (countryFilter !== 'all') {
      result = result.filter(church => church.country === countryFilter);
    }
    
    if (cityFilter !== 'all') {
      result = result.filter(church => church.city === cityFilter);
    }
    
    setFilteredChurches(result);
  }, [searchQuery, countryFilter, cityFilter, churches]);
  
  // Handle initial search from URL params
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      // The filtering will be applied by the other useEffect
    }
  }, [initialQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/churches?q=${encodeURIComponent(searchQuery.trim())}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-playfair font-bold text-navy mb-2">
              MENA Partner Churches
            </h1>
            <p className="text-navy/80 font-public">
              Connect with our partner churches across the Middle East and North Africa region.
            </p>
          </div>
          
          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by church name, location, or denomination..." 
                className="flex-grow"
              />
              <Button className="bg-sky hover:bg-sky/90" type="submit">
                <Search size={18} />
              </Button>
            </form>
          </div>
          
          {/* Filters */}
          <div className="bg-ivory p-6 rounded-lg mb-8 shadow-sm">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-navy mr-2" />
              <h2 className="text-lg font-playfair font-semibold text-navy">Filter Churches</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-navy font-public">Country</label>
                <select
                  id="country"
                  className="bg-white border border-gray-300 text-navy text-sm rounded-lg focus:ring-sky focus:border-sky block w-full p-2.5 font-public"
                  value={countryFilter}
                  onChange={(e) => {
                    setCountryFilter(e.target.value);
                    setCityFilter('all'); // Reset city filter when country changes
                  }}
                >
                  <option value="all">All Countries</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-navy font-public">City</label>
                <select
                  id="city"
                  className="bg-white border border-gray-300 text-navy text-sm rounded-lg focus:ring-sky focus:border-sky block w-full p-2.5 font-public"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option value="all">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Churches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChurches.map((church) => (
              <Card key={church.id} className="overflow-hidden flex flex-col h-full">
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
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-sky mr-1" />
                    <span className="text-sm text-navy/70 font-public">
                      {church.city}, {church.country}
                    </span>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-navy">{church.name}</h3>
                  <p className="text-navy/80 text-sm mb-4 font-public flex-grow">{church.description}</p>
                  <div className="mt-auto">
                    <Button className="w-full bg-gold hover:bg-gold/90 text-white font-public" asChild>
                      <Link to={`/churches/${church.id}`}>View Church Profile</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredChurches.length === 0 && (
            <div className="text-center py-10">
              <p className="font-public text-navy/70">No churches match your filter criteria. Please try different filters.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Churches;
