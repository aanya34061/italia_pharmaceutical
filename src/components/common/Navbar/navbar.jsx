// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import logo from '../../assets/onlysign.png'; // adjust path

// const PharmaNavbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Navbar
//       expand="lg"
//       className={`pharma-navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'} fixed-top`}
//     >
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand className="pharma-logo">
//           <NavLink to="/">
//             <img src={logo} alt="Company Logo" className="logo-img" />
//           </NavLink>
//         </Navbar.Brand>

//         {/* Toggle */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Nav Links */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto pharma-nav">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/About">
//               About
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/products">
//               Products
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/services">
//               Services
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/therapeutic">
//               Theraputic segment
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/rnd">
//               Research & Development
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/capacity">
//               Capacity 
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/contact">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default PharmaNavbar;
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/onlysign.png'; // adjust path

const PharmaNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Navbar scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        expanded
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  return (
    <Navbar
      expand="lg"
      ref={navbarRef}
      expanded={expanded}
      onToggle={(value) => setExpanded(value)}
      className={`pharma-navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'} fixed-top`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="pharma-logo">
          <NavLink to="/" onClick={() => setExpanded(false)}>
            <img src={logo} alt="Company Logo" className="logo-img" />
          </NavLink>
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pharma-nav">
            <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" onClick={() => setExpanded(false)}>
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/therapeutic" onClick={() => setExpanded(false)}>
              Therapeutic Segment
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rnd" onClick={() => setExpanded(false)}>
              Research & Development
            </Nav.Link>
            <Nav.Link as={NavLink} to="/capacity" onClick={() => setExpanded(false)}>
              Capacity
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PharmaNavbar;
