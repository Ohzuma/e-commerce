import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartArrowDown,
  FaSearch,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();

const Fashion = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [TopProduct, setTopProduct] = useState([]);
  const [product, setProduct] = useState([]);

  const ranNum = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${ranNum}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => {
        // setError(err?.message);
        console.log(err);
      });
    axios
      .get(`https://dummyjson.com/products?limit=20&skip=60`)
      .then((res) => {
        setTopProduct(res.data.products);
      })
      .catch((err) => {
        // setError(err?.message);
        console.log(err);
      });
    axios
      .get(`https://dummyjson.com/products?limit=30&skip=60`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        // setError(err?.message);
        console.log(err);
      });
  }, []);

  //   const swiper = new Swiper(".swiper-container", {
  //     autoplay: {
  //       disableOnInteraction: false,
  //       pauseOnMouseEnter: true,
  //     },
  //   });
  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  const sliceText = (text) => {
    return text.substring(0, 40);
  };
  return (
    <main className="mt-[5rem]  relative h-auto">
      <div className="relative">
        <div className={`h-[25rem] relative -z-40`}>
          <img
            src={singleProduct?.thumbnail}
            alt={singleProduct?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black/90 top-0 flex justify-center items-center text-white">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-5xl text-white font-extrabold tracking-wide">
                Let's Make You Unique
              </h1>
              <p className="text-xl font-medium normal-case">
                Discover New and Trending Cloths
              </p>
              <div className="bg-white px-3 py-4 h-[50px] rounded-sm flex items-center w-[500px] gap-4 justify-between">
                <input
                  type="text"
                  placeholder="search item..."
                  className="placeholder:italic focus:outline-none border-none outline-none text-black/80 p-3 h-full w-full"
                />
                <span className="text-black/80 text-xl">
                  <FaSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-[5rem] -mt-[6rem] z-40  w-full">
          <article className="bg-white shadow-lg h-[200px] w-full rounded-lg px-5 py-5 ">
            <h1 className="font-bold text-2xl text-black/80 pb-5">
              Top Categories
            </h1>
            <section className="relative">
              <button className="custom-next-button slider-btn">
                <FaArrowRight />
              </button>
              <swiper-container
                className="flex gap-4"
                slides-per-view="9"
                //   space-between="20"
                //   scrollbar-clickable="true"
                //   mousewheel-invert="true"
                loop="true"
                autoplay="true"
                //   navigation="true"
                // autoplay-disable-on-interaction="false"
                //   autoplaydisableOnInteraction="false"
                autoplay-delay="2000"
                navigation-next-el=".custom-next-button"
                navigation-prev-el=".custom-prev-button"
                autoplay-disableOnInteraction="false"
                autoplay-pauseOnMouseEnter="true"
              >
                {TopProduct.map((item, i) => {
                  return (
                    <swiper-slide key={i} className="flex">
                      <a href={`/detail/${item?.id}`}>
                        <img
                          src={item?.thumbnail}
                          className="w-[100px] h-[70px] object-contain"
                          alt={item?.title}
                        />
                        <p className="text-[0.7rem] text-black/80">
                          {item?.title}
                        </p>
                      </a>
                    </swiper-slide>
                  );
                })}
              </swiper-container>
              <button className="custom-prev-button slider-btn">
                <FaArrowLeft />
              </button>
            </section>
          </article>
          <section className="mt-[5rem]">
            <h1 className=" font-medium text-2xl pb-8">
              Dresses Avaliable In Store
            </h1>
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
                          // onClick={() => handleCart(product)}
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
          </section>
        </div>
      </div>
    </main>
  );
};

export default Fashion;
