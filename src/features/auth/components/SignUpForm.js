import React, { useRef, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../../../contexts/AuthProvider';

const SignUpForm = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const mailRef = useRef();
  const passwordRef = useRef();
  const { signUp } = useAuth();

  const handleClose = () => setShow(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = mailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (name && email && password) {
      console.log(name, email, password);
      try {
        setError('');
        setLoading(true);
        await signUp(email, password);
      } catch (err) {
        console.log(err.message);
        console.log('Error creating new user!');
      }
      setLoading(false);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join Now!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column gap-2" onSubmit={handleSignUp}>
          <Form.Control type="text" placeholder="Username" ref={nameRef} />
          <Form.Control
            type="email"
            placeholder="name@example.com"
            ref={mailRef}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <Button disabled={loading} variant="success" type="submit">
            Sign Up
          </Button>
        </Form>
        {error && <Alert>{error}</Alert>}
      </Modal.Body>
    </Modal>
  );
};

export default SignUpForm;
