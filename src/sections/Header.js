import React from "react";

const Header = () => {
  return (
    <header className="font-segoe font fixed bg-white z-10 flex justify-between w-full p-2 shadow-lg text-xl">
      <section id="logo" className="mx-4">
        <p className="tracking-[4px] hover:bg-stone-300 p-2">
          <a href="#home">
            <span className="font-bold font-sans">BR</span> Architects
          </a>
        </p>
      </section>
      <section
        id="buttons"
        className="hidden sm:flex  justify-center items-center gap-8 mx-8 tracking-widest"
      >
        <span className="hover:bg-stone-300 p-2">
          <a href="#projects">Projects</a>
        </span>
        <span className="hover:bg-stone-300 p-2">
          <a href="#about"> About</a>
        </span>
        <span className="hover:bg-stone-300 p-2">
          <a href="#contact">Contact</a>
        </span>
      </section>
    </header>
  );
};

export default Header;
