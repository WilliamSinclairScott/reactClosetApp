/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth';

const Nav = () => {
  const { signOut } = useContext(AuthContext);
  const loggedIn = localStorage.getItem("loggedIn")
  const username = localStorage.getItem("username")
  return (
    <nav>
      <p>{username ? username : "Please Sign In"} </p>
      <NavLink to="/"><button>Closet</button></NavLink>
      <NavLink to="/search"><button>Search</button></NavLink>
      {/* LOGOUT NOT RENDERING */}
      <NavLink to="/auth">{(loggedIn) ? <button onClick={signOut}>logout</button> : <button>LogIn</button>}</NavLink>
    </nav>
  );
};

export default Nav;