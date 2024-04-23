import api from './apiConfig'

export async function login(name, password) {
  try {
    const response = await api.post('/auth/login', { name, password });
    console.log("response:", response);
    return response.data;
  } catch (error) {
      console.error("login Error:", error);
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
    const response = await api.get('/auth/logout');
    return response.data;
  } catch (error) {
    console.error("logout Error:", error);
    return error
  }
}