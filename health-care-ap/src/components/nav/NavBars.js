import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/logo.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NavBars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Faq's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Error 404</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Login /Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Service Detail
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Blog Detail
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link href="#link">
            <FontAwesomeIcon icon={faPhone} className="phone" />
              (+01) 999 888 7777
            </Nav.Link>
            <Nav.Link href="#link">
              <button>
                contact us <span> > </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
