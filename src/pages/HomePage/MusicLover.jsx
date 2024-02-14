import React from "react";
import ProductCard from "../../component/ProductCard";
import blackHeadPhone from "../../asset/img/black_headphone.png";
import blackAirPod from "../../asset/img/black_airpod.png";
import PinkHeadPhone from "../../asset/img/pinkhead.png";
import readHeadPhone from "../../asset/img/red_headphone.png";
import lady from "../../asset/img/beautifulLady.png";
import Banner from "../../component/Banner";

const MusicLover = (
  name,
  rating,
  price,
  ratingNum,
  discount,
  currPrice,
  img
) => {
  return (
    <div className="px-5 lg:px-[60px] flex flex-col gap-5 mt-[5rem] mb-[3rem]">
      <div className="flex">
        <h1 className="text-2xl font-bold">This Is For The Music Lovers</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <ProductCard
          img={blackHeadPhone}
          name="Addidas Pinky Sneaker"
          ratingNum="4578 ratings"
          price="$759"
          currPrice="$500"
          discount="50% off"
        />
        <ProductCard
          img={blackAirPod}
          name="Latest Addidas Sneakers"
          ratingNum="788 ratings"
          price="$900"
          currPrice="$700"
          discount="50% off"
        />
        <ProductCard
          img={blackHeadPhone}
          name="Stylish Nike Orange Sneaker For Clubing"
          ratingNum="378 ratings"
          currPrice="$400"
          price="$600"
          discount="20% off"
        />{" "}
        <ProductCard
          img={PinkHeadPhone}
          name="Nice Nike Sneaker For Outing"
          ratingNum="1000 ratings"
          currPrice="$500"
          price="$700"
          discount="50% off"
        />
        <ProductCard
          img={readHeadPhone}
          name="Men Sneaker"
          ratingNum="700 ratings"
          currPrice="$619"
          price="$800"
          discount="20% off"
        />
      </div>
      <Banner
        title="SUBSCRIBE TO THE NEWS NOW!!!"
        img={lady}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!"
        btn="Subscribe Now"
      />
    </div>
  );
};

export default MusicLover;
