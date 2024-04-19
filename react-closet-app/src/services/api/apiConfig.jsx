import axios from 'axios'
//todo: UPDATE LOCAL STORAGE KEY TO MATCH YOUR PROJECT
const LOCALSTORAGE_KEY='token'
const api = axios.create({
  //baseURL: /* DEPLOYED SERVER GOES HERE */
  baseURL: 'http://localhost:7777',

})
api.interceptors.request.use(config => {
    const token = localStorage.getItem(LOCALSTORAGE_KEY)
    config.headers.Authorization = token
    return config
})

export default api
