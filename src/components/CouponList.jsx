import React from 'react';

const CouponList = ({ coupons }) => { // Accept the coupons prop
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {coupons.length > 0 ? (
        coupons.map(coupon => (
          <div key={coupon.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{coupon.title}</h3>
            <p className="text-gray-600">{coupon.description}</p>
            <span className="text-green-500 font-bold">{coupon.discount}% off</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No coupons available.</p>
      )}
    </div>
  );
};

export default CouponList;
