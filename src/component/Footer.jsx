import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaLandmark,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-[5rem]">
      <div className=" relative bottom-0 bg-white w-full py-14 px-7 flex flex-col gap-12 sm:gap-4 justify-center items-center">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  place-content-center justify-items-start md:justify-items-center">
          <div>
            <a
              href={"/"}
              className="text-pink-800 mr-2 font-extrabold text-xl sm:text-2xl italic"
            >
              MeShop
            </a>
            <p className="text-[1rem] text-slate-800 break-keep ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              rerum veritatis laboriosam iure cumque laudantium temporibus rem
              impedit perferendis culpa?
            </p>
            <div className="flex flex-row">
              <span className="flex justify-center items-center bg-slate-200 text-slate-800 h-5 w-5 rounded-full ">
                <FaFacebook />
              </span>
              <span className="flex justify-center items-center bg-slate-200 text-slate-800 h-5 w-5 rounded-full">
                <FaGithub />
              </span>
              <span className="flex justify-center items-center  bg-slate-200 text-slate-800 h-5 w-5 rounded-full">
                <FaTwitter />
              </span>
            </div>
          </div>

          <div>
            <h1>Company</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Fashion</a>
              </li>
              <li>
                <a href="/">Computers</a>
              </li>
              <li>
                <a href="/">Shoes</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Support </h1>
            <ul>
              <li>
                <a href="/">Support Center</a>
              </li>
              <li>
                <a href="/">24/H Service</a>
              </li>
              <li>
                <a href="/">Quick Chat</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Contact </h1>
            <ul>
              <li className="flex flex-row  items-center gap-3">
                <span>
                  <FaEnvelope />
                </span>
                <span>Ozumanology@gmail.com</span>
              </li>
              <li className="flex flex-row  items-center gap-3">
                <span>
                  <FaWhatsapp />
                </span>
                +234 8163686235<span></span>
              </li>
              <li className="flex flex-row  items-center gap-3">
                <span>
                  <FaLandmark />
                </span>
                <span>Cross Roundabout Gombe, Gombe State</span>
              </li>
              <li className="flex flex-row  items-center gap-3">
                <span>
                  <FaPhone />
                </span>
                +234 8163686235<span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
