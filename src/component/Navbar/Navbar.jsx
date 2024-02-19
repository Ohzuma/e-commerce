import React, { useState } from "react";
import Logo from "../../asset/img/logo.png";
import { FaSearch, FaCartArrowDown, FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [setNav, setShowNav] = useState(false);
  return (
    <nav className="bg-white fixed w-full z-20 top-0 shadow-lg">
      <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href={"/"}>
              <img src={Logo} className="h-12 md:h-16" alt="Logo" />
            </a>
            <ul
              className={`${
                setNav
                  ? "grid gap-3 transition-all absolute shadow-lg bg-white w-full py-6 px-10 left-0 right-0 top-[60px] md:flex md:gap-6 md:ml-8 text-lg"
                  : " gap-3 absolute bg-white w-full py-6 px-10 left-0 right-0 top-[-1000px] md:relative md:top-0 transition-all md:flex md:gap-6 md:ml-8 text-lg"
              }`}
            >
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Jewelries</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href={"/fashion"}>Fashion</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Computers</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Shoes</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Get Started</a>
              </li>
              <div className="flex items-center gap-4 border px-2 py-2 rounded ">
                <FaSearch className="text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-none bg-transparent border-0 outline-0 text-slate-500 text-sm"
                />
              </div>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={"/cart"}
              className="text-2xl text-black/80 relative flex justify-center items-center"
            >
              <FaCartArrowDown />
              <span
                className="bg-red-700 absolute -top-3  -right-2 h-5 w-5
               text-sm text-white rounded-full flex justify-center items-center"
              >
                2
              </span>
            </a>
            <div
              className="relative md:hidden Hamburger cursor-pointer"
              onClick={() => setShowNav(!setNav)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
