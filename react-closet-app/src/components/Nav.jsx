import { NavLink } from 'react-router-dom';
import { logout } from '../services/api/auth';
import PropTypes from 'prop-types';

const Nav = ({ isLoggedIn, userName }) => {

  console.log("Nav:", isLoggedIn, userName)
  return (
    <nav>
      <p>Welcome { userName }</p>
      <NavLink to="/"><button>Closet</button></NavLink>
      <NavLink to="/search"><button>Search</button></NavLink>
      <NavLink to="/auth">{isLoggedIn ?<button onClick={logout}>logout</button> : <button>login</button>}</NavLink>
    </nav>
  );
};

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Nav;