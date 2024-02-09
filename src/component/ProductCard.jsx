import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  name,
  ratingStart,
  price,
  ratingNum,
  discount,
  currPrice,
  img,
}) => {
  return (
    <div className="shadow-lg bg-white py-3 px-5 flex flex-col gap-4 hover:shadow-2xl hover:transition transition">
      {discount ? (
        <p className="bg-yellow-600 font-bold text-[1rem] max-w-[100px] text-white px-4 py-1">
          {discount}
        </p>
      ) : null}

      <img
        src={img}
        alt={name}
        className="h-[150px] w-[200px] object-contain"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-black font-bold text-md">{name}</h2>
        <p className="flex gap-3 items-center">
          <span className="flex gap-1 text-yellow-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-sm font-bold text-slate-600">{ratingNum}</span>
        </p>
        <p className="flex gap-2 text-sm font-bold">
          <span className="text-3xl">{currPrice}</span>
          <span className="line-through text-slate-500">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
