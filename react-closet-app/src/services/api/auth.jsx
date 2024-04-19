import api from './apiConfig'
const LOCALSTORAGE_KEY='token'

export async function login(name, password) {
  try {
    // Make a POST request to the /auth/login endpoint to login the user
    const response = await api.post('/auth/login', { name, password });
    console.log("login response:", response)
    localStorage.setItem(LOCALSTORAGE_KEY, response)
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