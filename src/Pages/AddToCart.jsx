import React, { useState } from 'react';


const AddToCart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems); // Initial cart items can be passed as props

  // Function to increase quantity
  const increaseQuantity = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Items</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 mr-4" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 px-2 rounded">-</button>
                <span className="mx-4">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 px-2 rounded">+</button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Amount */}
      <div className="mt-4">
        <h2 className="font-bold">Total Amount: 
          ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default AddToCart;