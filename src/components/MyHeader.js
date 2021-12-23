import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
const MyHeader = () => {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 min-height-45"
            src={`${process.env.PUBLIC_URL}/assets/img/slide1.png`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-height-45"
            src={`${process.env.PUBLIC_URL}/assets/img/slide2.png`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-height-45"
            src={`${process.env.PUBLIC_URL}/assets/img/slide2.png`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid className="min-height-20 bg-primary"></Container>
      <Container fluid className="min-height-20"></Container>
      <Container fluid className="bg-primary text-light pt-3 pb-2">
        <h2 className="text-center">Nuestros Servicios</h2>
      </Container>

      <Carousel indicators={false}>
        <Carousel.Item className="min-height-45 bg-secondary">
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="min-height-45 bg-secondary">
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="min-height-45 bg-secondary">
          <h3>Hola</h3>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Container fluid className="min-height-45 bg-secondary"></Container> */}
      <Container fluid className="bg-primary text-light pt-3 pb-2">
        <h6 className="text-center">Elegí los que se adecuen y personaliza la app</h6>
      </Container>
    </>
  );
};

export default MyHeader;
