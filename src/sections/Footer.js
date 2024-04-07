import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-32 bg-black text-white text-center flex justify-center items-center"
    >
      <p className="text-lg">
        Powered by
        <a
          href="https://github.com/luchian-andrei"
          className="mx-1 hover:text-blue-400 underline"
        >
          Undoo.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
