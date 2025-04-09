import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mama's Kitchen</h3>
            <p className="text-gray-300">
              Bringing families together with delicious food and warm hospitality since 2004 E.C.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition">Menu</Link></li>
              <li><Link to="/inside" className="text-gray-300 hover:text-white transition">Inside Mama's</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+251930099356</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@mamaskitchen.et</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Bole Medhanialem, Addis Ababa</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mama's Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;