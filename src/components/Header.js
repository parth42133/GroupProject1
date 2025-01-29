// Done by Nikita Vyas

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  const headerBtns = [
    { link: "#home", text: "Home" },
    { link: "#courses", text: "Courses" },
    { link: "#events", text: "Events" },
    { link: "#contact", text: "Contact" },
  ];

  const handleClick = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <img src={require("../images/mainlogo.png")} alt="logo" />
        <Navbar.Brand href="#home" className="brand-text">
          EduCenter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {headerBtns.map((headerBtn) => (
              <Nav.Link 
                href={headerBtn.link} 
                key={headerBtn.link} 
                className="header-link"
                onClick={(e) => handleClick(e, headerBtn.link)}
              >
                {headerBtn.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;