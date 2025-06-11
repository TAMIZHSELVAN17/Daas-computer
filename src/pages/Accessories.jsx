import React, { useState, useRef, useEffect } from "react";
import { FaMouse, FaDesktop, FaKeyboard, FaBriefcase } from "react-icons/fa";

// Images
import M1 from '../assets/Accessories/M1.avif';
import M2 from '../assets/Accessories/M2.avif';
import monitor1 from '../assets/Accessories/monitor1.avif';
import bag1 from '../assets/Accessories/bag1.jpg';
import bag3 from '../assets/Accessories/bag3.jpg';

const accessoryData = {
  Mice: [
    { name: "Asus Mouse", image: M1 },
    { name: "HP Mouse", image: M2 },
  ],
  Monitors: [
    { name: "Samsung Monitor", image: monitor1 },
  ],
  "Laptop Bags": [
    { name: "HP Bag", image: bag1 },
    { name: "Dell Bag", image: bag3 },
  ],
  Keyboards: [],
};

const categoryIcons = {
  Mice: <FaMouse />,
  Monitors: <FaDesktop />,
  Keyboards: <FaKeyboard />,
  "Laptop Bags": <FaBriefcase />,
};

const MAX_ITEMS = 30;
const INITIAL_VISIBLE = 16;

const Accessories = () => {
  const categories = Object.keys(accessoryData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const gridRef = useRef(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const currentItems = accessoryData[activeCategory] || [];
  const totalItems = [
    ...currentItems,
    ...Array.from({ length: MAX_ITEMS - currentItems.length }, () => null),
  ];

  const visibleItems = totalItems.slice(0, visibleCount);
  const canShowMore = visibleCount < MAX_ITEMS;

  // Auto-scroll to new items
  useEffect(() => {
    if (gridRef.current && visibleCount > INITIAL_VISIBLE) {
      gridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-8">
          Shop Computer Accessories
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 flex items-center gap-2 rounded-full text-sm font-medium shadow-sm transition 
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-50"
                }`}
            >
              <span className="text-lg">{categoryIcons[category]}</span>
              {category}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {visibleItems.map((item, index) =>
            item ? (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/100?text=Not+Found")
                  }
                  className="w-full h-52 object-fill rounded-lg mb-3"
                />
                <h3 className="text-sm font-semibold text-gray-800 text-center">{item.name}</h3>
              </div>
            ) : (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border-dashed border-2 border-gray-300 text-gray-400 flex items-center justify-center text-xs sm:text-sm h-52 text-center italic"
              >
                Coming Soon
              </div>
            )
          )}
        </div>

        {/* Show More Button */}
        {canShowMore && (
          <div className="text-center mt-8">
            <button
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + 10, MAX_ITEMS))
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
