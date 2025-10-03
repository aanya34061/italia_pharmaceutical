import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home'; // Adjust the path as necessary
import AboutUs from '../pages/About/about'; // Adjust the path as necessary
import Contact from '../pages/Contact/contact'; // Adjust the path as necessary
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
);

export default AppRoutes;
