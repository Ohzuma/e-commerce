import axios from "axios";
import React, { useEffect, useState } from "react";

const Shoes = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const ranNum = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/1`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => {
        // setError(err?.message);
        console.log(err);
      });
  }, []);

  return (
    <main className="mt-[5rem] ">
      <div className="relative">
        <div className={`h-[20rem] `}>
          <img
            src={singleProduct?.thumbnail}
            alt={singleProduct?.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Shoes;
