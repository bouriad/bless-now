
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getActiveProjects } from '@/data/mockProjects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const allProjects = getActiveProjects();
  const project = allProjects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-navy mb-4">Project Not Found</h1>
            <p className="mb-6 text-navy/70">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-sky hover:bg-sky/90">
              <Link to="/projects">Browse All Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const progressPercentage = Math.min((project.currentAmount / project.goalAmount) * 100, 100);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center mb-2 gap-2">
              <Link to="/projects" className="text-sky hover:underline text-sm font-public">
                Projects
              </Link>
              <span className="text-navy/40">/</span>
              <span className="text-navy/70 text-sm font-public">{project.title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">{project.title}</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Project Image */}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-sky text-white px-3 py-1 text-sm font-public rounded-bl-md">
                    {project.category}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-6 text-navy/70 text-sm">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{project.daysLeft} days left</span>
                    </div>
                    <div className="flex items-center">
                      <Church size={16} className="mr-1" />
                      <Link to={`/churches/${project.churchId}`} className="text-sky hover:underline">
                        {project.churchName}
                      </Link>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-playfair font-semibold text-navy mb-4">Project Details</h2>
                  <div className="prose max-w-none text-navy/80 font-public mb-8">
                    <p>{project.summary}</p>
                    <p>This project aims to support the local community by providing essential resources and services. The funds raised will be used to improve facilities, support outreach programs, and strengthen the church's impact in the community.</p>
                    <p>With your generous donations, we can make a significant difference in the lives of many people who rely on our services. Every contribution, no matter the size, brings us one step closer to achieving our goal.</p>
                  </div>
                  
                  {/* Additional project details could be added here */}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-playfair font-semibold text-navy mb-4">Fundraising Progress</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-navy/70 font-public">Raised</span>
                    <span className="font-medium text-navy">${project.currentAmount.toLocaleString()} of ${project.goalAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-sky" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-sm text-navy/70 font-public">
                    {progressPercentage.toFixed(0)}% Complete
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2 text-sm text-navy/70 font-public">
                    <span>Time Left</span>
                    <span className="font-medium">{project.daysLeft} days</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-white py-6 text-lg mb-4"
                  asChild
                >
                  <Link to={`/projects/${project.id}/donate`}>Donate Now</Link>
                </Button>
                
                <div className="text-center text-xs text-navy/60 font-public">
                  Your donation will directly support this church project
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
