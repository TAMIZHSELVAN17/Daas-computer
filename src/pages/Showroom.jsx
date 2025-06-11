import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const branches = [
  {
    name: "Dell Katpadi",
    address: "No.340, Chittoor Bus Stop, Opp. Bharath Petroleum Bunk, Katpadi, Vellore 632007, Tamil Nadu",
    contact: "9524889898",
    email: "velloredellstore@gmail.com"
  },
  {
    name: "Dell Vellore",
    address: "18/13, Dharmaraja Koil Street, Thotapalayam, Vellore 632004, Tamil Nadu",
    contact: "9585639898",
    email: "desvellore2018@gmail.com"
  },
  {
    name: "ASUS Exclusive Store",
    address: "No.338, Chittoor Bus Stop, Opp. Bharath Petroleum Bunk, Katpadi, Vellore 632007, Tamil Nadu",
    contact: "9087597742",
    email: "asusvellorestore@gmail.com"
  },
  {
    name: "LENOVO Exclusive Store",
    address: "No.348, Chittoor Bus Stop, Opp. Bharath Petroleum Bunk, Katpadi, Vellore 632007, Tamil Nadu",
    contact: "9943318833",
    email: "vlrlenovostore@gmail.com"
  },
  {
    name: "ACER Mall Exclusive Store",
    address: "No.342, Chittoor Bus Stop, Opp. Bharath Petroleum, Katpadi, Vellore 632007, Tamil Nadu",
    contact: "9363290026, 9842349898",
    email: "acermallvir@gmail.com"
  },
  {
    name: "Daas Computers (Dell Exclusive)",
    address: "No.340, Chittoor Bus Stop, Opp. Bharath Petroleum Bunk, Katpadi, Vellore, Tamil Nadu",
    contact: "9524889898",
    email: "velloredellstore@gmail.com"
  },
  {
    name: "LENOVO Exclusive Store (Alt Email)",
    address: "No.348, Chittoor Bus Stand, Opp. Bharath Petroleum, Katpadi, Vellore-632007",
    contact: "9943318833",
    email: "virlenovostore@gmail.com"
  },
  {
    name: "Daas Computers Arni",
    address: "No. 268, Gandhi Road, Opp. Bharath Gas, Arni - 632301, Tamil Nadu",
    contact: "—",
    email: "arnidaascomputers@gmail.com"
  }
];

const locationDataset = {
  katpadi: ['katpadi', 'vellore', 'bagayam', 'sevur', 'senur', 'tiruvalam', 'vellore institute', 'sathuvachari', 'thorapadi', 'viruthampet'],
  thotapalayam: ['thotapalayam', 'sathuvachari', 'dharapadavedu', 'vellore town', 'velapadi'],
  arani: ['arani', 'periyakulam', 'polur', 'kalambur', 'vettavalam', 'periyeri', 'vannankulam']
};

const findNearestBranch = (location) => {
  const keyword = location.toLowerCase().trim();
  if (locationDataset.katpadi.some(k => keyword.includes(k))) return branches[0];
  if (locationDataset.arani.some(k => keyword.includes(k))) return branches[7];
  return null;
};

