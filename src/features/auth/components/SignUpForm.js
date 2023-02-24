import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../../firebase';

const auth = getAuth(firebaseApp);

const SignUpForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [show, setShow] = useState(true);
  const [alert, setAlert] = useState({
    display: false,
    variant: 'primary',
    msg: '',
  });

  const mailRef = useRef();
  const passwordRef = useRef();

  const handleClose = () => setShow(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = mailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(email, password);
      } catch (err) {
        console.log(err.message);
        console.log('Error creating new user!');
      }
    }
  };

  console.log(user);
  useEffect(() => {
    if (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setAlert({
            display: true,
            msg: 'Looks like you already have an account! Sign in instead',
            variant: 'info',
          });
          break;
        default:
          setAlert({
            display: true,
            msg: 'Firebase Error!',
            variant: 'danger',
          });
      }
    } else {
      setAlert({
        display: false,
        msg: '',
        variant: 'primary',
      });
    }
  }, [error]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? user.user.email : 'Join Now!'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column gap-2" onSubmit={handleSignUp}>
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
        {alert.display && <Alert variant={alert.variant}>{alert.msg}</Alert>}
      </Modal.Body>
    </Modal>
  );
};

export default SignUpForm;
