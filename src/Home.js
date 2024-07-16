import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = "Friendly Market";
  const msg =
    "Step into a world of endless possibilities. Whether you're here to explore, discover, or shop, we're thrilled to have you with us. Dive into our curated collection of products/categories, whereevery click brings you closer to something extraordinary. Enjoy a seamless shopping experience with us, and thank you for choosing us";
  return (
    <>
      <HeroSection dataname={data} msg={msg}></HeroSection>
      <FeatureProduct></FeatureProduct>
      <Services></Services>
      <Trusted></Trusted>
    </>
  );
};
export default Home;
