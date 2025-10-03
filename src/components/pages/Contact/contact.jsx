import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../../assets/contactus.png"; // ✅ renamed import

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Banner Image */}
      <div className="slider-container">
        <img
          className="d-block w-100 slider-img"
          src={contactImg} // ✅ use the renamed variable
          alt="Contact Banner"
        />
      </div>

      {/* Contact Section */}
<section className="d-flex align-items-center justify-content-center py-5 bg-white">
  <div className="container" data-aos="fade-up" data-aos-duration="1000">
    
    {/* Heading */}
    <h3 
      className="mb-3 fw-bold text-easternblue text-center" 
      data-aos="zoom-in" 
      data-aos-delay="200"
    >
      Reach Out To Us
    </h3>

    <p 
      className="mb-5 text-center text-justify mx-auto" 
      style={{ maxWidth: "700px" }} 
      data-aos="fade-up" 
      data-aos-delay="400"
    >
      Have questions or want to collaborate? We’d love to hear from you.
      Get in touch with <strong>Italia Pharmaceuticals Pvt. Ltd.</strong> today.
    </p>

    {/* Info Cards */}
    <div className="row justify-content-center mb-5">
      <div className="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-delay="200">
        <div className="card contact-card h-100 p-4 shadow-sm border-0 text-center">
          <h5 className="mb-2">📍 Address</h5>
          <p className="mb-0">
            Italia Pharmaceuticals Pvt. Ltd.<br />
            Office 57-58-A, Sector E, Industrial Area, Sanwer Road,<br />
            Indore 452015, Madhya Pradesh, India
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-delay="400">
        <div className="card contact-card h-100 p-4 shadow-sm border-0 text-center">
          <h5 className="mb-2">📞 Call Us</h5>
          <p className="mb-0">+91 9669441222</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-delay="600">
        <div className="card contact-card h-100 p-4 shadow-sm border-0 text-center">
          <h5 className="mb-2">📧 Email</h5>
          <p className="mb-0">info@italiapharmaceuticals.com</p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="row justify-content-center">
      <div className="col-lg-8" data-aos="zoom-in" data-aos-delay="800">
        <div className="card shadow-lg border-0 p-4 contact-form">
          <h4 className="mb-4 fw-bold text-easternblue text-center">Send Us a Message</h4>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  rows="5"
                  className="form-control form-control-lg rounded-4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn btn-easternblue px-5 py-2 rounded-pill shadow-sm">
                  Send Message ✉️
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
};

export default Contact;
