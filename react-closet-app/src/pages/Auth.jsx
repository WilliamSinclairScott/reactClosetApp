import { useState } from 'react';
import SignIn from '../components/SignIn';
import Login from '../components/LogIn';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleComponent = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {isSignIn ? 'Switch to Login' : 'Switch to SignIn'}
      </button>
      {isSignIn ? <SignIn /> : <Login />}
    </div>
  );
};

export default Auth;