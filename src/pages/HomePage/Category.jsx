import React from "react";
import airpod from "../../asset/img/airpod.png";
import blackAirpod from "../../asset/img/black_airpod.png";
import blackSneaker from "../../asset/img/black-white_sneakers.png";
import appleLaptp from "../../asset/img/apple_laptop.png";
import pinkHeadPhone from "../../asset/img/pinkhead.png";
import greenSneakers from "../../asset/img/green_sneaker.png";
import lady from "../../asset/img/beautifulLady.png";
import { BoxItem, Box2Item } from "../../component/Navbar/BoxItem";
import Banner from "../../component/Banner";

const Category = ({ name, img, desc, title, btn }) => {
  return (
    <div className=" px-5 lg:px-[60px] mt-[5rem] md:mt-20 flex flex-col gap-8 justify-center">
      <h1 className="text-black/80 font-bold text-lg">Shop Now</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <BoxItem img={airpod} name="Original Airpod" />
        <BoxItem img={blackAirpod} name="Original Oriamo Airpod" />
        <BoxItem img={greenSneakers} name="Addidas Sneakers" />
        <BoxItem img={blackSneaker} name="Addidas Black Sneakers" />

        <Box2Item
          img={pinkHeadPhone}
          name="Amazon Basics"
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio?"
        />

        <Box2Item
          img={appleLaptp}
          name="Gaming virual glass"
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio?"
        />
      </div>
      <Banner
        title="AMAZON DELIVERS TO YOU"
        img={lady}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!"
        btn="Order Now"
      />
    </div>
  );
};

export default Category;
