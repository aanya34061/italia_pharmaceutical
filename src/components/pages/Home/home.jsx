import React from "react";
import Slider from "../../common/Slider/slider";
import Intro from "../../common/Intro/intro";
import ServicesSection from "../../common/Services/sevices";
import Products from "../../common/Products/products";
import Overview from "../../common/Overview/overview";
import Marquee from "../../common/marquee/marquee";

const Home = () => {
  return (
    <div>
      <Slider />
      <Intro />
      <ServicesSection />
      <Products />
      <Overview />
      <Marquee />
      
     
      {/* Additional home page content can go here */}
    </div>
  );
};

export default Home;