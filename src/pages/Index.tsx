
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilters from '@/components/ProjectFilters';
import ChurchMap from '@/components/ChurchMap';
import Footer from '@/components/Footer';
import { getActiveProjects } from '@/data/mockProjects';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredProjects = getActiveProjects().slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* Featured Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Browse these highlighted projects from churches around the world making a difference in their communities.
              </p>
            </div>

            <ProjectFilters />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-sky-500 hover:bg-sky-600 px-6">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Ministry Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
                Ministry Impact
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                See how your donations are making a real difference around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">142</h3>
                <p className="text-gray-600">Churches Built or Renovated</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-faith-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">50,000+</h3>
                <p className="text-gray-600">People Impacted</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">38</h3>
                <p className="text-gray-600">Countries Reached</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <blockquote className="text-center">
                <p className="text-lg italic text-gray-700 mb-4">
                  "Thanks to the generosity of donors through ChurchGive, we were able to build our new community center that now serves over 200 families weekly. God bless you all!"
                </p>
                <footer className="text-gray-600">
                  — Pastor Michael Johnson, <cite>Grace Community Church</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Church Map Preview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
                Partner Churches Worldwide
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Explore our network of churches and see how the Kingdom of God is growing around the world.
              </p>
            </div>

            <ChurchMap />

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-sky-500 text-sky-700 hover:bg-sky-50">
                Explore Full Map
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands of donors supporting faith-based projects worldwide. Start giving today or register your church to receive funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-faith-green-500 hover:bg-faith-green-600 px-8 py-2 h-auto text-base">
                  Find a Project to Support
                </Button>
                <Button variant="outline" className="border-faith-green-500 text-faith-green-700 hover:bg-faith-green-50 px-8 py-2 h-auto text-base">
                  Register Your Church
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
