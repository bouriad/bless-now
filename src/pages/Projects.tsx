
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilters from '@/components/ProjectFilters';
import { getActiveProjects } from '@/data/mockProjects';
import { searchProjects } from '@/utils/searchUtils';

const Projects = () => {
  const [allProjects] = useState(getActiveProjects());
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      setFilteredProjects(searchProjects(allProjects, term));
    } else {
      setFilteredProjects(allProjects);
    }
  };

  const handleFilterChange = (filters: any) => {
    // In the future we can implement filtering by category, urgency, etc.
    console.log("Filters applied:", filters);
    
    // For now, just apply the search term if it exists
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">
              Browse Projects
            </h1>
            <p className="text-gray-600">
              Find and support church projects that resonate with your heart.
            </p>
          </div>
          
          <ProjectFilters 
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearch}
          />
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-2">No projects match your search criteria.</p>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
          
          {filteredProjects.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav aria-label="Pagination" className="inline-flex">
                <a
                  href="#"
                  className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-white bg-sky-500 border border-sky-500"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  Next
                </a>
              </nav>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
