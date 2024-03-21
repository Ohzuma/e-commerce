import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartArrowDown,
  FaRegHeart,
  FaSearch,
} from "react-icons/fa";
import { register } from "swiper/element/bundle";
import { LoadingContext } from "../component/Context";
// import Swiper from "swiper";/

register();

const Shoes = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [TopProduct, setTopProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const { error, loading, setLoading, setError } = LoadingContext();
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

    const SlideData = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products?limit=30&skip=20`)
        .then((res) => {
          setTopProduct(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          setError(err?.message);
          setLoading(false);
        });
    };
    SlideData();
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

  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  const sliceText = (text) => {
    return text.substring(0, 80);
  };

  return (
    <>
      <main className="relative h-full">
        <div className="relative">
          <div className={`h-[25rem] relative -z-0`}>
            <img
              src={singleProduct?.thumbnail}
              alt={singleProduct?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-black/90 top-0 flex justify-center items-center text-white">
              <div className="flex flex-col md:gap-2 gap-1 items-center justify-center">
                <h1 className=" text-2xl sm:text-5xl text-white font-extrabold tracking-wide">
                  Shoes For Everyone
                </h1>
                <p
                  className="text-md sm:text-xl 
                font-medium normal-case"
                >
                  Discover New and Trending Product
                </p>
                <div
                  className="bg-white px-3 py-4 h-[50px] rounded-md flex 
                items-center w-full sm:w-[500px] md:max-w-[500px] gap-4 justify-between "
                >
                  <input
                    type="text"
                    placeholder="search item..."
                    className=" focus:outline-none border-none z-40 outline-none text-black/80 py-5 px-3 h-full w-full"
                  />
                  <span className="text-black/80 text-xl">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto px-4 md:px-[5rem] relative    w-full">
            <article
              className=" -mt-[6rem] absoluate bg-white shadow-lg h-[200px]
             w-full rounded-lg px-5 py-5 z-50 "
            >
              <h1 className="font-bold text-2xl text-black/80 pb-5">
                Top Categories
              </h1>
              <section className="relative">
                {loading && (
                  <p className="text-2xl text-black flex justify-center items-center">
                    Loading...
                  </p>
                )}
                {error && <p>{error}</p>}

                <button className="custom-next-button slider-btn">
                  <FaArrowRight />
                </button>
                <swiper-container
                  //   className="flex gap-4"
                  spacebetween="50"
                  slidesPerView="3"
                  loop="true"
                  autoplay="true"
                  // autoplayDelay="2000"
                  navigation-next-el=".custom-next-button"
                  navigation-prev-el=".custom-prev-button"
                  breakpoints={JSON.stringify({
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },

                    768: {
                      slidesPerView: 7,
                      spaceBetween: 40,
                    },
                  })}
                >
                  {TopProduct.map((item, i) => {
                    return (
                      <swiper-slide key={i}>
                        <a
                          href={`/detail/${item?.id}`}
                          className="flex flex-col items-center gap-1"
                        >
                          <img
                            src={item?.thumbnail}
                            className="w-full md:w-[100px] h-[70px] object-contain"
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
                Shoes Avaliable In Store
              </h1>
              {loading && <p className="text-2xl text-black">Loading...</p>}
              <div
                className="grid grid-cols-1 px-3 xs:grid-cols-2 sm:grid-cols-3 
      md:grid-cols-4 gap-x-3 gap-y-4 md:gap-8  justify-items-center "
              >
                {product.map((product, i) => {
                  return (
                    <div key={i}>
                      <div
                        className="relative  
                     bg-white py-5 rounded-sm px-2 md:px-5 h-full  
               flex-col gap-3 transition w-[350px] max-w-[350px] sm:w-full"
                      >
                        <a href={`/detail/${product?.id}`}>
                          <img
                            src={product?.thumbnail}
                            alt={product.title}
                            className="h-[180px]  xs:h-[150px] w-full 
                     rounded-xl "
                          />
                        </a>

                        <div className="flex flex-col gap-1">
                          <h2 className="text-black font-bold text-md pt-2  md:text-lg ">
                            {product.title}
                          </h2>
                          <span className="text-md text-black/90 block">
                            {sliceText(product?.description)}...
                          </span>
                          <span className="text-sm  md:block font-bold text-black">
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

                          <p
                            className="flex gap-3  static transition-all 
                  md:absolute bottom-10 right-10 text-2xl sm:text-xl"
                          >
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
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shoes;
