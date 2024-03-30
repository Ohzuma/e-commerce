import { useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Header = () => {
  let header = document.getElementById("nav_header");
  let nav = document.getElementById("nav");
  const navFun = useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 80 && header != null) {
        // if (nav.scrollY === 127) {
        header.classList.add("fixed");
        header.classList.add("top-0");
        header.classList.add("shadow-lg");
        // }
        // headerRef.current.remove();
        console.log(nav.scrollY);
      } else {
        header.classList.remove("fixed");
        header.classList.remove("top-0");
        header.classList.add("transition-all");
      }
      // console.log(window.scrollY);
    };
  });
  document.addEventListener("DOMContentLoaded", () => {
    navFun();
  });
  return (
    <header
      className="bg-pink-800 z-20 hidden md:flex py-2 px-4 md:px-12 w-full transition delay-150 "
      id="header"
    >
      <article className="flex justify-between w-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-white">
              <FaPhone />
            </span>
            <span className="text-md font-medium text-white">
              +234 8163686235
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-white">
              <FaEnvelope />
            </span>
            <span className="text-md font-medium text-white">
              ozumanology@gmail.com
            </span>
          </div>
        </div>

        <aside className="flex flex-row gap-2">
          <a href="/" className="text-md font-medium text-white">
            FAQ
          </a>
          <a href="/" className="text-md font-medium text-white">
            Need Help!
          </a>
          {/* <span>USD</span> */}
        </aside>
      </article>
    </header>
  );
};

export default Header;
