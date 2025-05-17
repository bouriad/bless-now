
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-sky flex items-center justify-center">
              <HandHeart size={20} className="text-white" />
            </div>
            <span className="text-xl font-playfair font-bold text-white">BlessNow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Home
          </Link>
          <Link to="/churches" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Churches
          </Link>
          <Link to="/projects" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Church Projects
          </Link>
          <Link to="/completed" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Completed
          </Link>
          <Link to="/map" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Church Map
          </Link>
          <Link to="/about" className="font-medium text-white hover:text-sky/80 transition-colors font-public">
            Our Mission
          </Link>
          <Button className="bg-gold hover:bg-gold/90 text-white ml-4 font-public" size="sm" asChild>
            <Link to="/about">Start a Church Project</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-white hover:bg-navy/80 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/churches" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Churches
            </Link>
            <Link 
              to="/projects" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Church Projects
            </Link>
            <Link 
              to="/completed" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Completed
            </Link>
            <Link 
              to="/map" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Church Map
            </Link>
            <Link 
              to="/about" 
              className="block font-public text-white hover:text-sky/80 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </Link>
            <Button className="bg-gold hover:bg-gold/90 text-white w-full font-public" size="sm" asChild>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Start a Church Project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
