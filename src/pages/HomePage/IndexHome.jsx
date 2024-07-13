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
        .get(`https://dummyjson.com/products?limit=1&skip=70`)
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
    <div className="">
      <main className="mt-[2rem] px-3  md:px-[2.5rem] -z-50  relative home w-full">
        <section
          className=" overflow-hidden  bg-pink-400 sm:py-0 py-5  sm:h-[400px]  flex 
         sm:flex-row justify-between rounded-lg items-center  px-0 w-full  sm:px-[2.5rem]  "
        >
          <div className=" -ml-12 md:ml-0 h-[20rem] sm:h-[40rem] w-[32rem]   ">
            <img
              src={pic}
              alt="yyy"
              className=" object-contain w-full h-full"
            />
          </div>
          <div className="text-right flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              {" "}
              Welcome to <span className="text-pink-800">MeShop</span>
            </h1>
            <p className="md:max-w-[500px] text-lg text-black/80">
              where <span className="font-bold text-black">shopping</span> meets{" "}
              <span className="font-bold text-black">simplicity</span>. Discover
              a world of{" "}
              <span className="font-bold text-black">possibilities</span> right
              at your
              <span className="font-bold text-black"> fingertips</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndexHome;
