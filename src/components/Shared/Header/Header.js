import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='navbar-style' sticky='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand eventKey={1} as={Link} to="/"><h3>Maya Warehouse System</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
          <Nav.Link className='text-white ' as={Link} eventKey={2} to="/">Home</Nav.Link>
            <Nav.Link className='text-white ' as={Link} eventKey={3} to="services">Services</Nav.Link>
            <Nav.Link className='text-white ' as={Link} eventKey={4} to="/inventory">Inventory</Nav.Link>
            <Nav.Link className='text-white ' as={Link} eventKey={5} to="about">About Us</Nav.Link>
            <Nav.Link className='text-white ' eventKey={6} as={Link} to="login">
                  Login
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;