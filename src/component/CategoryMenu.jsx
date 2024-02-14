import React, { useState, useEffect } from "react";
import airpod from "../asset/img/airpod.png";
import blackAirpod from "../asset/img/black_airpod.png";
import blackSneaker from "../asset/img/black-white_sneakers.png";
import appleLaptp from "../asset/img/apple_laptop.png";
import pinkHeadPhone from "../asset/img/pinkhead.png";
import greenSneakers from "../asset/img/green_sneaker.png";
import lady from "../asset/img/beautifulLady.png";
import { BoxItem, Box2Item } from "../component/BoxItem";
import Banner from "../component/Banner";
import axios from "axios";
import { LoadingContext } from "./Context";

const CategoryMenu = () => {
  const [product, setProduct] = useState([]);

  const { loading, setLoading, error, setError } = LoadingContext();
  setLoading(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then(async (res) => {
        setLoading(true);
        setProduct(await res.data);
        setLoading(false);
        console.log(loading);
      })
      .catch((err) => {
        setError(err?.message);
      });
  }, []);
  console.log(product);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {product.map((product) => {
          return <BoxItem img={product.image} name={product.title} />;
        })}
      </div>
      <Banner
        title="AMAZON DELIVERS TO YOU"
        img={lady}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!"
        btn="Order Now"
      />
    </>
  );
};

export default CategoryMenu;
