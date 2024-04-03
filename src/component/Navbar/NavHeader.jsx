import React from "react";
import { FaCartArrowDown, FaPhone, FaUserCircle } from "react-icons/fa";
import { LoadingContext } from "../Context";
const NavHeader = () => {
  const {
    error,
    loading,
    setLoading,
    setError,
    searchInput,
    headRef,
    handleSubmit,
  } = LoadingContext();

  return (
    <header
      ref={headRef}
      className="bg-white header  h-[60px] md:flex  md:px-12 w-full transition delay-150 py-4 px-3"
      id="nav_header"
    >
      <section className="flex justify-between items-center w-full">
        <div>
          {" "}
          <a
            href={"/"}
            className="text-pink-800 mr-2 font-extrabold text-xl sm:text-2xl italic"
          >
            MeShop
          </a>
        </div>
        <form className="w-full">
          <div className="w-full border bg-slate-100 max-w-[800px] m-auto flex justify-between items-center h-[40px] px-4  rounded-full gap-4">
            <input
              type="text"
              placeholder="Search and hit enter"
              onInput={searchInput}
              className="w-full px-4 bg-slate-100 focus:outline-none focus:border-none text-md text-black/80"
            />
            <button className=" hidden sm:flex justify-center items-center md:w-[10rem] max-w-[15rem] nav-btn text-sm">
              All Category
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2 sm:gap-5 w-fulld">
          <button
            type="button"
            onClick={handleSubmit}
            className="text-xl px-2 py-1 font-medium rounded  text-black relative flex justify-center items-center  "
          >
            {/* Sign In */}
            <FaUserCircle />
          </button>
          <a
            href="tel:+234 8163686235"
            className="text-xl text-black relative flex justify-center items-center rotate-[100deg]"
          >
            <FaPhone />
          </a>

          <button
            // onClick={() => setShowCart(!showCart)}
            className="text-xl text-black relative flex justify-center items-center"
          >
            <FaCartArrowDown />
            <span
              className="bg-red-700 absolute -top-3  -right-2 h-5 w-5
               text-sm text-white rounded-full flex justify-center items-center"
            >
              2
            </span>
          </button>
        </div>
      </section>
    </header>
  );
};

export default NavHeader;
