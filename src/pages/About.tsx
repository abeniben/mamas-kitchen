import React from 'react';

const About: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            Welcome to our restaurant, where culinary excellence meets warm hospitality. 
            Our journey began with a simple passion for creating memorable dining experiences 
            that bring people together.
          </p>

          <div className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <p className="text-gray-700 mb-6">
            Our team of dedicated chefs brings years of experience and creativity to every 
            dish, using only the finest locally-sourced ingredients to craft meals that 
            delight and inspire.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-700">
            <li>• Healthy and Delicious dishes that will without doubt have you raching for more.</li>
            <li>• Spectacular design, beautiful, comfortable & cozy interior.</li>
            <li>• Warm, attentive service that makes everyone feel at home</li>
            <li>• Searching for place to host events? Weeding Anniversary, Birthday, Any event we got you.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;