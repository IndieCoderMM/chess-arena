import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { FaChessPawn } from 'react-icons/fa';

const Toastr = ({ message, delay = 3000 }) => {
  const [show, setShow] = useState(true);
  return (
    <ToastContainer position="top-center" className="pt-2">
      <Toast onClose={() => setShow(false)} show={show} delay={delay} autohide>
        <Toast.Header style={{ color: 'var(--bs-green)', fontSize: '1.1em' }}>
          <FaChessPawn />
          <strong className="me-auto">Chess Arena</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toastr;
