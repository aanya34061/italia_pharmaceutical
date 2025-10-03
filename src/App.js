import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/routes';
import Home from './components/pages/Home/home';
import Navbar from './components/common/Navbar/navbar';
import Footer from './components/common/Footer/footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
    return (
        <div>
            <Routes/>
            <Navbar/>
            {/* <Home/> */}
            <Footer/>
        </div>
    );
}

export default App;
