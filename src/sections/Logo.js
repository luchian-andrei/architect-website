import React from "react";

const Logo = () => {
  return (
    <section id="home" className="relative ">
      <p className="absolute top-1/2 right-1/2 flex justify-center items-center text-5xl translate-x-1/2 ">
        <span className=" bg-black  px-3 py-2  font-bold text-white opacity-65 ">
          BR
        </span>
        <span className="hidden sm:flex  text-white tracking-widest ">
          Architects
        </span>
      </p>
      <img src="./images/glassBuilding.png" alt="glass" />
    </section>
  );
};

export default Logo;
