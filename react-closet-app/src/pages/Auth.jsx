/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/SignUp';
import Login from '../components/LogIn';

const Auth = () => {
  const {isLoggedIn} = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const toggleComponent = () => {
    setIsSignUp(!isSignUp);
  };

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate])
  return (!isLoggedIn ? (
    <div>
      <button onClick={toggleComponent}>
        {isSignUp ? 'Switch to SignUp' : 'Switch to Login'}
      </button>
      {isSignUp ? <Login /> : <SignUp />}
    </div>
    ) : (
    <div>
      <h1>Log Out</h1>
    </div>
    ))
  }

export default Auth;