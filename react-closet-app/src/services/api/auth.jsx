import api from './apiConfig'
const LOCALSTORAGE_KEY='token'

export async function login(username, password) {
  try {
    // Make a POST request to the /auth/login endpoint to login the user
    const response = await api.post('/auth/login', { username, password });
    localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);
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


export async function signup(username, password) {
  try {
    const response = await api.post('/auth/signup', { username, password });
    return response.data;
  } catch (error) {
    console.error({"Error during signup:": error,
                    "Backend Error:": error.response.data
                    });
    return error;
  }
}