import React, { useState, useContext, useEffect } from "react";
import CategoryMenu from "../../component/CategoryMenu";
import { LoadingContext } from "../../component/Context";
import axios from "axios";
import Sport from "./Sport";

const Category = () => {
  const { loading, error } = LoadingContext();
  const [category, setCategory] = useState([]);
  const [inView, setInView] = useState(false);

  // const [inputValue, setInputValue] = useState("");

  // const handleChange = (e) => {
  //   setInputValue(() => e.target.value);
  // };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        // setError(err?.message);
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   window.onscroll = () => window.scrollY === 53 && console.log("back at top");

  //   return () => (window.onscroll = null);
  // });

  return (
    <div className=" px-5 lg:px-[60px] mt-[5rem] flex flex-col gap-8 justify-center">
      <Sport />

      {/* <div className="grid grid-cols-[0.3fr,1fr] mt-[5rem] gap-8 ">
        <div className=" bg-white shadow-2xl px-4 h-auto py-8 flex flex-col items-centers jsustify-center ">
          <div
            className="py-2 px-3 
        flex flex-col justify-center 
          text-xl capitalize gap-3 font-medium  "
          >
            {category.map((item) => {
              return <span className="flex gap-2 text-black/90">{item}</span>;
            })}
          </div>
        </div> */}
      <CategoryMenu />
    </div>
    // </div>
  );
};

export default Category;
