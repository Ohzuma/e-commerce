import React from "react";
import { FaStar } from "react-icons/fa";
import Virtual from "../../asset/img/virtual.png";
const Home = () => {
  return (
    <div className="bg-black pt-16 pb-24 px-5 lg:px-24 md:px-16 relative  w-full  mt-[40px]  h-[110vh]  md:h-[100vh]">
      <div className="flex items-center">
        <div className="flex flex-col items-start gap-4 lg:mt-[4rem]">
          <h1
            className="text-[1.5rem] sm:text-[2.5rem] xs:text-[1.5rem] 
           md:text-[3rem]  lg:text-[3.1rem] 2xxl:text-[3.5rem]
          leading-snug  uppercase flex flex-col font-bold text-white break-after-page"
          >
            <span>Shop Computer </span>
            <span> & Accessories</span>
          </h1>
          <p className="text-md text-white max-w-[400px] md:max-w-[450px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            modi consequatur, amet consectetur adipisicing elite
          </p>
          <div>
            <button className="outline-none font-bold z-[999]  border-0 bg-red-900 text-white  py-4 px-2 w-[140px] hover:bg-red-900/80 hover:transition transition  h-[45px] flex justify-center items-center text-[1rem] rounded-md">
              View Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 absolute top-[-100px]  right-0 place-content-end  mr-[-150px] md:mr-[0]">
          <div
            className=" bg-white py-5 px-5 flex flex-col gap-3 shadow-2xl md:h-[200px] place-self-end 
          mr-[-130px] sm:mr-[-125px] xs:mr-[-123px] h-[250px]
           md:mt-0 mt-[30rem] z-10"
          >
            <h1 className=" text-2xl font-bold text-black/90">
              <span>10l Mosdot Black Headphones</span>
            </h1>
            <p className="flex gap-2">
              <span className="flex text-yellow-600 text-lg">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <FaStar />
              </span>
              <span>4371 reviews</span>
            </p>
            <p className="flex gap-2 font-bold text-lg">
              <span>$2500</span>
              <span className="line-through">$7500</span>
            </p>
            <button className="outline-none font-bold  border-0 bg-red-900 text-white  py-4 px-2 w-[140px] hover:bg-red-900/80 hover:transition transition  h-[45px] flex justify-center items-center text-[1rem] rounded-md">
              Shop Now
            </button>
          </div>
          <img
            src={Virtual}
            alt="Virual game glass"
            className="  h-[500px]  w-[500px] md:w-[500px] md:h-[600px] lg:mt-[50px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
