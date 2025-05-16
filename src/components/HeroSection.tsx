
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky-100 to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-gray-900">
            Support Faith-Based Missions <span className="text-sky-500">Around the World</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Connect with churches and ministries making a difference in communities worldwide. 
            Your donation helps build, grow, and sustain Christ-centered projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-2 h-auto">
              Browse Projects
            </Button>
            <Button variant="outline" className="border-sky-500 text-sky-700 hover:bg-sky-50 font-medium px-6 py-2 h-auto">
              Start a Project
            </Button>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for projects, churches, or locations..."
              className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
