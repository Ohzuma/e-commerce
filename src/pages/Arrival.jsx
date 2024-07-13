import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartArrowDown,
  FaRegHeart,
} from "react-icons/fa";
import { register } from "swiper/element/bundle";

import { LoadingContext } from "../component/Context";
import axios from "axios";

register();

const Arrival = () => {
  const [product, setProduct] = useState([]);
  const { error, loading, setLoading, setError } = LoadingContext();

  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        setLoading(true);
        await axios
          .get(`https://dummyjson.com/products?limit=10&skip=90`)
          .then((res) => {
            setProduct(res.data.products);
            setLoading(false);
          })
          .catch((err) => {
            setError(err?.message);
            setLoading(false);
          });
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center my-[1rem] uppercase pb-5 flex flex-col items-center justify-center h1">
        {" "}
        New Arrivals
      </h1>

      {loading && (
        <p className="text-2xl text-black flex justify-center items-center">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}

      <div
        className="grid grid-cols-2 px-0 xs:grid-cols-2 sm:grid-cols-3 
      md:grid-cols-4 gap-x-3 gap-y-4 md:gap-8  justify-items-center "
      >
        {product.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className="relative  bg-white shadow-lg  w-full
               bg-transparent py-5 rounded-md px-2 md:px-5  flex flex-col gap-3 transition h-full"
              >
                <a href={`/detail/${item?.id}`}>
                  <img
                    src={item?.thumbnail}
                    alt={item.title}
                    className="h-[200px] w-full 
                     rounded-xl "
                  />
                </a>

                <div className="flex flex-col gap-1">
                  <h2 className="text-black font-bold text-sm md:text-md ">
                    {item.title}
                  </h2>

                  <span className="text-sm hidden md:block font-bold text-black">
                    {item?.rating} rating
                  </span>

                  <p className="flex gap-2  font-bold">
                    <span className="text-sm md:text-md ">
                      ${dicountAmount(item?.price, item?.discountPercentage)}
                    </span>
                    <span className="line-through text-slate-500 text-sm">
                      ${`${item?.price}`}
                    </span>
                  </p>

                  <p className="flex gap-3  static transition-all md:absolute bottom-10 right-10 text-lg">
                    <span className="hover:cursor-pointer">
                      <FaRegHeart />
                    </span>
                    <span
                      //   onClick={() => handleCart(product)}
                      className="text-black/90 hover:cursor-pointer"
                    >
                      <FaCartArrowDown />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Arrival;
