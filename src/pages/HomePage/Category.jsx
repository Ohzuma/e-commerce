import React, { useState, useContext, useEffect } from "react";
import CategoryMenu from "../../component/CategoryMenu";
import { LoadingContext } from "../../component/Context";

import BestSeller from "../BestSeller";
import Arrival from "../Arrival";
import Product from "../Product";
import NewLetter from "../../component/NewLetter";

const Category = () => {
  return (
    <div className=" px-3 lg:px-[45px] mt-[5rem] flex flex-col relative gap-8 justify-center">
      <BestSeller />
      <Arrival />
      <Product />
      <NewLetter />
    </div>
  );
};

export default Category;
