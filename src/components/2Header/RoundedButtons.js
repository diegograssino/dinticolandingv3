import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { BsGraphUp } from 'react-icons/bs';

function RoundedButtons() {
  return (
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
  );
}

export default RoundedButtons;
