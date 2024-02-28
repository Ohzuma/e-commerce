import React, { useState, useEffect } from "react";

import axios from "axios";
import { LoadingContext } from "../../component/Context";
// import { ProductCard } from "../component/BoxItem";
import { FaCartArrowDown } from "react-icons/fa";

const Sport = ({ value }) => {
  const [product, setProduct] = useState([]);
  const [discount, setDiscount] = useState();
  const { error, loading, setLoading, setError, handleCart, cart } =
    LoadingContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products/category/fragrances`)
        .then((res) => {
          setProduct(res.data.products);
          window.localStorage.setItem(
            "sport",
            JSON.stringify(res.data.products)
          );
          setLoading(false);
        })
        .catch((err) => {
          setError(err?.message);
          setLoading(false);
        });
    };

    const storedData = window.localStorage.getItem("sport");
    if (storedData) {
      setProduct(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

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
      <h1 className="text-2xl">FEATURED PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-4 md:gap-8 ">
        {product.map((product) => {
          return (
            <>
              <div
                className="relative  shadow-lg grayscale hover:grayscale-0
               bg-white py-5 rounded-md px-2 md:px-5 flex flex-col gap-3 hover:shadow-2xl hover:transition transition"
              >
                <a href={`/detail/${product?.id}`}>
                  <img
                    src={product?.images[1]}
                    alt={product.title}
                    className="h-[150px] w-full object-contain "
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

export default Sport;
