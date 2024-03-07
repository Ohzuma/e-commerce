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

const BestSeller = () => {
  const [product, setProduct] = useState([]);
  const { error, loading, setLoading, setError } = LoadingContext();

  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  const sliceText = (text) => {
    return text.substring(0, 40);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products?limit=30&skip=70`)
        .then((res) => {
          setProduct(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          setError(err?.message);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl my-[3rem] uppercase font-medium pb-5 ">
        {" "}
        Best Selling Product
      </h1>

      {loading && (
        <p className="text-2xl text-black flex justify-center items-center">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}

      <section className="relative">
        <button className="custom-next-button slider-btn">
          <FaArrowRight />
        </button>
        <swiper-container
          //   className="flex gap-4"
          spacebetween="50"
          slidesPerView="2"
          loop="true"
          autoplay="true"
          // autoplayDelay="2000"
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          })}
        >
          {product.map((item, i) => {
            return (
              <swiper-slide key={i}>
                <a href={`/detail/${item?.id}`}>
                  <div
                    className="relative  grayscale hover:grayscale-0
               bg-transparent py-5 rounded-md px-2 md:px-5  flex flex-col gap-3 transition"
                  >
                    <a href={`/detail/${product?.id}`}>
                      <img
                        src={item?.thumbnail}
                        alt={item.title}
                        className="h-[120px]  md:h-[200px] w-full 
                     rounded-xl "
                      />
                    </a>

                    <div className="flex flex-col gap-1">
                      <h2 className="text-black font-bold text-sm md:text-md ">
                        {item.title}
                      </h2>
                      <span className="text-sm text-black/90">
                        {sliceText(item?.description)}...
                      </span>
                      <span className="text-sm hidden md:block font-bold text-black">
                        {item?.rating} rating
                      </span>

                      <p className="flex gap-2  font-bold">
                        <span className="text-sm md:text-md ">
                          $
                          {dicountAmount(item?.price, item?.discountPercentage)}
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
                </a>
              </swiper-slide>
            );
          })}
        </swiper-container>
        <button className="custom-prev-button slider-btn">
          <FaArrowLeft />
        </button>
      </section>
    </div>
  );
};

export default BestSeller;
