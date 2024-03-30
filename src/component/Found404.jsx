import React from "react";

const Found404 = () => {
  return (
    <div className="mt-[15rem] flex flex-col justify-center items-center">
      <p className="text-2xl font-bold">Page Not Found</p>
      <p className="text-md">
        Go back to{" "}
        <a href={"/"} className="text-xl text-blue-700 font-bold">
          home page
        </a>
      </p>
    </div>
  );
};

export default Found404;
