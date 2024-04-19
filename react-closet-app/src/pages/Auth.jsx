import { useState } from 'react';
import SignUp from '../components/SignUp';
import Login from '../components/LogIn';

const Auth = ({ isLoggedIn }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleComponent = () => {
    setIsSignUp(!isSignUp);
  };

  return (!isLoggedIn ? (
    <div>
      <button onClick={toggleComponent}>
        {isSignUp ? 'Switch to Login' : 'Switch to SignUp'}
      </button>
      {isSignUp ? <SignUp /> : <Login />}
    </div>
    ) : (
    <div>
      <h1>Log Out</h1>
    </div>
    ))
  }

export default Auth;