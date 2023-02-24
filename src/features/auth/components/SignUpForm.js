import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import firebaseApp from '../../../firebase';
import Notibox from './Notibox';
import styles from './SignUpForm.module.css';

const auth = getAuth(firebaseApp);

const SignUpForm = () => {
  const [user] = useAuthState(auth);
  const [method, setMethod] = useState('logIn');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = mailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (email && password) {
      setLoading(true);
      try {
        if (method === 'signUp')
          await createUserWithEmailAndPassword(auth, email, password);
        else await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        console.log(e.code);
        setError(e);
        console.log('Error creating new user!');
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={method === 'logIn' ? styles.submitBtn : styles.btn}
            onClick={() => setMethod('logIn')}
          >
            <span>👑</span>
            Log In
          </button>
          <button
            type="button"
            className={method === 'signUp' ? styles.submitBtn : styles.btn}
            onClick={() => setMethod('signUp')}
          >
            <span>📝</span>
            Sign Up
          </button>
        </div>
        <div className={styles.inputGroup}>
          <span>📧</span>
          <input
            className={styles.input}
            type="email"
            placeholder="name@example.com"
            ref={mailRef}
          />
        </div>
        <div className={styles.inputGroup}>
          <span>🔒</span>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>

        <button
          className={styles.submitBtn}
          disabled={loading}
          variant="success"
          type="submit"
        >
          {method === 'logIn' ? 'Log In' : 'Sign Up'}
        </button>
        <Notibox error={error} message={user && `Welcome ${user.email}!`} />
      </form>
    </div>
  );
};

export default SignUpForm;
