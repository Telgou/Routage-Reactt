// Components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/events" eventKey="events" className='active' >
            MyEvents
          </Nav.Link>

          <Nav.Link as={NavLink} to="/events" eventKey="events" >
            Events
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;