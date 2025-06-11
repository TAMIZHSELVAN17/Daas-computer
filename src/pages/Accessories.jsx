import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image Imports
import M1 from '../assets/Accessories/M1.avif';
import M2 from '../assets/Accessories/M2.avif';

// import K1 from '../assets/Accessories/K1.jpg';
// import K2 from '../assets/Accessories/K2.webp';
// import K3 from '../assets/Accessories/K3.avif';

// import L1 from '../assets/Accessories/L1.avif';
// import L2 from '../assets/Accessories/L2.avif'; 
// import L3 from '../assets/Accessories/L3.png';
// import L4 from '../assets/Accessories/L4.avif';

import monitor1 from '../assets/Accessories/monitor1.avif';


import bag1 from '../assets/Accessories/bag1.jpg';

import bag3 from '../assets/Accessories/bag3.jpg';

// Accessory Data with Local Images
const accessoryData = {
  "🖱️ Mice": [
    { name: "Asus", image: M1 },
    { name: "HP", image: M2 },
  ],
  // "⌨️ Keyboards": [
  //   { name: "HP", image: K1 },
  //   { name: "Dell", image: K2 },
  //   { name: "Redragon", image: K3 },
  // ],
  // "💻 Laptops": [
  //   { name: "hp", image: L1 },
  //   { name: "Asus", image: L2 },
  //   { name: "Dell", image: L3 },
  //   { name: "Acer", image: L4 },
  // ],
  "🖥️ Monitors": [
    { name: "Samsung", image: monitor1 },
  
  ],
  "💼 Laptop Bags & Sleeves": [
    { name: "hp", image: bag1 },
    
    { name: "Dell", image: bag3 },
  ],
};

const Accessories = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const categoryButtons = useMemo(() => {
    return Object.entries(accessoryData).map(([title], index) => {
      const [emoji, ...labelParts] = title.split(" ");
      const label = labelParts.join(" ");
      return (
        <motion.button
          key={index}
          onClick={() => setSelectedAccessory(title)}
          aria-label={`View ${label} accessories`}
          className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex flex-col items-center justify-center  bg-blue-500 text-white hover:bg-blue-600 transition shadow-md hover:shadow-xl transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl">{emoji}</div>
          <div className="text-[10px] sm:text-xs md:text-sm font-semibold mt-1 text-center leading-tight px-2">
            {label}
          </div>
        </motion.button>
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-3">
            Explore Our Accessories
          </h1>
          <p className="text-md sm:text-lg text-blue-700">
            Enhance your setup with high-quality add-ons.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {categoryButtons}
        </div>

        <AnimatePresence>
          {selectedAccessory && accessoryData[selectedAccessory] ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="mt-14 bg-white border border-gray-200 shadow-lg rounded-2xl p-5 sm:p-8 md:p-10 max-w-5xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {selectedAccessory}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {accessoryData[selectedAccessory].map((brand, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center  rounded-xl p-4 border hover:shadow-md transition duration-200"
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/100?text=Image+Not+Found")
                      }
                      className="w-16 sm:w-20 h-16 sm:h-20 object-fill  "
                    />
                    <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                      {brand.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setSelectedAccessory(null)}
                  className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          ) : selectedAccessory ? (
            <div className="mt-14 text-center text-red-600">
              Error: Accessory category not found.
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accessories;
