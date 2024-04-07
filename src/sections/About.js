import React from "react";
import ArchitectCard from "../components/ArchitectCard";

const About = () => {
  return (
    <section id="about" className="p-8 my-10">
      <h2 className="text-3xl border-b-2 border-gray-200 py-4">About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <section
        id="architect-cards"
        className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 p-6"
      >
        <ArchitectCard
          imageSrc="./images/johnDoe.png"
          name="John Doe"
          position="CEO & Founder"
        />
        <ArchitectCard
          imageSrc="./images/janeDoe.png"
          name="Jane Doe"
          position="Architect"
        />{" "}
        <ArchitectCard
          imageSrc="./images/mikeRoss.png"
          name="Mike Ross"
          position="Architect"
        />{" "}
        <ArchitectCard
          imageSrc="./images/danStar.png"
          name="Dan Star"
          position="Architect"
        />
      </section>
    </section>
  );
};

export default About;
