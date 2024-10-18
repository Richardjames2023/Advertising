// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Plot in Abuja', location: 'Abuja', price: '$200,000' },
//   { id: 2, name: 'Plot in Abuja', location: 'Abuja', price: '$150,000' },
//   { id: 3, name: 'Plot in Lagos', location: 'Lagos', price: '$300,000' },
//   { id: 4, name: 'Plot in Lagos', location: 'Lagos', price: '$100,000' },
// ];

// const ProductPage = () => {
//   const location = useLocation();
//   const { userDetails } = location.state;

//   // Filter products based on user location
//   const filteredProducts = products.filter(
//     (product) => product.location.toLowerCase() === userDetails.location.toLowerCase()
//   );

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-4">Available Products in {userDetails.location}</h2>
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <div key={product.id} className="mb-4 p-4 border border-gray-300 rounded-lg">
//             <h3 className="text-xl font-bold">{product.name}</h3>
//             <p>Price: {product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available in {userDetails.location}</p>
//       )}
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const ProductPage = () => {
  const location = useLocation();
  const { userDetails } = location.state || {}; // Retrieve the user details (including location)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch filtered products based on user location
    const fetchProducts = async () => {
      try {
        // Simulate an API request to fetch products based on location
        const filteredProducts = mockProducts.filter(
          (product) => product.location === userDetails.location
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userDetails.location]);

  const mockProducts = [
    {
      id: 1,
      name: 'Luxury Plot of Land',
      imageUrl: 'https://example.com/land.jpg',
      description: 'A beautiful piece of land in a serene environment.',
      location: 'Abuja',
      price: 100000,
    },
    {
      id: 2,
      name: 'Premium Plot of Land',
      imageUrl: 'https://example.com/land2.jpg',
      description: 'A premium plot in a developing area.',
      location: 'Ibadan',
      price: 85000,
    },
    {
      id: 2,
      name: 'Premium Plot of Land',
      imageUrl: 'https://example.com/land2.jpg',
      description: 'A premium plot in a developing area.',
      location: 'Abuja',
      price: 85000,
    },
    {
      id: 2,
      name: 'Premium Plot of Land',
      imageUrl: 'https://example.com/land2.jpg',
      description: 'A premium plot in a developing area.',
      location: 'Abuja',
      price: 85000,
    },
    {
      id: 3,
      name: 'Premium Plot of Land',
      imageUrl: 'https://example.com/land3.jpg',
      description: 'A premium plot in a developing area.',
      location: 'Lagos',
      price: 85000,
    },
    {
      id: 2,
      name: 'Premium Plot of Land',
      imageUrl: 'https://example.com/land2.jpg',
      description: 'A premium plot in a developing area.',
      location: 'Abuja',
      price: 85000,
    },
    // Add more products as needed...
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Available Products in {userDetails?.location}</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available in this location.</p>
      )}
    </div>
  );
};

export default ProductPage;