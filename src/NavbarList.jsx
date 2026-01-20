import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const NavbarList = () => {
  return (
    <div>
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
<Navbar.Brand as={Link} to="/">
    TaskMaster
</Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav"/>
<Navbar.Collapse id= "basic-navbar-nav">
    <Nav className="ms-auto">
<Nav.Link as={Link} to="/"> Home</Nav.Link>
<Nav.Link as={Link} to="about"> About us</Nav.Link>
<Nav.Link as={Link} to="services"> Services</Nav.Link>
<Nav.Link as={Link} to="contact"> Contact us</Nav.Link>    
    </Nav>
</Navbar.Collapse>
    </Container>
  </Navbar>

 

    </div>
  )
}
