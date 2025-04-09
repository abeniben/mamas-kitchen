import React from 'react';
import { motion } from 'framer-motion';

const Inside: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Restaurant interior with warm lighting',
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Cozy dining area',
    },
    {
      url: 'https://res.cloudinary.com/dzbepyf6i/image/upload/v1744191529/Dine-table_fyqgsn.jpg',
      alt: 'Restaurant bar area',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            A Taste of Mama's
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step inside our warm and inviting space where every meal feels like coming home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Experience the Ambiance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From intimate dinners to family celebrations, our space is designed to make 
            every moment special. Join us for an unforgettable dining experience in the 
            heart of Bole Medhanialem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inside;