import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/routes';
import Home from './components/pages/Home/home';
import Navbar from './components/common/Navbar/navbar';
import Footer from './components/common/Footer/footer';
import Scroll from './components/Scrollontop/scrollontop';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
    return (
        <div>
            <Scroll/>
            <Routes/>
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default App;
