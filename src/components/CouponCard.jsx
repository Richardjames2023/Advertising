import React, { useState } from 'react';

const CouponCard = ({ cardNumber, userDetails }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Generate a random discount between 3% and 50%
  const getRandomDiscount = () => {
    return Math.floor(Math.random() * (50 - 3 + 1)) + 3; // Random number between 3 and 50
  };

  // Generate a random coupon code
  const couponCode = `COUPON-${Math.floor(Math.random() * 10000)}`;

  // Generate a random receipt number
  const generateReceiptNumber = () => {
    const randomNum = Math.floor(100000000 + Math.random() * 900000000); // 9-digit random number
    return `RCPT-${randomNum}`;
  };

  const discount = getRandomDiscount(); // Get a random discount
  const receiptNumber = generateReceiptNumber(); // Generate a receipt number

  const handleCardClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div
        className="bg-gray-200 p-4 rounded-lg shadow-lg cursor-pointer"
        onClick={handleCardClick}
      >
        <p className="text-xl font-bold text-center">Card {cardNumber}</p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Your Discount Details</h3>
            <p className="mb-2">Receipt Number: <strong>{receiptNumber}</strong></p>
            {/* <p className="mb-2">Coupon Code: <strong>{couponCode}</strong></p> */}
            <p className="mb-2">Discount: <strong>{discount}%</strong> off</p>
            <p className="mb-2">Name: {userDetails.name}</p>
            <p className="mb-2">Location: {userDetails.location}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponCard;
