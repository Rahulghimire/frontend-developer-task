import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Breeds from "./Breeds";
const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Breeds />
    </>
  );
};

export default Homepage;
