import React from 'react';
import slide1 from '../../assets/PHARMA.png'; // Ensure you have an image at this path or update the path accordingly

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <img
        className="d-block w-100 slider-img"
        src={slide1}
        alt="Banner"
      />
    </div>
  );
};

export default ImageSlider;
