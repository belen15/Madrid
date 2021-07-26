import React, { Fragment } from 'react';
import './header.css'
import Logo from './logo-2.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <div className="logo">
        <img src={Logo} width="100" />
      </div>
      <Navbar className="navbar" expand="md">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio" className="nav-item">Inicio</Nav.Link>
            <Nav.Link href="#productos" className="nav-item">Productos</Nav.Link>
            <Nav.Link href="#contacto" className="nav-item">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
    </header>
  )
}

export default Header;