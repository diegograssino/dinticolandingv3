import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import RoundedButtons from '../2Header/RoundedButtons';

import WhatIs from '../2Header/WhatIs';

function MyMain() {
  return (
    <>
      <WhatIs />
      <RoundedButtons />
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Container fluid className="min-height-45 bg-secondary"></Container> */}
      <Container fluid className="bg-primary text-light pt-3 pb-2">
        <h6 className="text-center">
          Elegí los que se adecuen y personaliza la app
        </h6>
      </Container>
    </>
  );
}

export default MyMain;
