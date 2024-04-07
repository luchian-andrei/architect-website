import React from "react";
import HouseCard from "../components/HouseCard";

const Projects = () => {
  return (
    <section id="projects" className="p-8 my-10 ">
      <h2 className="text-3xl border-b-2 border-gray-200 py-4">Projects</h2>
      <section
        id="projects-cards"
        className="grid grid-col-1 grid-row-8 sm:grid-cols-2 sm:grid-row-4 gap-x-4  lg:grid-cols-4 lg:grid-rows-2"
      >
        <HouseCard title="Summer House" imageSrc="./images/summerHouse.png" />
        <HouseCard title="Brick House" imageSrc="./images/brickHouse.png" />
        <HouseCard title="Renovated" imageSrc="./images/renovated.png" />
        <HouseCard title="Barn House" imageSrc="./images/barnHouse.png" />
        <HouseCard title="Summer House" imageSrc="./images/brickHouse.png" />
        <HouseCard title="Brick House" imageSrc="./images/summerHouse.png" />
        <HouseCard title="Renovated" imageSrc="./images/barnHouse.png" />
        <HouseCard title="Barn House" imageSrc="./images/renovated.png" />
      </section>
    </section>
  );
};

export default Projects;
