import { useContext, useEffect } from 'react'
//import './App.css'
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom'

import Closet from './pages/Closet'
import Search from './pages/Search'
import Auth from './pages/Auth'
import Nav from './components/Nav'
import { AuthContext } from './context/auth'


const protectedRoutes = ['/', `/search`]

function App() {
  const { loggedIn } = useContext(AuthContext)

  const logIn = localStorage.getItem('loggedIn')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    //!!Auth redirect prob not working. come back to this
    if (protectedRoutes.includes(location.pathname) && !(loggedIn || logIn)) {
      navigate('/auth', { replace: true })
    }
  }, [loggedIn,logIn, navigate, location])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element ={<Closet />} />
        <Route path="/search" element={ <Search />} />
        <Route path="/auth" element={ < Auth /> } />
      </Routes>
    </>
  )
}

export default App