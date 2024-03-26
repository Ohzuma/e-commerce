import React, { useState, useContext, useEffect } from "react";
import CategoryMenu from "../../component/CategoryMenu";
import { LoadingContext } from "../../component/Context";
import axios from "axios";
import Sport from "./Sport";
import BestSeller from "../BestSeller";
import Arrival from "../Arrival";
import Product from "../../Product";
import NewLetter from "../../component/NewLetter";

const Category = () => {
  return (
    <div className=" px-3 lg:px-[45px] mt-[5rem] flex flex-col gap-8 justify-center">
      <BestSeller />
      <Sport />
      <Arrival />
      <Product />
      <NewLetter />
    </div>
  );
};

export default Category;
