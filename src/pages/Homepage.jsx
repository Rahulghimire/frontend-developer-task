import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Breeds from "./Breeds";
import Promotion from "../components/Promotion";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Breeds />
      <Promotion />
      <Blog />
      <Footer />
    </>
  );
};

export default Homepage;
