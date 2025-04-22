import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Mama's Kitchen
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experience the warmth of home-cooked meals with a touch of Ethiopian hospitality
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition"
            >
              View Our Menu
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Mama's</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2004 E.C., Mama's Kitchen has been serving the Addis Ababa community 
              with love and dedication. Our restaurant is more than just a place to eat – 
              it's where families come together to create lasting memories.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary hover:text-nav transition"
            >
              Learn More <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Restaurant interior"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cuisines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ethiopian Cuisine',
                image: 'https://res.cloudinary.com/dzbepyf6i/image/upload/v1745340443/ChatGPT_Image_Apr_22_2025_07_36_57_PM_djkwyq.png',
              },
              {
                title: 'European & International',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Arabian & African',
                image: 'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Butchery',
                image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((cuisine, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{cuisine.title}</h3>
                  <Link
                    to="/menu"
                    className="inline-flex items-center text-primary hover:text-red-700 transition"
                  >
                    View Menu <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-gray-600 mb-8">
            Located in the heart of Bole Medhanialem, we're ready to serve you the best of our cuisine.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition"
          >
            Make a Reservation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;