import React, { useRef } from 'react';
import { auth } from '../../../firebase';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Toastr from '../../../components/Toastr';

const LogInForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef();
  const pwRef = useRef();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = pwRef.current.value.trim();
    console.log(email, password);
    if (email && password) {
      signInWithEmailAndPassword(email, password);
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
          onSubmit={handleLogIn}
          className="bg-light d-flex flex-column w-75 gap-3 border rounded p-3"
          style={{ minWidth: '300px', maxWidth: '400px' }}
        >
          <h2 className="text-center">Log In</h2>
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
          <Form.Check type="checkbox" id="remember-me" label="Remember me" />
          <Button type="submit">Log In</Button>
          <p className="text-center border-top pt-1">
            Need an account? <Link to="/account/signup">SIGN UP</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default LogInForm;
