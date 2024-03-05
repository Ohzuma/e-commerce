import React, { useEffect, useState, useRef } from "react";
import Logo from "../../asset/img/logo.png";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";

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

  const navRef = useRef(null);
  // console.log(navRef);

  return (
    <nav className="relative">
      <main className="bg-black fixed w-full z-20 top-0 shadow-lg" ref={navRef}>
        <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href={"/"} className="text-white font-bold text-2xl italic">
                {/* <img src={Logo} className="h-12 md:h-16 text-white" alt="Logo" /> */}
                MeShop
              </a>
              <ul
                className={`${
                  setNav
                    ? "grid gap-3 transition-all absolute z-40 shadow-lg bg-black text-white w-full py-6 px-10 left-0 right-0 top-[40px] md:flex md:gap-6 md:ml-8 text-lg"
                    : " gap-3 absolute z-40 bg-black text-white w-full py-6 px-10 left-0 right-0 top-[-1000px] md:relative md:top-0 transition-all md:flex md:gap-6 md:ml-8 text-lg"
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
                <li className="hover:text-slate-600 transition-all">
                  <a href="/">Login</a>
                </li>
                <li className="hover:text-slate-600 transition-all">
                  <a href="/">Register</a>
                </li>
                {/* <div className="flex items-center gap-4 border px-2 py-2 rounded ">
                <FaSearch className="text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-none bg-transparent border-0 outline-0 text-slate-500 text-sm"
                />
              </div> */}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCart(!showCart)}
                className="text-2xl text-white relative flex justify-center items-center"
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
