import React from 'react';
import { Carousel } from 'react-bootstrap';

function MyHeader() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <div className="position-relative min-height-45 bg-dark">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h2 className="text-light fs-1 text-center">
              Gestionar tu negocio
            </h2>
            <h3 className="text-light fs-2 text-center bg-primary">
              nunca fue tan eficiente
            </h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="position-relative min-height-45 bg-secondary">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h2 className="text-light fs-1 text-center">Controlar el stock</h2>
            <h3 className="text-light fs-2 text-center bg-primary">
              nunca fue tan fácil
            </h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="position-relative min-height-45 bg-success">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h2 className="text-light fs-1 text-center">
              Revisar tus ingresos
            </h2>
            <h3 className="text-light fs-2 text-center bg-primary">
              nunca fue tan rápido
            </h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyHeader;
