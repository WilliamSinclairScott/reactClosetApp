import api from './apiConfig'

export async function login(name, password) {
  try {
      const response = await api.post('/auth/login', { name, password });
      const { user } = response.data;
      localStorage.setItem('currentUserItems', JSON.stringify(user.closetItems));
      localStorage.setItem('curretUserAssociatedTags', JSON.stringify(user.associatedTags));
      localStorage.setItem('loggedIn', 'true');
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