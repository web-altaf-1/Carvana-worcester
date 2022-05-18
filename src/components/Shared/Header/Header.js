import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);
  const handleSignOut = () => {

    signOut(auth);
  }

  return (
    <Navbar className='navbar-style' sticky='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand eventKey={1} as={Link} to="/"><h3>Maya Warehouse System</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          
          <Nav>
            {
              user ? <Nav.Link className='text-white ' as={Link} eventKey={4} to="/inventory">Manage Items</Nav.Link> :
                <></>
            }
          </Nav>
          <Nav>
            {
              user ? <Nav.Link className='text-white ' as={Link} eventKey={4} to="/addItems">Add Items</Nav.Link> :
                <></>
            }
          </Nav>
          <Nav>
            {
              user ? <Nav.Link className='text-white ' as={Link} eventKey={4} to="/myItems">My Items</Nav.Link> :
                <></>
            }
          </Nav>

          <Nav>

            {
              user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button> : <Nav.Link className='text-white ' eventKey={6} as={Link} to="login">
                Login
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;