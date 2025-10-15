// import React, { useEffect } from "react";
import AOS from "aos";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import productbanner from "../../assets/ourproduct.png"
import { Container } from "react-bootstrap";


const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // For triggering the counter on scroll
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // only once
    threshold: 0.3, // starts when 30% visible
  });

  return (
    <section className="py-5 bg-white">
      
        {/* ---------- HEADER ---------- */}
        <div className="slider-container">
              <img
                className="d-block w-100 slider-img"
                src={productbanner}
                alt="Banner"
              />
            </div>
            <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-5" style={{ color: "var(--EasternBlue)" }}>
            Our Products
          </h2>
          <p className="text-muted fs-5 mt-3 mx-auto" style={{ maxWidth: "850px" }}>
            As we believe in science and research, we have tied up for many
            internationally acclaimed molecules from India, Europe, Japan, and the USA.
            We provide products backed by clinical studies and research insights — 
            ensuring innovation and trust.
          </p>
        </div>

        {/* ---------- OVERVIEW SECTION ---------- */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h4 className="fw-semibold fs-3" style={{ color: "var(--Jaffa)" }}>
              Quality and Reach
            </h4>
            <p className="mt-3 fs-5">
              Our products are suitable for <strong>Branded, Generics, OTC & International markets</strong>.
              We are committed to providing world-class quality products — 
              <strong>Made in India for The World.</strong>
            </p>
            <p className="fs-5">
              We specialize in diverse dosage forms ensuring stability, safety,
              and international standards.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <ul className="list-group shadow rounded-3 fs-6">
              <li className="list-group-item"><strong>Tablets:</strong> Film Coated, Uncoated, Sugar Coated, Chewable, Effervescent</li>
              <li className="list-group-item"><strong>Capsules:</strong> Hard Gelatin (Veg & Non-Veg)</li>
              <li className="list-group-item"><strong>Oral Liquids:</strong> Syrups, Drops, Suspensions</li>
              <li className="list-group-item"><strong>Gripe Water:</strong> Dedicated Line</li>
              <li className="list-group-item"><strong>Semi Liquids:</strong> Malt</li>
              <li className="list-group-item"><strong>Semi Solids:</strong> Chawanprash</li>
              <li className="list-group-item"><strong>Powders, Granules & Sachets</strong></li>
              <li className="list-group-item"><strong>External Preparations:</strong> Oils, Shampoos, Ointments, Creams, Lotions & Face Wash</li>
            </ul>
          </div>
        </div>

        {/* ---------- THERAPEUTIC SEGMENTS ---------- */}
        <div className="mt-5 text-center" data-aos="zoom-in">
          <h4 className="fw-bold fs-3 mb-4" style={{ color: "var(--EasternBlue)" }}>
            Therapeutic Segments
          </h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "Critical Care",
              "Cardiac",
              "Neurocare",
              "Orthopedic",
              "Gynaecology",
              "Nephrology",
              "ENT",
              "Pedia",
              "General Health",
              "Cosmetics & Skincare",
              "Sports & Nutrition",
            ].map((segment, i) => (
              <span
                key={i}
                className="badge rounded-pill px-4 py-3 fs-6"
                style={{
                  backgroundColor: "var(--Cinderella)",
                  color: "var(--EasternBlue)",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}
              >
                {segment}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- CLIENTS ---------- */}
        <div className="mt-5" data-aos="fade-up">
          <h4 className="fw-bold fs-3 text-center mb-4" style={{ color: "var(--Jaffa)" }}>
            Our Prestigious Clients
          </h4>
          <div className="row justify-content-center">
            {[
              "Biological E. Ltd.",
              "Cadila Pharmaceuticals Ltd.",
              "Makers Laboratories Ltd. (An Ipca Group Company)",
              "Nectar",
              "Pharmeasy",
              "Theon Pharmaceuticals Ltd.",
              "Themis Medicare Ltd.",
            ].map((client, i) => (
              <div key={i} className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="p-4 border rounded-4 shadow-sm text-center bg-light">
                  <h6 className="fw-semibold fs-5">{client}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- FACILITY ---------- */}
        <div className="mt-5" data-aos="fade-up">
          <h4 className="fw-bold fs-3" style={{ color: "var(--EasternBlue)" }}>
            Our Facility
          </h4>
          <p className="fs-5 mt-2">
            Italia Pharmaceuticals operates with <strong>8 GMP-compliant sections</strong>.
            Our facility, situated in the heart of the city, is easily accessible
            to both domestic and international clients.
          </p>

          <h5 className="mt-4 fw-semibold fs-4" style={{ color: "var(--Jaffa)" }}>
            Business Verticals
          </h5>
          <ul className="fs-5 mt-2">
            <li>
              Products offered on <strong>LL, P2P, Contract Manufacturing</strong> & Neutral Code basis.
            </li>
            <li>
              Complete <strong>FSSAI Compliances</strong> support for company and products.
            </li>
          </ul>
        </div>

        {/* ---------- COUNTUP SECTION ---------- */}
        <div className="mt-5 text-center" data-aos="zoom-in-up" ref={counterRef}>
          <h4 className="fw-bold fs-3 mb-4" style={{ color: "var(--EasternBlue)" }}>
            Annual Production Capacity
          </h4>
          <div className="row justify-content-center">
            {[
              { type: "Liquids", qty: 9, unit: "Million" },
              { type: "Tablets", qty: 300, unit: "Million" },
              { type: "Capsules", qty: 1, unit: "Million" },
              { type: "Ointments", qty: 10, unit: "Million" },
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-6 mb-4" data-aos="flip-up">
                <div className="p-4 border rounded-4 shadow-sm bg-light h-100">
                  <h2 className="fw-bold display-6" style={{ color: "var(--Jaffa)" }}>
                    {inView && (
                      <CountUp end={item.qty} duration={2.5} separator="," />
                    )}{" "}
                    <span className="fs-4">{item.unit}</span>
                  </h2>
                  <p className="mb-0 fs-5 fw-medium">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- END NOTE ---------- */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="lead fw-semibold fs-4" style={{ color: "var(--EasternBlue)" }}>
            We aim to be your one-stop pharmaceutical partner — delivering
            excellence, trust, and innovation globally.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Products;
