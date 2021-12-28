import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';

import WhatIs from '../2Header/WhatIs';

function MyMain() {
  return (
    <>
      <WhatIs />
      <div className="position-relative min-height-20">
        <div className="position-absolute top-50 start-50 translate-middle">
          <Button
            variant="primary"
            className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size"
          >
            <FaBell className="rounded-buttons-font-size" />
          </Button>
          <Button
            variant="primary"
            className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size"
          >
            <GoGear className="rounded-buttons-font-size" />
          </Button>
          <Button
            variant="primary"
            className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size"
          >
            <BsGraphUp className="rounded-buttons-font-size" />
          </Button>
        </div>
      </div>

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
