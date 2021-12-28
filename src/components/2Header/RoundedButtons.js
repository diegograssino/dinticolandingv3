import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';

function RoundedButtons() {
  return (
    <Container className="px-3">
      <Row>
        <Col xs={4}>
          <div className="position-relative min-height-20">
            <div className="position-absolute top-50 start-100 translate-middle">
              <Button
                variant="primary"
                className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size rounded-buttons-shadow"
              >
                <FaBell className="rounded-buttons-font-size" />
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="position-relative min-height-20">
            <div className="position-absolute top-50 start-50 translate-middle">
              <Button
                variant="primary"
                className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size rounded-buttons-shadow"
              >
                <GoGear className="rounded-buttons-font-size" />
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="position-relative min-height-20">
            <div className="position-absolute top-50 start-0 translate-middle">
              <Button
                variant="primary"
                className="fs-6 text-light rounded-circle mx-3 rounded-buttons-size rounded-buttons-shadow"
              >
                <BsGraphUp className="rounded-buttons-font-size" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RoundedButtons;
