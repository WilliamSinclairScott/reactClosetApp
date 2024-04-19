
const Nav = ({ isLoggedIn }) => {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <h2>Open App: You are logged in!</h2>
          <ul>
            <li>Closet</li>
            <li>Search</li>
          </ul>
        </>
      ) : (
        <>
        <h2>Close App: You are logged out. Please Sign Up or Sign In!</h2>
        </>
      )}
    </nav>
  );
};

export default Nav;