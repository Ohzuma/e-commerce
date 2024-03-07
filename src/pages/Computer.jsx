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

register();

const Computer = () => {
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
        .get(`https://dummyjson.com/products?limit=20&skip=60`)
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
        .get(`https://dummyjson.com/products?limit=30&skip=0`)
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
    <>
      <main className="md:mt-[5rem]  relative h-full">
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
                  Get The Best Accessories
                </h1>
                <p
                  className="text-md sm:text-xl 
                font-medium normal-case"
                >
                  Get the best accessories online
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
                className="grid grid-cols-2
       sm:grid-cols-3 
       lg:grid-cols-4 gap-y-8 md:gap-x-4 gap-x-3 w-full   "
              >
                {product.map((product) => {
                  return (
                    <>
                      <div
                        className="relative shadow-lg  grayscale hover:grayscale-0
               bg-white py-5 rounded-md h-full px-2 md:px-5  flex flex-col gap-3 transition"
                      >
                        <a href={`/detail/${product?.id}`}>
                          <img
                            src={product?.thumbnail}
                            alt={product.title}
                            className="h-[120px]  md:h-[200px] w-full 
                     rounded-xl "
                          />
                        </a>

                        <div className="flex flex-col gap-1">
                          <h2 className="text-black font-bold text-sm md:text-md ">
                            {product.title}
                          </h2>
                          <span className="text-sm text-black/90">
                            {sliceText(product?.description)}...
                          </span>
                          <span className="text-sm hidden md:block font-bold text-black">
                            {product?.rating} rating
                          </span>

                          <p className="flex gap-2  font-bold">
                            <span className="text-sm md:text-md ">
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
                    </>
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

export default Computer;
