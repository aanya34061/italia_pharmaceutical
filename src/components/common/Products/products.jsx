import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import herbalImg from '../../assets/herbal.png';
import nutraImg from '../../assets/Nutraceuticals.png';
import cosmeticsImg from '../../assets/cosmetic.png';
import HerbalCosmetics from '../../assets/HerbalCosmetics.png';

const PopularProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="popular-products py-5">
      <div className="container text-center">
        <h2 className="popular-heading mb-4" data-aos="fade-up">
          Popular Products
        </h2>
        <p className="mb-5" data-aos="fade-up">
          Our most sought-after product categories
        </p>

        {/* Bootstrap Grid - 2 columns per row */}
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          <div className="col" data-aos="fade-right">
            <div className="product-card shadow-sm rounded h-100 p-4 d-flex flex-column justify-content-center" style={{ minHeight: "280px" }}>
              <img src={herbalImg} alt="Herbal" className="product-img mb-3" />
              <h5>Herbal Products</h5>
            </div>
          </div>

          <div className="col" data-aos="fade-up">
            <div className="product-card shadow-sm rounded h-100 p-4 d-flex flex-column justify-content-center" style={{ minHeight: "280px" }}>
              <img src={HerbalCosmetics} alt="Herbal Cosmetics" className="product-img mb-3" />
              <h5>Herbal Cosmetics</h5>
            </div>
          </div>

          <div className="col" data-aos="fade-left">
            <div className="product-card shadow-sm rounded h-100 p-4 d-flex flex-column justify-content-center" style={{ minHeight: "280px" }}>
              <img src={nutraImg} alt="Nutraceuticals" className="product-img mb-3" />
              <h5>Nutraceutical Products</h5>
            </div>
          </div>

          <div className="col" data-aos="fade-right">
            <div className="product-card shadow-sm rounded h-100 p-4 d-flex flex-column justify-content-center" style={{ minHeight: "280px" }}>
              <img src={cosmeticsImg} alt="Cosmetics" className="product-img mb-3" />
              <h5>Cosmetic Products</h5>
            </div>
          </div>
        </div>

        <Link
          to="/products"
          className="btn btn-easternblue btn-lg mt-4"
          data-aos="fade-up"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
