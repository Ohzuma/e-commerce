import React, { useState, useContext } from "react";
import CategoryMenu from "../../component/CategoryMenu";
import { LoadingContext } from "../../component/Context";

const Category = () => {
  const { loading, error } = LoadingContext();

  return (
    <div className=" px-5 lg:px-[60px] mt-[5rem] md:mt-20 flex flex-col gap-8 justify-center">
      <h1 className="text-black/80 font-medium text-2xl">ALL PRODUCT</h1>
      {error.length > 0 ? (
        <p className="text-red-500 text-2xl">{error}</p>
      ) : null}
      {loading ? <p>Loading...</p> : <CategoryMenu />}
    </div>
  );
};

export default Category;
