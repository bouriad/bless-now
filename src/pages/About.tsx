
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, HandHeart, Church, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Andrew Saba",
      role: "Digital Marketing Expert and Vision Lead",
      bio: "Combines spiritual drive with marketing expertise to guide BlessNow's vision and outreach strategies."
    },
    {
      name: "Elias Hayar",
      role: "Full-Stack Web Developer",
      bio: "Creates seamless user experiences and builds the technical foundation that powers our platform."
    },
    {
      name: "Michael Tawk",
      role: "Back-End Developer",
      bio: "Ensures the platform operates efficiently and securely behind the scenes, handling data and server operations."
    },
    {
      name: "Philippe",
      role: "Back-End Developer",
      bio: "Specializes in database architecture and system integrations that keep our platform robust and scalable."
    },
    {
      name: "Knuckle",
      role: "Back-End Developer",
      bio: "Focuses on payment processing and security measures to ensure donor contributions reach their destinations."
    },
    {
      name: "John John",
      role: "Digital Marketing Strategist and IT Manager",
      bio: "Oversees digital campaigns and technical infrastructure to maximize BlessNow's reach and impact."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Mission Statement */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464638681273-0962e9b53566')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-navy">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-public">
                To bridge the gap between generous donors and underfunded church-led projects across the MENA region.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-public">
                We aim to make giving radically transparent, simple, and impactful — connecting the global Body of Christ through trust and generosity.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair font-bold text-3xl text-navy mb-8 text-center">
                What We Do
              </h2>
              <div className="text-gray-700 space-y-6 font-public text-lg">
                <p>
                  We empower churches in the Middle East and North Africa to share their needs and receive funding through a digital-first platform. Our system verifies each project, ensuring accountability while maintaining dignity and respect for local church leadership.
                </p>
                <p>
                  Donors can browse real projects, give confidently, and follow the journey with real-time updates. It's a movement of generosity rooted in the spirit of the early Church — resource-sharing, care, and unity across borders and denominations.
                </p>
              </div>
              
              {/* Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-sky h-6 w-6" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-3">Global Vision</h3>
                  <p className="text-gray-600 font-public">
                    Connecting believers worldwide to support the Church where resources are needed most.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                    <HandHeart className="text-gold h-6 w-6" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-3">Transparency</h3>
                  <p className="text-gray-600 font-public">
                    We provide full visibility on project progress, fund usage, and impact stories.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Church className="text-sky h-6 w-6" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-3">Local Empowerment</h3>
                  <p className="text-gray-600 font-public">
                    We trust local church leadership to identify needs and implement solutions effectively.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-gold h-6 w-6" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-3">Kingdom Impact</h3>
                  <p className="text-gray-600 font-public">
                    Every project advances God's kingdom through practical witness and ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why BlessNow Exists */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair font-bold text-3xl text-navy mb-6 text-center">
                Why BlessNow Exists
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700 font-public mb-4">
                  There's a disconnect in global giving. Many donors want to support meaningful work in regions like the Middle East and North Africa, but struggle to find trustworthy channels that directly reach local churches leading impactful projects.
                </p>
                <p className="text-gray-700 font-public">
                  BlessNow bridges this gap by verifying church-led initiatives, providing a secure giving platform, and maintaining transparent communication between donors and recipients. We're not just a funding platform — we're building a community of generosity that transcends borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair font-bold text-3xl text-navy mb-10 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-playfair font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-sky font-medium mb-3 font-public">{member.role}</p>
                  <p className="text-gray-600 text-sm font-public">{member.bio}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-700 font-public italic max-w-3xl mx-auto">
                This team combines spiritual drive, technical expertise, and marketing experience to deliver a meaningful and scalable platform for the Church.
              </p>
            </div>
          </div>
        </section>

        {/* How We Operate */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-3xl text-navy mb-6">
                How We Operate
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-playfair font-semibold text-lg mb-3">Verification</h3>
                  <p className="text-gray-600 font-public text-sm">
                    We carefully verify each church and project to ensure legitimacy and stewardship.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-playfair font-semibold text-lg mb-3">Distribution</h3>
                  <p className="text-gray-600 font-public text-sm">
                    We use secure channels to transfer funds directly to church projects with minimal overhead.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-playfair font-semibold text-lg mb-3">Reporting</h3>
                  <p className="text-gray-600 font-public text-sm">
                    We provide regular updates on project progress and impact to maintain transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-sky text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair font-bold text-3xl mb-4">
                Join Our Mission
              </h2>
              <p className="text-lg mb-8 opacity-90 font-public">
                Whether you're a church with a vision, a donor seeking impact, or a potential partner - we invite you to be part of this movement of generosity and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-sky hover:bg-gray-100 px-8 py-2 h-auto text-base">
                  <Link to="/churches/register">Become a Partner Church</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-sky-700 px-8 py-2 h-auto text-base">
                  <Link to="/projects">Support a Mission</Link>
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

export default AboutUs;
