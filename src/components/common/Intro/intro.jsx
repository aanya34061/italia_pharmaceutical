import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import companyImage from '../../assets/logo.png'; // change to your image path


const CompanyIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="company-intro py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={companyImage}
              alt="Italia Pharmaceuticals"
              className="img-fluid "
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3 intro-heading">
              Greetings from Italia Pharmaceuticals Pvt. Ltd. (Since 1996)
            </h2>
            <p className="text-justify">
              At Italia Pharmaceuticals, we pride ourselves on delivering high-quality <strong>Nutraceuticals, Herbals, and Cosmetics</strong> through our Schedule M compliant manufacturing facility. With over two decades of expertise, our products meet global quality standards and are trusted by leading brands worldwide.
            </p>
            <p className="text-justify">
              We specialize in multiple dosage forms: <strong>Tablets, Capsules, Oral Liquids, Semi-Solids, Powders, Oils, Creams, Lotions</strong> and more — covering therapeutic segments like <strong>Critical Care, Cardiac, Neurocare, Orthopedics, Gynaecology, Nephrology, Pediatrics, and Cosmetics & Skincare</strong>.
            </p>
            <p>
              Our prestigious clientele includes <strong>Biological E. Ltd., Cadila Pharmaceuticals, Makers Laboratories (Ipca Group), Pharmeasy</strong> and many more.
            </p>
            <p className="mt-3 text-justify">
              With 8 GMP-compliant sections and a prime location at the heart of the city, Italia Pharmaceuticals is your one-stop solution for world-class healthcare and personal care products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
