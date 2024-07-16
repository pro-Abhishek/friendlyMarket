import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./contaxt/ProductContext";
const About = () => {
  const data = "Smart Mart";
  const msg =
    "We're delighted to have you here! At [Your E-commerce Website], we're committed to bringing you an exceptional shopping experience. Explore our wide range of products and discover something special just for you. Whether you're browsing or buying, we're here to make your journey enjoyable and hassle-free. Thank you for choosing us, and happy shopping!";
  return (
    <>
      <h1></h1>
      <HeroSection dataname={data} msg={msg}></HeroSection>
    </>
  );
};

export default About;
