import React from "react";

const ProductCard = ({ name, price, Icon }) => {
  return (
    <div className="relative p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64 h-50 hover:-translate-y-1 transition-all">
      {/* Price Circle */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-semibold px-3 py-2 rounded-full">
        {price}
      </div>

      {/* Icon */}
      <Icon className="w-20 h-20 text-blue-500 mb-4" />

      {/* Product Name */}
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default ProductCard;
