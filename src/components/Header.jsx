// Header.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Kodigo Music</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile-form">Ingresar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
