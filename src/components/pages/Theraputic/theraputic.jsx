import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images for each therapeutic segment
import therapeutic from "../../assets/therapeutic.png";
import criticalCareImg from "../../assets/Critical-Care.png";
import cardiacImg from "../../assets/cardiac.png";
import neuroImg from "../../assets/neurocare.png";
import orthopedicImg from "../../assets/ortho.png";
import gynaeImg from "../../assets/gyane.png";
import nephrologyImg from "../../assets/nephrology.png";
import entImg from "../../assets/ent.png";
import pediatricsImg from "../../assets/pediatrics.png";
import generalHealthImg from "../../assets/general-health.png";
import cosmeticsImg from "../../assets/cosmetic.png";
import sportsImg from "../../assets/sports.png";

const therapeuticSegments = [
  { name: "Critical Care", img: criticalCareImg },
  { name: "Cardiac", img: cardiacImg },
  { name: "Neurocare", img: neuroImg },
  { name: "Orthopedic", img: orthopedicImg },
  { name: "Gynaecology", img: gynaeImg },
  { name: "Nephrology", img: nephrologyImg },
  { name: "ENT", img: entImg },
  { name: "Pediatrics", img: pediatricsImg },
  { name: "General Health", img: generalHealthImg },
  { name: "Cosmetics & Skincare", img: cosmeticsImg },
  { name: "Sports & Nutrition", img: sportsImg }
];

const TherapeuticSegments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <div className="therapeutic-page">
      <section className="services-section">
            {/* ---------- Top Banner ---------- */}
            <div className="position-relative">
              <img
                src={therapeutic}
                alt="Banner"
                className="img-fluid w-100 slider-img"
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                {/* <h1 className="fw-bold display-5" data-aos="zoom-in" data-aos-duration="1000">
                 THERAPUTIC SEGMENT
                </h1> */}
              </div>
            </div>
      </section>
      <div className="container">
        <h1 className="services-heading text-center mb-5" data-aos="fade-up">
          Our Therapeutic Segments
        </h1>
        <p className="text-center mb-5 text-justify" data-aos="fade-up" data-aos-delay="200">
          At <strong>Italia Pharmaceuticals Pvt. Ltd.</strong>, we offer a wide range of products across various therapeutic categories to meet healthcare needs globally. Our formulations are suitable for Branded, Generics, OTC, and International markets.
        </p>

        <div className="row g-4">
          {therapeuticSegments.map((segment, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="product-card p-4 rounded shadow-sm h-100 text-center">
                <img
                  src={segment.img}
                  alt={segment.name}
                  className="product-img mb-3"
                />
                <h5 className="mb-3 text-easternblue">{segment.name}</h5>
                <p className="text-justify">
                  High-quality formulations designed to improve patient outcomes in {segment.name} therapy.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapeuticSegments;
