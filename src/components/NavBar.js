import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../imgs/shoe-logo.png';

const classes = {
      'imgStyle' : {
        background: '#fff',
        borderRadius: '100%',
      },
      'brand' : {
        lineHeight: '2.5',
        letterSpacing: '5px',
        fontSize: 'x-large'
      },
      'nav' : {
        fontSize: 'larger'
      } 
    }

const myNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to='/'>
      <Navbar.Brand style={classes.brand}>
        <img
            alt=""
            src={logo}
            width="60"
            height="60"
            style={classes.imgStyle}
            className="d-inline-block align-top"
          />{' '}
          Sheo Shop
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav style={classes.nav} className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/product">Product</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
  );
}

export default myNavbar;
