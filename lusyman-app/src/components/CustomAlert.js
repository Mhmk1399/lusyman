import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const CustomAlert = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton >
        <Modal.Title >ممنون از اعتماد  و انرژی شما</Modal.Title>
      </Modal.Header>
      <Modal.Body dir='rtl'>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          فهمیدم
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomAlert;
