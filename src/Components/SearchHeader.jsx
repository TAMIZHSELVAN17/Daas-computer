import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Daas Computers LOGO.png'; // Update path if needed

const brandText = "Dass Computers".split("");

const SearchHeader = () => {
  return (
    <header className="bg-blue-100 shadow-sm pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Logo & Brand Text Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <img
              src={logo}
              alt="Dass Computers Logo"
              className="w-17 h-16 object-fill pt-2"
            />

            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-wide flex"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {brandText.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full md:w-[500px]"
          >
            <div className="flex rounded-full overflow-hidden border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
              <select className="bg-gray-100 px-4 py-2 text-sm text-gray-700 border-r border-gray-300 focus:outline-none w-40">
                <option>All Categories</option>
                <option>Accessories</option>
                <option>Laptops</option>
                <option>Desktops</option>
                <option>Monitors</option>
              </select>
              <input
                type="text"
                placeholder="Search products, accessories..."
                className="flex-grow px-4 py-2 text-sm text-gray-800 focus:outline-none placeholder-gray-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 flex items-center justify-center transition-colors">
                <Search size={20} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
