/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { logout } from '../services/api/auth';

const Nav = ({ isLoggedIn, userName }) => {
  const currentUser = JSON.parse(userName);
  //if (currentUser?.name) console.log("Nav:", isLoggedIn, currentUser.name);
  return (
    <nav>
      <p>Welcome {currentUser?.name ? currentUser.name : "Error"} </p>
      <NavLink to="/"><button>Closet</button></NavLink>
      <NavLink to="/search"><button>Search</button></NavLink>
      <NavLink to="/auth">{isLoggedIn ? <button onClick={logout}>logout</button> : <button>login</button>}</NavLink>
    </nav>
  );
};

export default Nav;