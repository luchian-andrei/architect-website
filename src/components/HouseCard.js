import React from "react";

const HouseCard = ({ imageSrc, title }) => {
  return (
    <section>
      <p className="bg-black text-white  relative top-9  p-2  w-3/6  text-center text-sm md:text-md ">
        {title}
      </p>
      <img src={imageSrc} alt={title} />
    </section>
  );
};

export default HouseCard;
