
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky/10 to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-navy">
            Empowering the Local Church <span className="text-sky">Around the World</span>
          </h1>
          <p className="text-lg md:text-xl text-navy mb-8 font-public">
            Connect with local churches making a lasting impact in their communities. 
            Your donation helps build, strengthen, and sustain Christ-centered congregations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold/90 text-white font-medium px-6 py-2 h-auto">
              Browse Churches
            </Button>
            <Button variant="outline" className="border-sky text-sky hover:bg-sky/10 font-medium px-6 py-2 h-auto">
              Start a Church Project
            </Button>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for local churches or projects..."
              className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent font-public"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold text-white p-2 rounded-full hover:bg-gold/90 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
