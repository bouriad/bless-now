
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
              <h2 className="font-montserrat font-bold text-3xl text-navy-500 mb-4">
                Featured Church Projects
              </h2>
              <p className="max-w-2xl mx-auto text-navy-300">
                Support these highlighted projects from local churches making a difference in their communities.
              </p>
            </div>

            <ProjectFilters />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gold-500 hover:bg-gold-700 px-6">
                View All Church Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Ministry Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-navy-500 mb-4">
                Church Impact
              </h2>
              <p className="max-w-2xl mx-auto text-navy-300">
                See how your donations are empowering local churches around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-500">142</h3>
                <p className="text-navy-300">Churches Built or Renovated</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-faith-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-500">50,000+</h3>
                <p className="text-navy-300">Community Members Served</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-500">38</h3>
                <p className="text-navy-300">Countries with Local Church Partners</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <blockquote className="text-center">
                <p className="text-lg italic text-navy-500 mb-4">
                  "Thanks to the generosity of donors through BlessNow, our local congregation was able to build a new community center that now serves over 200 families weekly. This has transformed our ability to minister to our neighborhood."
                </p>
                <footer className="text-navy-300">
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
              <h2 className="font-montserrat font-bold text-3xl text-navy-500 mb-4">
                Local Church Partners Worldwide
              </h2>
              <p className="max-w-2xl mx-auto text-navy-300">
                Explore our network of local churches and see how the Kingdom of God is growing through community-led ministry.
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
              <h2 className="font-montserrat font-bold text-3xl text-navy-500 mb-4">
                Ready to Empower the Local Church?
              </h2>
              <p className="text-lg text-navy-500 mb-8">
                Join thousands of donors supporting local churches worldwide. Start giving today or register your church to receive funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold-500 hover:bg-gold-600 px-8 py-2 h-auto text-base">
                  Find a Church to Support
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
