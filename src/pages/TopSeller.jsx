import React from "react";
import ProductCard from "../component/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Purple from "../asset/img/purple.png";
import blackWhiteSneaker from "../asset/img/black-white_sneakers.png";
import Black from "../asset/img/black.png";
import Orange from "../asset/img/orangeSneakers.png";
import Men from "../asset/img/men.png";
const TopSeller = ({
  name,
  rating,
  price,
  ratingNum,
  discount,
  currPrice,
  img,
}) => {
  return (
    <div className="px-5 lg:px-[60px] flex flex-col gap-5 mt-[5rem]">
      <div className="flex">
        <h1 className="text-2xl font-bold">Amazon Top Seller</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <ProductCard
          img={Purple}
          name="Addidas Pinky Sneaker"
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
          img={Orange}
          name="Stylish Nike Orange Sneaker For Clubing"
          ratingNum="378 ratings"
          currPrice="$400"
          price="$600"
          discount="20% off"
        />{" "}
        <ProductCard
          img={Black}
          name="Nice Nike Sneaker For Outing"
          ratingNum="1000 ratings"
          currPrice="$500"
          price="$700"
          discount="50% off"
        />
        <ProductCard
          img={Men}
          name="Men Sneaker"
          ratingNum="700 ratings"
          currPrice="$619"
          price="$800"
          discount="20% off"
        />
      </div>
    </div>
  );
};

export default TopSeller;