const Showroom = () => {
  const [userLocation, setUserLocation] = useState('');
  const [nearestBranch, setNearestBranch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = findNearestBranch(userLocation);
    setNearestBranch(found);
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Find Your Nearest Dass Computer Store
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Enter your town/village name"
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          className="border p-3 rounded-lg w-full sm:w-2/3 focus:outline-blue-500 shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto shadow-md"
        >
          Search
        </button>
      </motion.form>

      <AnimatePresence>
        {nearestBranch ? (
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl text-center border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-green-600">Nearest Store Found 🎉</h2>
            <p className="text-xl font-medium">{nearestBranch.name}</p>
            <p className="text-gray-700 flex justify-center items-center gap-2 mt-2">
              <FaMapMarkerAlt className="text-blue-500" /> {nearestBranch.address}
            </p>
            {nearestBranch.contact && (
              <p className="mt-2 flex justify-center items-center gap-2 text-sm text-gray-800">
                <FaPhoneAlt className="text-blue-500" /> {nearestBranch.contact}
              </p>
            )}
            {nearestBranch.email && (
              <p className="mt-1 flex justify-center items-center gap-2 text-blue-600 underline text-sm">
                <MdEmail /> {nearestBranch.email}
              </p>
            )}
          </motion.div>
        ) : userLocation && (
          <motion.div
            className="text-center text-red-500 font-medium mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Sorry, we couldn't find a nearby store for "{userLocation}".
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md border hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-bold mb-3 text-blue-700">{branch.name}</h3>
            <p className="text-sm flex items-center gap-2 mb-2 text-gray-700">
              <FaMapMarkerAlt className="text-blue-500" /> {branch.address}
            </p>
            {branch.contact && (
              <p className="text-sm flex items-center gap-2 mb-1 text-gray-800">
                <FaPhoneAlt className="text-blue-500" /> {branch.contact}
              </p>
            )}
            {branch.email && (
              <p className="text-sm flex items-center gap-2 text-blue-600 underline">
                <MdEmail /> {branch.email}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Showroom;













// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import axios from 'axios';

// const branches = [
//   {
//     name: "Daas Computers Katpadi",
//     lat: 12.9796,
//     lng: 79.1386,
//     address: "Katpadi, Vellore, Tamil Nadu"
//   },
//   {
//     name: "Daas Computers Arni",
//     lat: 12.6706,
//     lng: 79.2850,
//     address: "Gandhi Road, Arni, Tamil Nadu"
//   },
//   {
//     name: "Daas Computers Thotapalayam",
//     lat: 12.9206,
//     lng: 79.1336,
//     address: "Thotapalayam, Vellore, Tamil Nadu"
//   }
// ];

// const userIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
//   iconSize: [32, 32],
// });

// const storeIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//   iconSize: [32, 32],
// });

// const Showroom = () => {
//   const [userLocation, setUserLocation] = useState('');
//   const [userCoords, setUserCoords] = useState(null);
//   const [nearest, setNearest] = useState(null);
//   const [distance, setDistance] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       // Geocode user location with Nominatim (OpenStreetMap)
//       const res = await axios.get('https://nominatim.openstreetmap.org/search', {
//         params: {
//           q: userLocation,
//           format: 'json',
//           limit: 1
//         }
//       });

//       if (res.data.length === 0) return alert('Location not found');

//       const { lat, lon } = res.data[0];
//       const userLat = parseFloat(lat);
//       const userLon = parseFloat(lon);
//       setUserCoords([userLat, userLon]);

//       // Find nearest branch
//       const distances = branches.map(branch => {
//         const d = Math.sqrt((branch.lat - userLat) ** 2 + (branch.lng - userLon) ** 2);
//         return { ...branch, dist: d };
//       });

//       distances.sort((a, b) => a.dist - b.dist);
//       const nearestBranch = distances[0];
//       setNearest(nearestBranch);

//       // Calculate distance in KM (Haversine)
//       const R = 6371;
//       const dLat = (nearestBranch.lat - userLat) * Math.PI / 180;
//       const dLon = (nearestBranch.lng - userLon) * Math.PI / 180;
//       const a = Math.sin(dLat / 2) ** 2 +
//         Math.cos(userLat * Math.PI / 180) * Math.cos(nearestBranch.lat * Math.PI / 180) *
//         Math.sin(dLon / 2) ** 2;
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       const d = R * c;

//       setDistance(d.toFixed(2));

//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong while fetching location');
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         Find Nearest Dass Computer Branch
//       </h1>

//       <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
//         <input
//           type="text"
//           placeholder="Enter your village/town name"
//           value={userLocation}
//           onChange={(e) => setUserLocation(e.target.value)}
//           className="p-3 border rounded-lg w-full sm:w-2/3"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
//           Search
//         </button>
//       </form>

//       {userCoords && nearest && (
//         <div className="mb-6 text-center">
//           <p className="text-lg text-green-700 font-semibold">
//             ✅ Nearest Branch: {nearest.name}
//           </p>
//           <p className="text-sm">{nearest.address}</p>
//           <p className="text-blue-600 font-medium mt-1">
//             📍 Distance: {distance} km
//           </p>
//         </div>
//       )}

//       {userCoords && nearest && (
//         <MapContainer
//           center={userCoords}
//           zoom={10}
//           style={{ height: "500px", width: "100%" }}
//           className="rounded-xl shadow-lg"
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={userCoords} icon={userIcon}>
//             <Popup>You are here: {userLocation}</Popup>
//           </Marker>
//           <Marker position={[nearest.lat, nearest.lng]} icon={storeIcon}>
//             <Popup>{nearest.name}</Popup>
//           </Marker>
//           <Polyline
//             positions={[userCoords, [nearest.lat, nearest.lng]]}
//             color="blue"
//           />
//         </MapContainer>
//       )}
//     </div>
//   );
// };

// export default Showroom;





// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { motion, AnimatePresence } from 'framer-motion';

// // Fix for default icon issue in Leaflet
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const branches = [
//   {
//     name: "Daas Computers Katpadi",
//     lat: 12.9796,
//     lng: 79.1386,
//     address: "No.340, Chittoor Bus Stop, Katpadi, Vellore 632007"
//   },
//   {
//     name: "Daas Computers Arni",
//     lat: 12.6706,
//     lng: 79.2850,
//     address: "No.268, Gandhi Road, Arni - 632301"
//   },
//   {
//     name: "Daas Computers Thotapalayam",
//     lat: 12.9206,
//     lng: 79.1336,
//     address: "18/13, Dharmaraja Koil Street, Thotapalayam, Vellore 632004"
//   }
// ];

// const getDistance = (lat1, lon1, lat2, lon2) => {
//   const R = 6371;
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLon = ((lon2 - lon1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// };

// const Showroom = () => {
//   const [userLocation, setUserLocation] = useState('');
//   const [coordinates, setCoordinates] = useState(null);
//   const [nearestBranch, setNearestBranch] = useState(null);

//   const fetchCoordinates = async () => {
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//           userLocation
//         )}`
//       );
//       const data = await res.json();
//       if (data.length > 0) {
//         const lat = parseFloat(data[0].lat);
//         const lon = parseFloat(data[0].lon);
//         setCoordinates({ lat, lon });

//         let minDist = Infinity;
//         let nearest = null;
//         for (const branch of branches) {
//           const dist = getDistance(lat, lon, branch.lat, branch.lng);
//           if (dist < minDist) {
//             minDist = dist;
//             nearest = { ...branch, distance: dist.toFixed(2) };
//           }
//         }
//         setNearestBranch(nearest);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchCoordinates();
//   };

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <motion.h1
//         className="text-3xl sm:text-4xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Find Your Nearest Dass Computer Store
//       </motion.h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
//       >
//         <input
//           type="text"
//           placeholder="Enter your town/village name"
//           value={userLocation}
//           onChange={(e) => setUserLocation(e.target.value)}
//           className="border p-3 rounded-lg w-full sm:w-2/3 focus:outline-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </form>

//       <AnimatePresence>
//         {nearestBranch && (
//           <motion.div
//             className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//           >
//             <h2 className="text-xl font-semibold text-green-600 mb-2">Nearest Store Found 🎉</h2>
//             <p className="font-medium">{nearestBranch.name}</p>
//             <p>{nearestBranch.address}</p>
//             <p className="text-sm text-gray-600">Distance: {nearestBranch.distance} km</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {coordinates && (
//         <MapContainer
//           center={[coordinates.lat, coordinates.lon]}
//           zoom={11}
//           style={{ height: '400px', width: '100%' }}
//           className="rounded-xl overflow-hidden mb-6"
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={[coordinates.lat, coordinates.lon]}>
//             <Popup>Your Location</Popup>
//           </Marker>
//           {branches.map((branch, i) => (
//             <Marker key={i} position={[branch.lat, branch.lng]}>
//               <Popup>
//                 <b>{branch.name}</b>
//                 <br />{branch.address}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}
//     </div>
//   );
// };

// export default Showroom;

