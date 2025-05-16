
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCompletedProjects } from '@/data/mockProjects';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CompletedProjects = () => {
  const completedProjects = getCompletedProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">
              Completed Projects
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrate with us the successful projects that have made a real impact in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-faith-green-500 text-white px-4 py-2 rounded-bl-md font-medium">
                    Completed
                  </div>
                </div>
                
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-1">{project.churchName}</div>
                  <h3 className="font-montserrat font-semibold text-xl">{project.title}</h3>
                  <div className="text-faith-green-600 font-medium">
                    ${project.currentAmount.toLocaleString()} raised of ${project.goalAmount.toLocaleString()} goal
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Impact Report:</h4>
                    <p className="text-gray-700">{project.summary}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Church Representative Comments:</h4>
                    <blockquote className="border-l-4 border-faith-green-300 pl-4 italic text-gray-600">
                      "We are so grateful for every donor who contributed to this project. Your generosity has helped us make a lasting impact in our community. May God bless you abundantly!"
                    </blockquote>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Gallery:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-20 rounded overflow-hidden">
                        <img src={project.image} alt="Gallery 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-20 rounded overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" alt="Gallery 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-20 rounded overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" alt="Gallery 3" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompletedProjects;
