import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import MyProjects from "../MyProjects/MyProjects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
