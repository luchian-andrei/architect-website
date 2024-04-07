import React from "react";

const ArchitectCard = ({ imageSrc, name, position }) => {
  return (
    <section id="architect-card" className="py-4">
      <img src={imageSrc} alt="name" className="grayscale-75" />
      <p className="text-2xl py-3">{name}</p>
      <p className="text-xl text-gray-500 py-2">{position} </p>
      <p className="py-2 text-lg">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button className="bg-stone-200 hover:bg-stone-300 w-full p-2">
        Contact
      </button>
    </section>
  );
};

export default ArchitectCard;
