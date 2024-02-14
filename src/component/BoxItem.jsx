import React from "react";

export const BoxItem = ({ name, img, desc }) => {
  return (
    <div className="bg-white shadow-lg py-3 px-5 flex flex-col justify-center hover:shadow-2xl hover:transition-all transition-all">
      <img
        src={img}
        alt={name}
        className="h-[200px] w-[300px] object-contain"
      />
      <h2 className="text-black/80 font-bold text-sm pt-4">{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export const Box2Item = ({ name, img, desc }) => {
  return (
    <div className="bg-[#f8f3f0] shadow-lg py-5 px-10 flex justify-between items-center flex-wrap md:col-span-2 h-[15rem] md:h-[10rem] overflow-y-clip">
      <div className="flex flex-col gap-3">
        <h2 className="text-black/80 font-bold text-lg">{name}</h2>
        <p className="text-sm font-medium max-w-[300px] leading-5">{desc}</p>
      </div>
      <img
        src={img}
        alt={name}
        className=" h-[5rem] md:h-[100%] object-contain"
      />
    </div>
  );
};
