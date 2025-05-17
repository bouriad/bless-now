
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
              <h2 className="text-3xl font-playfair font-bold mb-4 text-navy">
                Featured Church Projects
              </h2>
              <p className="max-w-2xl mx-auto text-navy/80 font-public">
                Support these highlighted projects from local churches making a difference across the MENA region.
              </p>
            </div>

            <ProjectFilters />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gold hover:bg-gold/90 px-6">
                View All MENA Church Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Ministry Impact Section */}
        <section className="py-16 bg-ivory">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4 text-navy">
                Church Impact
              </h2>
              <p className="max-w-2xl mx-auto text-navy/80 font-public">
                See how your donations are empowering local churches throughout the Middle East and North Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sky/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">89</h3>
                <p className="text-navy/80 font-public">Churches Built or Renovated</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sky/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">32,000+</h3>
                <p className="text-navy/80 font-public">Community Members Served</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-sky/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">11</h3>
                <p className="text-navy/80 font-public">MENA Countries with Church Partners</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <blockquote className="text-center">
                <p className="text-lg italic text-navy mb-4 font-playfair">
                  "Through the generosity of donors via BlessNow, our church was able to build a new community center that now serves over 200 families weekly in our neighborhood of Beirut. This has transformed our ability to minister to our community."
                </p>
                <footer className="text-navy/70 font-public">
                  — Pastor Joseph Haddad, <cite>Resurrection Church Beirut</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Church Map Preview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4 text-navy">
                Local Church Partners Across MENA
              </h2>
              <p className="max-w-2xl mx-auto text-navy/80 font-public">
                Explore our network of local churches and see how the Kingdom of God is growing through community-led ministry in the Middle East and North Africa.
              </p>
            </div>

            <ChurchMap />

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-sky text-sky hover:bg-sky/10">
                Explore Full MENA Map
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-sky/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-playfair font-bold text-3xl text-navy mb-4">
                Ready to Empower the Local Church?
              </h2>
              <p className="text-lg text-navy mb-8 font-public">
                Join thousands of donors supporting local churches across the MENA region. Start giving today or register your church to receive funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold hover:bg-gold/90 px-8 py-2 h-auto text-base">
                  Find a MENA Church to Support
                </Button>
                <Button variant="outline" className="border-sky text-sky hover:bg-sky/10 px-8 py-2 h-auto text-base">
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
