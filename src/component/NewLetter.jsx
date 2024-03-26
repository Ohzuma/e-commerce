import React from "react";
import GreenSneaker from "../asset/img/green_sneaker.png";
const NewLetter = () => {
  return (
    <main className="bg-black/90  md:h-[300px] flex justify-center items-center mt-[5rem] p-7 md:px-5 ">
      <div
        className="grid grid-cols-1 md:grid-cols-2 place-items-center 
      place-content-center justify-items-center "
      >
        <article className="flex flex-col gap-2">
          <span className="text-slate-400 text-sm ">Create you own design</span>
          <h1 className="flex flex-col gap-1 text-white text-4xl font-bold">
            <span>NIKE REACT PRESTO </span>
            <span>BY YOU</span>
          </h1>
          <p className="text-slate-300 text-[0.95rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            similique velit nesciunt autem, corrupti fuga.
          </p>
          <button
            type="button"
            className="bg-white text-black/90 max-w-[150px] h-[40px] text-[1rem] font-bold rounded-sm"
          >
            Create
          </button>
        </article>
        <div className="w-[300px]  md:w-[400px] md:h-[600px]  md:-mt-[7rem]">
          <img
            src={GreenSneaker}
            alt="Newsletter Sneaker"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default NewLetter;
