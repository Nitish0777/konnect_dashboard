import React, { useState } from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero/Hero";
import Social from "../../components/Social/Social";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Assistant from "../../components/Assistant/Assistant";
import GoogleTranslate from "../../components/GoogleTranslate";

const Home = () => {
  return (
    <div>
      <Navbar />
      <GoogleTranslate />
      <Hero />
      <About />
      <Contact />
      <Social />
      <Assistant />
      <Footer />
    </div>
  );
};
export default Home;
