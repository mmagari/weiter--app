import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './NavBar';
import styles from './Header.module.scss';


const Header = () => {
  return (
    <Navbar className={styles.navbarContainer } bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/" className={styles.logo} >Waiter.app</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className={styles.navbar}>
        <NavBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;