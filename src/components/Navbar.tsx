
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">✝️</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-sky-900">ChurchGive</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-600 hover:text-sky-500 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="font-medium text-gray-600 hover:text-sky-500 transition-colors">
            Projects
          </Link>
          <Link to="/completed" className="font-medium text-gray-600 hover:text-sky-500 transition-colors">
            Completed
          </Link>
          <Link to="/map" className="font-medium text-gray-600 hover:text-sky-500 transition-colors">
            Church Map
          </Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-sky-500 transition-colors">
            About Us
          </Link>
          <Button className="bg-sky-500 hover:bg-sky-600 ml-4" size="sm">
            Start a Project
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block font-medium text-gray-600 hover:text-sky-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block font-medium text-gray-600 hover:text-sky-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/completed" 
              className="block font-medium text-gray-600 hover:text-sky-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Completed
            </Link>
            <Link 
              to="/map" 
              className="block font-medium text-gray-600 hover:text-sky-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Church Map
            </Link>
            <Link 
              to="/about" 
              className="block font-medium text-gray-600 hover:text-sky-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Button className="bg-sky-500 hover:bg-sky-600 w-full" size="sm">
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
