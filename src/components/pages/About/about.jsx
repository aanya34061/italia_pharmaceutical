import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutslider from "../../assets/ABOUTSLIDER.png";
import about1 from "../../assets/slider1 2.png"; 
import about2 from "../../assets/slider5.png"; 
import about3 from "../../assets/slider6.png"; 
import lab from "../../assets/slder3.png"; 
import medicine from "../../assets/Nutraceuticals.png"; 
import research from "../../assets/herbal.png"; 

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <div className="slider-container">
            <img
              className="d-block w-100 slider-img"
              src={aboutslider}
              alt="Banner"
            />
          </div>
      {/* Hero Section */}
      <section className="company-intro py-5">
        <div className="container text-center">
          <h1 className="intro-heading mb-3" data-aos="fade-up">
            About Italia Pharmaceuticals Pvt. Ltd.
          </h1>
          <p className="lead text-justify" data-aos="fade-up" data-aos-delay="200">
            At <strong>Italia Pharmaceuticals</strong>, we are dedicated to improving 
            global healthcare through innovation, quality, and trust. With decades 
            of expertise, we specialize in manufacturing and delivering world-class 
            pharmaceutical solutions across multiple therapeutic areas.
          </p>
        </div>
      </section>

      {/* Image Row */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <img src={about1} alt="Facility" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <img src={about2} alt="Team" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <img src={about3} alt="Research" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="services-heading text-center mb-5" data-aos="fade-up">
            Our Mission & Vision
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="service-card p-4 rounded shadow-sm h-100">
                <h4 className="mb-3 text-easternblue">Mission</h4>
                <p className="text-justify">
                  To enhance healthcare accessibility by providing affordable, 
                  safe, and effective medicines that meet the highest international 
                  quality standards.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="service-card p-4 rounded shadow-sm h-100">
                <h4 className="mb-3 text-easternblue">Vision</h4>
                <p className="text-justify">
                  To be a trusted global pharmaceutical leader, driven by 
                  innovation, research, and a commitment to patient well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="popular-products py-5">
        <div className="container">
          <h2 className="popular-heading text-center mb-5" data-aos="fade-up">
            Our Core Strengths
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="product-card rounded shadow-sm h-100">
                <img src={lab} alt="Quality Lab" className="product-img" />
                <h5>Quality Assurance</h5>
                <p className="mt-2 text-justify">
                  World-class manufacturing facilities with strict compliance 
                  to GMP and WHO guidelines.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card rounded shadow-sm h-100">
                <img src={medicine} alt="Medicine" className="product-img" />
                <h5>Diverse Portfolio</h5>
                <p className="mt-2 text-justify">
                  A wide range of pharmaceutical products across multiple 
                  therapeutic categories to meet healthcare needs globally.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="product-card rounded shadow-sm h-100">
                <img src={research} alt="Research" className="product-img" />
                <h5>Research & Innovation</h5>
                <p className="mt-2 text-justify">
                  Continuous R&D initiatives that drive innovation in drug 
                  development and healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="text-center py-5 bg-light">
        <div className="container" data-aos="zoom-in">
          <h3 className="mb-3">Partner With Us</h3>
          <p className="mb-4 text-center text-justify">
            Join hands with Italia Pharmaceuticals Pvt. Ltd. as we continue 
            our journey to transform healthcare with passion, responsibility, 
            and innovation.
          </p>
          <button className="btn btn-easternblue px-4 py-2 rounded-pill">
            Contact Us
          </button>
        </div>
      </section> */}
      
    </div>
  );
};

export default About;
