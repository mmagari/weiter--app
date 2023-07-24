import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about">
        About
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact">
        Contact
      </Nav.Link>
    </Nav>
  );
};

export default NavBar;