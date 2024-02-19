import React, { useEffect, useState } from "react";
import { LoadingContext } from "../../component/Context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Detailed = () => {
  const { loading, setLoading, error, setError } = LoadingContext();
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  console.log(product);
  return (
    <div className="mt-[10rem] bg-slate-100 px-3 md:px-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 place-items-center ">
        <div>
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="lg:max-w-[500px] lg:max-h-[400px] max-w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-orange-400 uppercase font-bold text-sm">
            {product?.brand} Company
          </p>
          <h2 className="text-2xl font-bold text-black/90">{product?.title}</h2>
          <p className="max-w-[400px] text-sm leading-6">
            {product?.description}
          </p>
          <p className=" text-sm leading-6 font-bold">
            Avaliable in store{" "}
            <span className="font-bold text-orange-400">
              {product?.stock} pics
            </span>
          </p>
          <p className="flex gap-3 items-center">
            <span className="font-bold text-lg">${product?.price}</span>{" "}
            <span className="text-orange-400 bg-orange-50 px-4 py-3 h-[30px] w-[60px] flex justify-center items-center font-bold">
              {product?.discountPercentage}%
            </span>
          </p>
          <div>
            <button
              className="flex justify-center items-center gap-2 bg-orange-400 px-4 py-3
             font-bold text-white text-sm w-[10rem] h-[40px] rounded-md"
            >
              {" "}
              <FaCartArrowDown />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
