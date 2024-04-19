//packges import
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useContext, useEffect, createContext} from 'react';

import './App.css';

//import context
import { AuthContextComponent } from './context/auth'

//import pages
import { Auth } from './pages/Auth'
import { Search } from './pages/Search'
import { Closet } from './pages/Closet';

//import components
import { Nav } from './components/Nav'

//initialize context
const AuthContext = createContext(null)

function App() {
  return (
    <AuthContextComponent>
      {/* Use the AuthContextComponent to wrap the app */}
      <AppContent />
    </AuthContextComponent>
  )
}

const AppContent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const protectedRoutes = ['/post', '/updatepost'];

    if (protectedRoutes.includes(location.pathname) && !isLoggedIn) {
      navigate('/auth/signin', { replace: true });
    }
  }, [isLoggedIn, navigate, location]);

  return (
    <>
     
      <Nav className="block" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        {/* unprotected, redirect to /auth */}
        <Route path="/auth" element={<Auth />} /> 

        {/* protected, redirect to /auth */}
        <Route path="/" element={isLoggedIn ? <Closet /> : <Auth/>} />
        <Route path="/search" element={isLoggedIn ? <Search /> : <Auth/>} />

      </Routes>
    </>
  )
}

export default App;
