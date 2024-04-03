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

const Fashion = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [TopProduct, setTopProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const { error, loading, setLoading, setError, filter, search } =
    LoadingContext();
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
        .get(` https://dummyjson.com/products?limit=20&skip=60`)
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
        .get(`  https://dummyjson.com/products?limit=30&skip=60`)
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

  return (
    <>
      <main className="relative h-full mt-[2rem]">
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
                  Our Fashion Speaks
                </h1>
                <p
                  className="text-md sm:text-xl 
                font-medium normal-case"
                >
                  Let's make you smile again
                </p>
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
                className="grid grid-cols-2 px-0 xs:grid-cols-2 sm:grid-cols-3 
      md:grid-cols-4 gap-x-3 gap-y-4 md:gap-8  justify-items-center "
              >
                {product
                  .filter((item) => {
                    let filterItem = item.category.includes(filter);
                    let searchItem = item.title.toLowerCase().includes(search);
                    console.log();
                    return filterItem && searchItem;
                  })
                  .map((item, i) => {
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
                          <a href={`/detail/${product?.id}`}>
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
                                $
                                {dicountAmount(
                                  item?.price,
                                  item?.discountPercentage
                                )}
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
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Fashion;
