import React, { useEffect, useState, useRef } from "react";
import { LoadingContext } from "../Context";

import {
  FaBorderAll,
  FaCartArrowDown,
  FaPhone,
  FaPhoneVolume,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import Header from "./Header";
import NavHeader from "./NavHeader";
import axios from "axios";

const Navbar = () => {
  const [setNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [category, setCatergory] = useState([]);
  const { handleSubmit, handleChange } = LoadingContext();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://dummyjson.com/products/categories`)
        .then((res) => {
          setCatergory(res.data);
        })
        .catch((err) => {
          console.log(err?.message);
        });
    };
    fetchData();
  }, []);
  return (
    <header className="w-full  flex flex-col gap-0 h-[150px]">
      <Header />
      <NavHeader />
      <nav
        className="
       w-full transition bg-white h-[80px] shadow-lg flex items-center  py-2 px-4 md:px-12 "
        id="nav"
      >
        <main className="w-full">
          <div className="flex flex-row items-center  justify-between w-full">
            <div className="flex  items-center   justify-between w-full gap-9">
              <div className="flex justify-center items-center gap-2">
                <FaBorderAll className="text-xl" />
                <select
                  name=""
                  id=""
                  className="focus:outline-none"
                  onChange={handleChange}
                >
                  <option value="All">All Category</option>
                  {category.map((item, i) => {
                    return (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <ul
                className={`    md:w-full md:max-w-[100%]  z-40 text-black  md:self-start  md:relative md:top-0 md:left-auto md:right-auto transition-all md:flex md:gap-6  text-lg${
                  setNav
                    ? " shadow-lg fixed bg-white left-[0px] top-[0] h-screen flex flex-col justify-center items-center max-w-[200px] w-[200px] gap-[2rem] md:flex md:gap-6 md:ml-8 text-[1.7rem]"
                    : " absolute   left-[-500px]  h-screen  top-[122px] max-w-[200px] m-auto flex flex-col md:flex-row justify-center items-center gap-[1.7rem]"
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
                  <a href="/contact">Contact Us</a>
                </li>
                <li className="hover:text-slate-600 transition-all">
                  <a href="/about">About Us</a>
                </li>
                <li className="hover:text-slate-600 transition-all">
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            {/* <div className="flex items-center gap-5 w-fulld"> */}
            <div
              className="relative  md:hidden Hamburger cursor-pointer"
              onClick={() => setShowNav(!setNav)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* </div> */}
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
    </header>
  );
};

export default Navbar;
