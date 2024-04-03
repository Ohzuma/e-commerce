import React, { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { LoadingContext } from "../../component/Context";
import axios from "axios";
import pic from "../../asset/img/black_headphone.png";

register();
const IndexHome = () => {
  const [product, setProduct] = useState([]);
  const { error, loading, setLoading, setError } = LoadingContext();

  const dicountAmount = (price, discount) => {
    let newDiscount = discount / 100;
    let newPrice = Math.floor(newDiscount * price);
    return newPrice;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products?limit=5&skip=70`)
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
  console.log(product);
  return (
    <div className="relative">
      <main className="mt-[4rem] px-0  sm:px-[2.5rem] home w-full relative ">
        <section className="  bg-white flex justify-center items-center ">
          {loading && (
            <p className="text-2xl text-black flex justify-center items-center">
              Loading...
            </p>
          )}
          {error && <p>{error}</p>}
          <swiper-container
            loop="true"
            pagination={{
              clickable: true,
              // paginationEl: "page-btn",
            }}
            delay="2000"
            // autoplay={JSON.stringify({
            //   disableOnInteraction: true,
            //   reverseDirection: false,
            //   pauseOnMouseEnter: true,
            // })}
            // navigation="true"
            // breakpoints={JSON.stringify({
            //   320: {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            // })}
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

            {product.map((item, i) => {
              return (
                <swiper-slide key={i}>
                  <div className="flex justify-between gap-3 p-[2rem] items-center">
                    <article className="flex flex-col gap-3">
                      <div className="flex flex-col text-xl sm:text-[2rem] font-extrabold text-s-800 text-black">
                        {" "}
                        <span>{item?.title}</span>
                      </div>
                      <p className="text-[1rem] sm:text-lg max-w-[600px]">
                        {item?.description}
                      </p>

                      <a
                        href="/"
                        className="bg-pink-900 text-white max-w-[150px] h-[40px] text-[1rem] font-bold rounded-sm flex justify-center items-center"
                      >
                        Visit Collection
                      </a>
                    </article>
                    <div className="h-auto sm:h-[300px]">
                      <img
                        src={item?.thumbnail}
                        alt={item?.title}
                        className="h-full"
                      />
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </section>
        {/* <div className="page-btn"></div> */}
      </main>
    </div>
  );
};

export default IndexHome;
