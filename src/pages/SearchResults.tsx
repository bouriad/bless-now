
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { getMENAChurches } from '@/data/mockChurches';
import { getActiveProjects } from '@/data/mockProjects';
import { searchChurches, searchProjects } from '@/utils/searchUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [churches, setChurches] = useState(getMENAChurches());
  const [projects, setProjects] = useState(getActiveProjects());
  const [filteredChurches, setFilteredChurches] = useState(churches);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const handleSearch = () => {
    setFilteredChurches(searchChurches(churches, searchQuery));
    setFilteredProjects(searchProjects(projects, searchQuery));
  };
  
  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-playfair font-bold text-navy mb-2">
              Search Results
            </h1>
            <p className="text-navy/80 font-public">
              {initialQuery ? `Showing results for "${initialQuery}"` : "Search for churches and projects"}
            </p>
          </div>
          
          {/* Search input */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <div className="flex gap-2">
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search churches, projects, locations..." 
                className="flex-grow"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button className="bg-sky hover:bg-sky/90" onClick={handleSearch}>
                <Search size={18} />
              </Button>
            </div>
          </div>
          
          {/* Results tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="churches">Churches</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            
            {/* All results content */}
            <TabsContent value="all">
              {filteredChurches.length === 0 && filteredProjects.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-navy/70 font-public">No results found. Try a different search term.</p>
                </div>
              ) : (
                <>
                  {filteredChurches.length > 0 && (
                    <div className="mb-10">
                      <h2 className="text-2xl font-playfair font-semibold text-navy mb-4">Churches</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredChurches.slice(0, 3).map((church) => (
                          <Card key={church.id} className="overflow-hidden flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={church.image} 
                                alt={church.name} 
                                className="w-full h-full object-cover"
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
                              <p className="text-navy/80 text-sm mb-4 font-public flex-grow">{church.description.substring(0, 100)}...</p>
                              <div className="mt-auto">
                                <Button className="w-full bg-gold hover:bg-gold/90 text-white font-public" asChild>
                                  <Link to={`/churches/${church.id}`}>View Church Profile</Link>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                      {filteredChurches.length > 3 && (
                        <div className="mt-4 text-center">
                          <Button variant="outline" className="border-sky text-sky hover:bg-sky/10" asChild>
                            <Link to="/churches">View All {filteredChurches.length} Churches</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {filteredProjects.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-playfair font-semibold text-navy mb-4">Projects</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.slice(0, 3).map((project) => (
                          <ProjectCard key={project.id} {...project} />
                        ))}
                      </div>
                      {filteredProjects.length > 3 && (
                        <div className="mt-4 text-center">
                          <Button variant="outline" className="border-sky text-sky hover:bg-sky/10" asChild>
                            <Link to="/projects">View All {filteredProjects.length} Projects</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </TabsContent>
            
            {/* Churches tab content */}
            <TabsContent value="churches">
              {filteredChurches.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-navy/70 font-public">No churches found. Try a different search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredChurches.map((church) => (
                    <Card key={church.id} className="overflow-hidden flex flex-col h-full">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={church.image} 
                          alt={church.name} 
                          className="w-full h-full object-cover"
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
                        <p className="text-navy/80 text-sm mb-4 font-public flex-grow">{church.description.substring(0, 100)}...</p>
                        <div className="mt-auto">
                          <Button className="w-full bg-gold hover:bg-gold/90 text-white font-public" asChild>
                            <Link to={`/churches/${church.id}`}>View Church Profile</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            {/* Projects tab content */}
            <TabsContent value="projects">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-navy/70 font-public">No projects found. Try a different search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
