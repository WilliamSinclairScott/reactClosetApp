import { signup } from '../services/api/auth';

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const response = await signup(event.target.name.value, event.target.password.value)
    console.log(response)
    
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default SignUp;