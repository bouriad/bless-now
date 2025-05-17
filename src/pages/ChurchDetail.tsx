
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getChurchById } from '@/data/mockChurches';
import { getActiveProjectsByChurch } from '@/data/mockProjects';
import ProjectCard from '@/components/ProjectCard';
import { MapPin } from 'lucide-react';

const ChurchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const church = getChurchById(id || '');
  const churchProjects = getActiveProjectsByChurch(id || '');
  
  if (!church) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-playfair font-bold text-navy mb-4">Church Not Found</h1>
            <p className="text-navy/80 font-public mb-6">The church you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/churches">Return to Churches Directory</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96 bg-gray-100">
          <img 
            src={church.image} 
            alt={church.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-4 py-6 text-white">
              <div className="flex items-center mb-2">
                <MapPin size={16} className="mr-1" />
                <span className="font-public">
                  {church.city}, {church.country}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold">{church.name}</h1>
            </div>
          </div>
        </div>
        
        {/* Church Info */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-playfair font-bold text-navy mb-4">About {church.name}</h2>
              <p className="text-navy/80 font-public mb-6">{church.description}</p>
              
              <div className="bg-ivory rounded-lg p-6 mb-6">
                <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Church Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 font-public">
                  <div>
                    <p className="text-sm text-navy/60">Founded</p>
                    <p className="text-navy">{church.founded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-navy/60">Denomination</p>
                    <p className="text-navy">{church.denomination}</p>
                  </div>
                  {church.website && (
                    <div>
                      <p className="text-sm text-navy/60">Website</p>
                      <a href={church.website} target="_blank" rel="noopener noreferrer" className="text-sky hover:underline">
                        Visit Website
                      </a>
                    </div>
                  )}
                  {church.email && (
                    <div>
                      <p className="text-sm text-navy/60">Email</p>
                      <a href={`mailto:${church.email}`} className="text-sky hover:underline">
                        {church.email}
                      </a>
                    </div>
                  )}
                  {church.phone && (
                    <div>
                      <p className="text-sm text-navy/60">Phone</p>
                      <p className="text-navy">{church.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-ivory rounded-lg p-6">
                <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Support {church.name}</h3>
                <p className="text-navy/80 font-public mb-4">
                  Your donation helps this church continue its vital ministry work in {church.city}.
                </p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-white font-public">
                  Donate to {church.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        {churchProjects.length > 0 && (
          <div className="bg-white py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-playfair font-bold text-navy mb-6">
                Current Church Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {churchProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ChurchDetail;
