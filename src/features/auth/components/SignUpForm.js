import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import { Link, Navigate } from 'react-router-dom';
import Toastr from '../../../components/Toastr';
import { Button, Container, Form } from 'react-bootstrap';

const SignUpForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const emailRef = useRef();
  const pwRef = useRef();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = pwRef.current.value.trim();
    if (email && password) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  console.log(user, loading, error);

  return (
    <>
      {user && <Navigate to="/" replace />}
      {error && <Toastr message={error.message} />}
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', backgroundColor: 'var(--bs-blue)' }}
      >
        <Form
          onSubmit={handleSignUp}
          className="bg-light d-flex flex-column w-75 gap-3 border rounded p-3"
          style={{ minWidth: '300px', maxWidth: '400px' }}
        >
          <h2 className="text-center">Join Now</h2>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={pwRef}
              required
            />
          </Form.Group>
          <Form.Check
            type="checkbox"
            id="agree-terms"
            label="Agree to Terms and Conditions"
            required
          />
          <Button type="submit">Sign Up</Button>
          <p className="text-center border-top pt-1">
            Already a user? <Link to="/account/login">LOG IN</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default SignUpForm;
