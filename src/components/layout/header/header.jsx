import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div className="navlist">
      <Navbar expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand className="logo">
            <Link to="/">
              <img
                src="assets/images/logo.png"
                className="logo-image"
                alt="GameVault logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-collapse-custom">
            <Nav className="navbar-center">
              <Nav.Link as={Link} to="/" className="nav-link-text">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-text">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/category" className="nav-link-text">
                Library
              </Nav.Link>
              <Nav.Link as={Link} to="/community" className="nav-link-text">
                Community
              </Nav.Link>
              <Nav.Link as={Link} to="/support" className="nav-link-text">
                Support
              </Nav.Link>
            </Nav>

            <Nav className="navbar-right">
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/create">
                  Create Account
                </NavDropdown.Item>
                {userId && (
                  <NavDropdown.Item as={Link} to={`/login/profile/${userId}`}>
                    Profile
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
