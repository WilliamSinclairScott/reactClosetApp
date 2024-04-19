
const Nav = ({ isLoggedIn }) => {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <ul>
            <li>Closet</li>
            <li>Search</li>
          </ul>
        </>
      ) : (
        <>
        <h2>Close App: You are logged out. Please Sign Up or Sign In!</h2>
          <ul>
            <li>Auth</li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Nav;