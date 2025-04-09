import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const menuSections: MenuSection[] = [
    {
      title: "Ethiopian Cuisine",
      items: [
        {
          name: "Doro Wat",
          description: "Traditional Ethiopian chicken stew served with injera",
          price: "700 ETB"
        },
        {
          name: "Tibs",
          description: "Sautéed meat strips with vegetables",
          price: "450 ETB"
        },
        {
          name: "Shiro",
          description: "Spiced chickpea stew served with injera",
          price: "180 ETB"
        },
        {
          name: "Kitfo",
          description: "Minced beef marinated in spices and clarified butter",
          price: "420 ETB"
        }
      ]
    },
    {
      title: "European & International",
      items: [
        {
          name: "Classic Margherita Pizza",
          description: "Fresh tomatoes, mozzarella, and basil",
          price: "580 ETB"
        },
        {
          name: "Beef Burger",
          description: "Premium beef patty with fresh vegetables and special sauce",
          price: "400 ETB"
        },
        {
          name: "Grilled Salmon",
          description: "Fresh salmon with herbs and lemon butter sauce",
          price: "350 ETB"
        },
        {
          name: "Pasta Carbonara",
          description: "Creamy pasta with bacon and parmesan",
          price: "340 ETB"
        }
      ]
    },
    {
      title: "Arabian & African",
      items: [
        {
          name: "Shawarma Plate",
          description: "Grilled meat with Arabic spices and tahini sauce",
          price: "520 ETB"
        },
        {
          name: "Moroccan Tagine",
          description: "Slow-cooked meat with vegetables and couscous",
          price: "400 ETB"
        },
        {
          name: "Jollof Rice",
          description: "West African style rice with spiced tomato sauce",
          price: "300 ETB"
        },
        {
          name: "Hummus Platter",
          description: "Creamy chickpea dip with olive oil and pita bread",
          price: "250 ETB"
        }
      ]
    },
    {
      title: "Butchery",
      items: [
        {
          name: "Prime Rib Steak",
          description: "Aged beef with choice of sides",
          price: "850 ETB"
        },
        {
          name: "Lamb Chops",
          description: "Grilled lamb chops with mint sauce",
          price: "700 ETB"
        },
        {
          name: "T-Bone Steak",
          description: "Premium cut with garlic butter",
          price: "820 ETB"
        },
        {
          name: "Mixed Grill Platter",
          description: "Selection of premium meats with sides",
          price: "650 ETB"
        }
      ]
    }
  ];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse selection of cuisines, crafted with love and the finest ingredients
          </p>
        </motion.div>

        <div className="space-y-6">
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <ChevronDown
                  className={`text-gray-500 transition-transform ${
                    expandedSection === section.title ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === section.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4"
                >
                  <div className="grid gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <h3 className="text-lg font-medium text-primary">{item.name}</h3>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;