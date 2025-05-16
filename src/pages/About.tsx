
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Sarah has 15 years of experience in non-profit leadership and is passionate about connecting resources to ministry needs."
    },
    {
      name: "David Chen",
      role: "Partnerships Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "David works directly with churches around the world to understand their needs and develop funding strategies."
    },
    {
      name: "Rebecca Osei",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Rebecca ensures that the platform runs smoothly and every dollar reaches its intended destination efficiently."
    },
    {
      name: "James Wilson",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "James leads our technical team with a focus on creating a seamless experience for donors and churches alike."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 text-gray-900">
                Our Mission
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed mb-8 font-light">
                To glorify God by connecting generous donors with impactful church projects worldwide, building His kingdom one need at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 mb-4">
                  ChurchGive was founded in 2018 by a group of believers passionate about supporting the Church's mission worldwide. What began as a small effort to help local congregations quickly grew into a global platform connecting donors with churches in need.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that the local church is God's primary instrument for bringing hope, healing, and transformation to communities. By empowering churches with resources, we help them become beacons of light in their neighborhoods and beyond.
                </p>
                <p className="text-gray-700">
                  Our team consists of committed Christians with backgrounds in ministry, non-profit management, and technology, all united by the desire to see God's kingdom advance through the work of local churches worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-48 md:h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                    alt="Church volunteers working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 md:h-64 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Church building" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 md:h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                    alt="Community gathering" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 md:h-64 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="Remote church" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-10 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-sky-600 text-xl">✝️</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Faith-Centered</h3>
                <p className="text-gray-600">
                  We operate with Christ at the center, guided by prayer and Biblical principles in all we do.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-faith-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-faith-green-600 text-xl">👐</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We maintain complete openness about how funds are used and the impact they create.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 text-xl">🤲</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Stewardship</h3>
                <p className="text-gray-600">
                  We carefully steward every resource entrusted to us, ensuring maximum impact for the Kingdom.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-sky-600 text-xl">🌐</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Global Vision</h3>
                <p className="text-gray-600">
                  We serve the worldwide Church, recognizing God's work in every culture and nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-10 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-10 text-center">
              Words from Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-gold-500 mb-4">
                  {"★".repeat(5)}
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic">
                    "ChurchGive has been an answer to prayer for our rural congregation. The funds we raised helped us start a community outreach program that's transforming lives."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Pastor Thomas"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">Pastor Thomas</p>
                    <p className="text-gray-500 text-sm">Riverside Fellowship</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-gold-500 mb-4">
                  {"★".repeat(5)}
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic">
                    "The transparency and ease of use make ChurchGive stand out. Our donors appreciate seeing exactly how their gifts are being used to advance God's kingdom."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                      alt="Maria Rodriguez"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-gray-500 text-sm">Hope Community Church</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-gold-500 mb-4">
                  {"★".repeat(5)}
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic">
                    "As a small missionary church in Kenya, we never thought we'd raise enough for a clean water project. ChurchGive connected us with believers worldwide who shared our vision."
                  </p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57" 
                      alt="Pastor Emmanuel"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">Pastor Emmanuel</p>
                    <p className="text-gray-500 text-sm">Life Springs Church, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-faith-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl mb-4">
                Join Our Mission
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Whether you're looking to support church projects or need funding for your own, we invite you to be part of what God is doing through ChurchGive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-faith-green-600 hover:bg-gray-100 px-8 py-2 h-auto text-base">
                  Donate Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-faith-green-700 px-8 py-2 h-auto text-base">
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

export default AboutUs;
