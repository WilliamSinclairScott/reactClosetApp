import api from './apiConfig'

export async function login(name, password) {
  try {
    // Make a POST request to the /auth/login endpoint to login the user
    const response = await api.post('/auth/login', { name, password });

    console.log("login response:", response)

    // Store the token in localStorage
    localStorage.setItem('Token', response)
    localStorage.setItem('loggedIn', 'true');

    // Store the user data in localStorage, if it's included in the response
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    console.error("login Error:", error);
    return error
  }
}


export async function signup(name, password) {
  try {
    const response = await api.post('/auth/signup', { name, password });
    return response.data;
  } catch (error) {
    console.error({"Error during signup:": error,
                    "Backend Error:": error.response.data
                    });
    return error
  }
}

export async function logout() {
  try {
    // Make a POST request to the /auth/logout endpoint to logout the user
    const response = await api.post('/auth/logout');

    // Remove the token and user data from localStorage
    localStorage.removeItem('Token');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    return response.data;
  } catch (error) {
    console.error("logout Error:", error);
    return error
  }
}