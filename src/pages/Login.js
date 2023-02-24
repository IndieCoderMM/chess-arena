import React from 'react';
import SignUpForm from '../features/auth/components/SignUpForm';

const Login = () => {
  const style = {
    background: 'linear-gradient(to right, #EC6EAD, #3494E6)',
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: '#3494e6', ...style }}
    >
      <SignUpForm />
    </div>
  );
};

export default Login;
