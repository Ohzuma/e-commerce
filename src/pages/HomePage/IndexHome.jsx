import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartArrowDown,
  FaRegHeart,
} from "react-icons/fa";
import { register } from "swiper/element/bundle";

import { LoadingContext } from "../../component/Context";
import axios from "axios";
const IndexHome = () => {
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
        .get(`https://dummyjson.com/products?limit=30&skip=50`)
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
    <main className="mt-[4rem] px-3  sm:px-[2.5rem] -z-[999]">
      <section className="relative h-[50vh] bg-slate-400 px-5 py-10">
        <swiper-container
          //   className="flex gap-4"
          spacebetween="50"
          slidesPerView="2"
          loop="true"
          autoplay={JSON.stringify({
            delay: 2000,
            disableOnInteraction: true,
            reverseDirection: false,
            pauseOnMouseEnter: true,
          })}
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          })}
        >
          {/* {product.map((item, i) => {
            return (
              <swiper-slide key={i}>
                <a href={`/detail/${item?.id}`}>
                  <div
                    className="relative  bg-white shadow-lg 
               bg-transparent py-5 rounded-md px-2 md:px-5  flex flex-col gap-3 transition h-full"
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
          })} */}

          <swiper-slide>hello peple of goed</swiper-slide>
          <swiper-slide>hello peple of goed</swiper-slide>
          <swiper-slide>hello peple of goed</swiper-slide>
          <swiper-slide>hello peple of goed</swiper-slide>
        </swiper-container>
      </section>
    </main>
  );
};

export default IndexHome;
