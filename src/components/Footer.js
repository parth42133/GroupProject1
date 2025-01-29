// Done by Dhruvit Patel

import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Footer = () => {
  
    const footerBtns = [
      { link: "#home", text: "Home" },
      { link: "#courses", text: "Courses" },
      { link: "#events", text: "Events" },
      { link: "#contact", text: "Contact" },
      { link: "#about us", text: "About Us" }
    ];
    


  return (
    <footer className="py-2 mt-3 w-100 bg-dark d-flex flex-column">
      <Container>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {footerBtns.map((footerBtn) => (
            <Nav.Link
              href={footerBtn.link}
              key={footerBtn.link}
              style={{ color: "#fff" }}
              className="nav-item header-link nav-link px-2"
            >
              {footerBtn.text}
            </Nav.Link>
          ))}
        </ul>
        <p className="text-center  mt-auto">
          © 2024 Conestoga College, (Group 2)
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
