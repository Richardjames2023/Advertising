import React from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      {/* Slide-up Menu (hidden unless hovered) */}
      <div className="w-full h-32 absolute bg-white -top-full group-hover:top-0 duration-700 z-10">
        <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
          <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Compare
            <span>
              <GiReturnArrow />
            </span>
          </li>
          <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Add to Cart
            <span>
              <FaShoppingCart />
            </span>
          </li>
          <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            View Details
            <Link to={`/menu/${product.id}`}>
              <MdOutlineLabelImportant />
            </Link>
          </li>
          <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Add to Wish List
            <span>
              <BsSuitHeartFill />
            </span>
          </li>
        </ul>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between relative z-0">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-gray-500 mb-2">Location: {product.location}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="text-xl font-semibold mb-4">${product.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductCard;