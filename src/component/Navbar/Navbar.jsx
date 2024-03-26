import React, { useEffect, useState, useRef } from "react";
import { LoadingContext } from "../Context";

import {
  FaCartArrowDown,
  FaPhone,
  FaPhoneVolume,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [setNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 793) {
        // navRef.current.remove();
      }
      // console.log(window.scrollY);
    };
  });

  const { handleSubmit } = LoadingContext();

  return (
    <nav
      className="fixed w-full
      z-20 top-0  bg-black h-[50px] shadow-lg flex items-center  py-2 px-4 md:px-12 "
    >
      <main className="w-full">
        <div className="flex flex-row items-center  justify-between w-full">
          <div className="flex  items-center  justify-center">
            <div>
              {" "}
              <a href={"/"} className="text-white font-bold text-2xl italic">
                MeShop
              </a>
            </div>
            <ul
              className={`${
                setNav
                  ? "grid gap-3 transition-all  z-40 shadow-lg absolute bg-black text-white w-full py-6 px-10 left-0 right-0 top-[40px] md:flex md:gap-6 md:ml-8 text-lg"
                  : " gap-3 absolute  z-40 text-white w-full py-6 px-10 left-0 right-0 top-[-1000px] md:relative md:top-0 transition-all md:flex md:gap-6 md:ml-8 text-lg"
              }`}
            >
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/Jewelries">Jewelries</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href={"/fashion"}>Fashion</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/computer">Computers</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/shoes">Shoes</a>
              </li>
              {/* <li className="hover:text-slate-600 transition-all">
                <a href="/login">Login</a>
              </li> */}
              {/* <li className="hover:text-slate-600 transition-all">
                <a href="/signup">Register</a>
              </li> */}
            </ul>
          </div>
          <div className="flex items-center gap-5 w-fulld">
            <button
              type="button"
              onClick={handleSubmit}
              className="text-md px-2 py-1 font-medium rounded  text-black/80 bg-white relative flex justify-center items-center border "
            >
              Sign In
            </button>
            <a
              href="tel:+234 8163686235"
              className="text-xl text-white relative flex justify-center items-center"
            >
              <FaPhoneVolume />
            </a>

            <button
              onClick={() => setShowCart(!showCart)}
              className="text-xl text-white relative flex justify-center items-center"
            >
              <FaCartArrowDown />
              <span
                className="bg-red-700 absolute -top-3  -right-2 h-5 w-5
               text-sm text-white rounded-full flex justify-center items-center"
              >
                2
              </span>
            </button>
            <div
              className="relative  md:hidden Hamburger cursor-pointer"
              onClick={() => setShowNav(!setNav)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </main>
      <div
        className={`${
          showCart
            ? "fixed max-h-screen h-screen w-[200px] top-[14%] transition-all  text-black/80 left-0 bg-white drop-shadow-2xl z-20"
            : "fixed max-h-screen h-screen w-[300px] top-[14%]  transition-all text-black/80 left-[-500px] bg-white drop-shadow-2xl z-20"
        }`}
      >
        hello
      </div>
      <div
        className={`${
          showCart
            ? "h-screen w-full fixed bg-black/50 top-[14%] left-0 right-0 z-10 transition-all"
            : "h-screen w-full fixed bg-black/50 top-[-200%] left-0 right-0 z-10 transition-all"
        }`}
      >
        <div className="p-[10rem]">heloo</div>
      </div>
    </nav>
  );
};

export default Navbar;
