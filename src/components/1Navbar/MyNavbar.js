import React from 'react';
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-5" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img
                className="logo-size"
                src={`${process.env.PUBLIC_URL}/assets/img/logoHome.png`}
                alt="Third slide"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <img
            className="logo-size"
            src={`${process.env.PUBLIC_URL}/assets/img/logodintico.png`}
            alt="Third slide"
          />
        </Navbar.Brand>
        <Button variant="outline-light" className="fs-6">
          <small>INGRESAR</small>
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
