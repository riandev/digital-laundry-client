import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Digital Lundry
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={{ color: "#1cc7c1" }} className="mr-5" as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "#1cc7c1" }} className="mr-5" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link
            style={{ color: "#1cc7c1" }}
            className="mr-5"
            as={Link}
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link style={{ color: "#1cc7c1" }} className="mr-5" as={Link} to="/blogs">
            Blogs
          </Nav.Link>
          <Nav.Link style={{ color: "#1cc7c1" }} className="mr-5" as={Link} to="/contactus">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
