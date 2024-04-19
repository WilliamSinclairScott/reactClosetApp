import { login } from '../services/api/auth';

const LogIn = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    await login(event.target.name.value, event.target.password.value);
    //console.log(response)
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;