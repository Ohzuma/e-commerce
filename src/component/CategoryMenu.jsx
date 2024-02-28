import React, { useState, useEffect } from "react";

import axios from "axios";
import { LoadingContext } from "./Context";
// import { ProductCard } from "../component/BoxItem";
import { FaCartArrowDown } from "react-icons/fa";

const CategoryMenu = ({ value }) => {
  const [product, setProduct] = useState([]);
  const [discount, setDiscount] = useState();
  const { error, loading, setLoading, setError, handleCart, cart } =
    LoadingContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products?limit=50`)
        .then((res) => {
          setProduct(res.data.products);
          window.localStorage.setItem(
            "data",
            JSON.stringify(res.data.products)
          );
          setLoading(false);
        })
        .catch((err) => {
          setError(err?.message);
          setLoading(false);
        });
    };

    // const storedData = window.localStorage.getItem("data");
    // if (storedData) {
    //   setProduct(JSON.parse(storedData));
    // } else {
    // }
    fetchData();
  }, []);
  // const fetchData = () => {
  //   setLoading(true);
  //   axios
  //     .get(`https://dummyjson.com/products?limit=0`)
  //     .then(async (res) => {
  //       window.localStorage.setItem("cart", JSON.stringify(cart));
  //       setProduct(
  //         window.localStorage.setItem("cart", JSON.stringify(res.data.products))
  //       );
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err?.message);
  //       setLoading(false);
  //     });
  // };
  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  const sliceText = (text) => {
    return text.substring(0, 40);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p className="text-2xl">Loading...</p>}
      <div
        className="grid grid-cols-2
       md:grid-cols-3 
       lg:grid-cols-4 gap-y-4 md:gap-x-4 gap-x-3 w-full   "
      >
        {product.map((product) => {
          return (
            <>
              <div
                className="relative shadow-lg  grayscale hover:grayscale-0
               bg-white py-5 rounded-md px-2 md:px-5  flex flex-col gap-3 transition"
              >
                <a href={`/detail/${product?.id}`}>
                  <img
                    src={product?.thumbnail}
                    alt={product.title}
                    className="h-[150px]  md:h-[200px] w-full 
                     rounded-xl "
                  />
                </a>

                <div className="flex flex-col gap-1">
                  <h2 className="text-black font-bold text-md">
                    {product.title}
                  </h2>
                  <span className="text-sm text-black/90">
                    {sliceText(product?.description)}...
                  </span>
                  <span className="text-sm font-bold text-black">
                    {product?.rating} rating
                  </span>

                  <p className="flex gap-2  font-bold">
                    <span className="text-md ">
                      $
                      {dicountAmount(
                        product?.price,
                        product?.discountPercentage
                      )}
                    </span>
                    <span className="line-through text-slate-500 text-sm">
                      ${`${product?.price}`}
                    </span>
                  </p>

                  <span
                    onClick={() => handleCart(product)}
                    className="text-black/90 absolute bottom-10 right-10 text-xl hover:cursor-pointer hover:text-red-900/80 "
                  >
                    <FaCartArrowDown />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CategoryMenu;
