import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function WhatIs() {
  return (
    <Container fluid className="min-height-20 bg-primary">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Container className="min-height-20" />
          </Col>
          <Col xs="12" md="6">
            <Container className="pt-4 pb-3">
              <h2 className="text-light bigger-h1">¿Qué es díntico?</h2>
              <p className="text-secondary fs-6 lh-1">
                Díntico es un sistema de gestión que te permite administrar y
                gestionar tu emprendimiento gastronómico desde dispositivos
                electrónicos.
              </p>
              <p className="text-secondary fs-6 lh-1">
                Trabaja con una aplicación web (Gestor) y una aplicación de
                escritorio (Punto de Venta). Funciona sin conexión, pero podrás
                controlarlo remotamente si tenés una.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WhatIs;
