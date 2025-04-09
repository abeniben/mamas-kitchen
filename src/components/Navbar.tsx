import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzbepyf6i/image/upload/v1744115553/Mama_sK_1_fbcmvo.jpg" 
                alt="Mama's Kitchen" 
                className="h-12 w-auto rounded-full"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-white hover:text-primary transition "> Home</Link>
            <Link to="/about" className="text-white hover:text-primary transition">About</Link>
            <Link to="/menu" className="text-white hover:text-primary transition">Menu</Link>
            <Link to="/inside" className="text-white hover:text-primary transition">Inside Mama's</Link>
            <Link to="/contact" className="text-white hover:text-primary transition"> Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-white hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-white hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 text-white hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/inside" 
              className="block px-3 py-2 text-white hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Inside Mama's
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-white hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;