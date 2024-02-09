import React from "react";

const Banner = ({ title, img, desc, btn }) => {
  return (
    <div className="mt-[5rem] xs:h-auto lg:h-[400px]">
      <div className="grid grid-cols-1  lg:grid-cols-2 bg-slate-200 py-16 px-5 md:px-24 place-content-center justify-items-center place-items-center">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-[2rem] md:text-[3rem] font-[600] md:leading-[3.3rem]">
            {title}
          </h1>
          <p className="font-lg ">{desc}</p>
          <button className="outline-none font-bold  border-0 bg-red-900 text-white  py-4 px-2 w-[140px] hover:bg-red-900/80 hover:transition transition  h-[45px] flex justify-center items-center text-[1rem] rounded-md">
            {btn}
          </button>
        </div>
        <div className="hidden lg:block lg:h-[300px] ">
          <img src={img} alt="Beautify lady from amazon" className="h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
