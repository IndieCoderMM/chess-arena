import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notibox = ({ message, error }) => {
  const [alert, setAlert] = useState('');
  const [variant, setVariant] = useState('primary');

  useEffect(() => {
    if (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setAlert('Looks like you already have an account! Sign in instead');
          setVariant('info');
          break;
        case 'auth/wrong-password':
          setAlert('Wrong password! Please try again.');
          setVariant('danger');
          break;
        default:
          setAlert('Firebase Error!');
          setVariant('danger');
      }
    } else {
      setAlert('');
    }
  }, [error]);
  useEffect(() => {
    if (message) {
      setAlert(message);
      setVariant('success');
    }
  }, [message]);

  return <div>{alert && <Alert variant={variant}>{alert}</Alert>}</div>;
};

export default Notibox;
