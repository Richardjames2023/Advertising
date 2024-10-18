// import React, { useEffect, useState } from 'react';
// import NavBar from '../components/NavBar';
// import CouponList from '../components/CouponList'; 
// import axios from 'axios';
// import LocationSelector from '../components/LocationSelector';

// const HomePage = () => {
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);
//   const [city, setCity] = useState('');
//   const [coupons, setCoupons] = useState([]);

//   useEffect(() => {
//     // Automatically get the user's current location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//           fetchCityName(latitude, longitude); // Fetch city name
//         },
//         (geoError) => {
//           console.error(geoError);
//           setError("Unable to retrieve your location. Please check location settings.");
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser");
//     }
//   }, []);

//   const fetchCityName = async (latitude, longitude) => {
//     try {
//       const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY; 
//       const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
//         params: {
//           q: `${latitude},${longitude}`,
//           key: apiKey,
//         },
//       });
//       const city = response.data.results[0].components.city || response.data.results[0].components.country;
//       setCity(city);
//       fetchCoupons(city); // Fetch coupons for the city
//     } catch (geocodeError) {
//       console.error("Geocode error:", geocodeError);
//       setError("Error fetching location name");
//     }
//   };

//   const handleLocationSelect = (selectedLocation) => {
//     setLocation(selectedLocation);
//     fetchCityName(selectedLocation.lat, selectedLocation.lng); // Fetch city name based on selected location
//   };

//   const fetchCoupons = async (city) => {
//     // Here you would typically call your API to fetch coupons based on the city.
//     const mockCoupons = [
//       { id: 1, title: `20% off in ${city}`, description: "Get 20% off on all electronics items", discount: 20 },
//       { id: 2, title: `50% off in ${city}`, description: "Huge discounts on fashion apparel", discount: 50 },
//       { id: 3, title: `30% off in ${city}`, description: "Fresh groceries at 30% off", discount: 30 },
//     ];
//     setCoupons(mockCoupons);
//     console.log(mockCoupons);
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="p-8">
//         <h2 className="text-3xl font-bold mb-4">Welcome to the Coupon Website!</h2>
//         {location ? (
//           <p className="mb-4">Your Location: Latitude {location.latitude}, Longitude {location.longitude}</p>
//         ) : (
//           <p className="mb-4 text-red-500">{error || "Fetching location..."}</p>
//         )}
//         {city && <h3 className="text-xl mb-4">Coupons available in: {city}</h3>}
        
//         <LocationSelector onLocationSelect={handleLocationSelect} /> {/* Add the location selector */}
        
//         <CouponList coupons={coupons} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // for navigation to coupon page

// const HomePage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send data to the backend (placeholder for now)
//     const userDetails = {
//       name,
//       email,
//       phone,
//       location,
//     };

//     // Navigate to the coupon page
//     navigate('/coupons', { state: { userDetails } });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Get Your Land Purchase Discount</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//           <input
//             type="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
//           <input
//             type="tel"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//         >
//           Get Coupon
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the product page, passing user details (including location)
    navigate('/products', { state: { userDetails } });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Get Your Purchase Discounts</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Phone No.:</label>
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Location:</label>
            <input
              type="text"
              name="location"
              value={userDetails.location}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Get Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;