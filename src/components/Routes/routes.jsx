import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home'; // Adjust the path as necessary
import AboutUs from '../pages/About/about'; // Adjust the path as necessary
import Contact from '../pages/Contact/contact'; // Adjust the path as necessary
import Products from '../pages/Product/product'; // Adjust the path as necessary
import Services from '../pages/Services/services';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Products />} />
    <Route path="/services" element={<Services/>}/>
    </Routes>
);

export default AppRoutes;
