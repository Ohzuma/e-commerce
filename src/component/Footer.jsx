import React from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative mt-[5rem]">
      <div className=" relative bottom-0 bg-black/90 w-full py-8 px-5 flex flex-col gap-4 justify-center items-center">
        <ul className="flex flex-row gap-3 text-white font-bold  ">
          <li className="text-[1rem] ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-[1rem] ">
            <Link to={"/"}>Cart</Link>
          </li>
          <li className="text-[1rem] ">
            <Link to={"/"}>Shop</Link>
          </li>
        </ul>
        <div className="flex  gap-3 text-[1rem]">
          <span className="text-[1.4rem] text-white">
            <FaFacebook />
          </span>
          <span className="text-[1.4rem] text-white">
            <FaTwitter />
          </span>
          <span className="text-[1.4rem] text-white">
            <FaInstagram />
          </span>
          <span className="text-[1.4rem] text-white">
            <FaGithub />
          </span>
        </div>
        <span className="font-bold text-white">Thankings For Shoping🎉</span>
      </div>
    </div>
  );
};

export default Footer;
