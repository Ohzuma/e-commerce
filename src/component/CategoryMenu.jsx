import React, { useState, useEffect } from "react";
import airpod from "../asset/img/airpod.png";
import lady from "../asset/img/beautifulLady.png";
import { BoxItem, Box2Item } from "../component/BoxItem";
import Banner from "../component/Banner";
import axios from "axios";
import { LoadingContext } from "./Context";
import { ProductCard } from "../component/BoxItem";

const CategoryMenu = () => {
  const [product, setProduct] = useState([]);
  const [discount, setDiscount] = useState();
  const { loading, setLoading, error, setError } = LoadingContext();

  //   const onScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const clientHeight = document.documentElement.clientHeight;

  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       setLimit(() => limit + 10);
  //     }
  //   };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://dummyjson.com/products?limit=0`)
      .then(async (res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  console.log(product);

  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    // setDiscount(newPrice);
    return newPrice;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {product.map((product) => {
          return (
            // <ProductCard
            //   key={product?.id}
            //   img={product?.images[1]}
            //   name={product.title}
            // />

            <ProductCard
              key={product?.id}
              img={product?.images[1]}
              name={product.title}
              ratingNum={product?.rating}
              currPrice={`$${product?.price}`}
              price={dicountAmount(product?.price, product?.discountPercentage)}
              discount={`${product?.discountPercentage}%`}
            />
          );
        })}
      </div>
      {/* <Banner
        title="AMAZON DELIVERS TO YOU"
        img={lady}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!"
        btn="Order Now"
      /> */}
    </>
  );
};

export default CategoryMenu;
