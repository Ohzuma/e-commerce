// import React from "react";
// import Logo from "../../asset/img/logo.png";
// import {
//   FaSearch,
//   FaShopify,
//   FaAmazonPay,
//   FaCcAmazonPay,
// } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-white   fixed w-full z-20 top-0 start-0  shadow-lg  ">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-7">
//         <div className="flex flex-wrap items-center justify-center gap-28 ">
//           <a href="/" className=" ">
//             <img src={Logo} className="h-[70px] " alt=" Logo" />
//           </a>

//           <ul className="flex gap-6 flex-col justify-center items-center md:flex-row">
//             <li className="text-lg hover:text-slate-600 transition-all">
//               <a href="/">All</a>
//             </li>
//             <li className="text-lg hover:text-slate-600 transition-all">
//               <a href="/">Today's Deals</a>
//             </li>
//             <li className="text-lg hover:text-slate-600 transition-all">
//               <a href="/">Gift Cares</a>
//             </li>
//             <li className="text-lg hover:text-slate-600 transition-all">
//               <a href="/">Registry and Gifting</a>
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-4 items-center justify-center flex-wrap">
//           <div className="flex gap-4 items-center justify-center flex-wrap border px-2 py-2 rounded">
//             <FaSearch className="text-slate-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="focus:outline-none bg-transparent border-0 outline-0 text-slate-500 text-sm"
//             />
//           </div>
//           <button className="border-0 outline-none text-2xl">
//             <FaShopify />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import Logo from "../../asset/img/logo.png";
import { FaSearch, FaShopify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 shadow-lg">
      <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img src={Logo} className="h-12 md:h-16" alt="Logo" />
            </a>
            <ul className="hidden md:flex gap-6 ml-8 text-lg">
              <li className="hover:text-slate-600 transition-all">
                <a href="/">All</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Today's Deals</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Gift Cares</a>
              </li>
              <li className="hover:text-slate-600 transition-all">
                <a href="/">Registry and Gifting</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-4 border px-2 py-2 rounded">
              <FaSearch className="text-slate-500" />
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none bg-transparent border-0 outline-0 text-slate-500 text-sm"
              />
            </div>
            <button className="text-2xl">
              <FaShopify />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
