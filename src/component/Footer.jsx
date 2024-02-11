import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-[5rem] absolute bg-slate-200 w-full py-8 px-5 flex flex-col gap-4 justify-center items-center">
      {" "}
      <ul className="flex flex-row gap-3 text-black/80 font-bold  " l>
        <li className="text-[1rem] ">
          <a href={"/"}>Home</a>
        </li>
        <li className="text-[1rem] ">
          <a href={"/"}>Cart</a>
        </li>
        <li className="text-[1rem] ">
          <a href={"/"}>Shop</a>
        </li>
      </ul>
      <div className="flex  gap-3 text-[1rem]">
        <span className="text-[1.4rem] text-black/80">
          <FaFacebook />
        </span>
        <span className="text-[1.4rem] text-black/80">
          {" "}
          <FaTwitter />
        </span>
        <span className="text-[1.4rem] text-black/80">
          <FaInstagram />
        </span>
        <span className="text-[1.4rem] text-black/80">
          {" "}
          <FaGithub />
        </span>
      </div>
      <span className="font-bold text-black/80">Thankings For Shoping🎉</span>
    </div>
  );
};

export default Footer;
