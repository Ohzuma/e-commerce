import React from "react";
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductCard = ({
  name,
  ratingStart,
  price,
  ratingNum,
  discount,
  currPrice,
  img,
  desc,
}) => {
  return (
    <div className="relative shadow-lg bg-white py-5 rounded-md px-5 flex flex-col gap-3 hover:shadow-2xl hover:transition transition">
      {/* {discount ? (
        <p className="font-bold text-[1rem] max-w-[100px] text-yellow-500 px-4 py-1">
          {discount}
        </p>
      ) : null} */}
      <img src={img} alt={name} className="h-[150px] w-full object-contain" />

      <div className="flex flex-col gap-1">
        <h2 className="text-black font-bold text-md">{name}</h2>
        <span className="text-sm text-black/90">{desc}</span>
        <span className="text-sm font-bold text-black">{ratingNum} rating</span>

        <p className="flex gap-2  font-bold">
          <span className="text-md ">${currPrice}</span>
          <span className="line-through text-slate-500 text-sm">${price}</span>
        </p>

        <span className="text-black/90 absolute bottom-10 right-10 text-xl hover:cursor-pointer hover:text-red-900/80 ">
          <FaCartArrowDown />
        </span>
      </div>
    </div>
  );
};
