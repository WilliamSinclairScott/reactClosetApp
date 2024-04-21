import { useContext, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom'

import Closet from './pages/Closet'
import Search from './pages/Search'
import Auth from './pages/Auth'
import Nav from './components/Nav'
import { AuthContext } from './context/auth'


const protectedRoutes = ['/', `/search`]

function App() {
  const { loggedIn, user } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (protectedRoutes.includes(location.pathname) && !loggedIn) {
      navigate('/login', { replace: true })
    }
  }, [loggedIn, navigate, location])
  const curr = JSON.parse(localStorage.getItem('user'))
  console.log('App:', loggedIn, curr.name)
  return (
    <>
      {/* <Nav loggedIn={loggedIn} userName={user}/> */}
      <Routes>
        <Route path="/" element ={<Closet />} />
        <Route path="/search" element={ <Search />} />
        <Route path="/auth" element={ < Auth /> } />
      </Routes>
    </>
  )
}

export default App