import React, { useEffect, useRef } from "react";
import ProductCard from "../component/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blackHeadPhone from "../asset/img/black_airpod.png";
import blackWhiteSneaker from "../asset/img/black-white_sneakers.png";
import VirtualGlass from "../asset/img/virtual.png";
import hpLaptop from "../asset/img/hp-laptop.png";
import Men from "../asset/img/men.png";

const LastViewed = ({
  name,
  rating,
  price,
  ratingNum,
  discount,
  currPrice,
  img,
}) => {
  return (
    <div className=" px-5 lg:px-[60px] flex flex-col gap-5 mt-[3rem]">
      <div className="flex ">
        <h1 className="text-2xl font-bold">Last Viewed</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <ProductCard
          img={blackHeadPhone}
          name="Original airpod from orimo"
          ratingNum="4578 ratings"
          price="$759"
          currPrice="$500"
          discount="50% off"
        />
        <ProductCard
          img={blackWhiteSneaker}
          name="Latest Addidas Sneakers"
          ratingNum="788 ratings"
          price="$900"
          currPrice="$700"
          discount="50% off"
        />
        <ProductCard
          img={VirtualGlass}
          name="Gaming virtual Glass For Relaxing"
          ratingNum="378 ratings"
          currPrice="$500"
        />{" "}
        <ProductCard
          img={hpLaptop}
          name="Portable Gaming Laptop"
          ratingNum="1000 ratings"
          currPrice="$800"
          price="$1000"
          discount="50% off"
        />
        <ProductCard
          img={Men}
          name="Men Sneaker"
          ratingNum="700 ratings"
          currPrice="$619"
        />
      </div>
    </div>
  );
};

export default LastViewed;
