
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const ChurchMapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-sky-50 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">
                Partner Churches Map
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our network of churches making a difference around the world.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto bg-white rounded-lg p-4 shadow-sm">
              <div className="flex gap-2">
                <Input 
                  placeholder="Search by country, city, or church name..." 
                  className="flex-grow"
                />
                <Button className="bg-sky-500 hover:bg-sky-600">
                  <Search size={18} />
                </Button>
              </div>
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Our interactive church map will allow you to explore partner churches around the world.
                  </p>
                  <Button className="bg-sky-500 hover:bg-sky-600">
                    View Text Directory
                  </Button>
                </div>
              </div>
              
              {/* Sample map pins for visual design */}
              <div className="map-pin absolute left-[25%] top-[30%]">✝️</div>
              <div className="map-pin absolute left-[60%] top-[40%]">✝️</div>
              <div className="map-pin absolute left-[75%] top-[35%]">✝️</div>
              <div className="map-pin absolute left-[40%] top-[60%]">✝️</div>
              <div className="map-pin absolute left-[50%] top-[25%]">✝️</div>
              <div className="map-pin absolute left-[30%] top-[55%]">✝️</div>
              <div className="map-pin absolute left-[80%] top-[65%]">✝️</div>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Featured Partner Churches</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${index + 1500000000000}`}
                      alt="Church" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Grace Community Church</h3>
                    <div className="text-gray-600 text-sm mb-3">Atlanta, Georgia, USA</div>
                    <p className="text-sm text-gray-700 mb-4">
                      A vibrant congregation focused on community outreach and youth ministry, serving the Atlanta area since 1985.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-faith-green-600 font-medium">3 active projects</span>
                      <a href="#" className="text-sky-600 hover:text-sky-800">View Profile →</a>
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
