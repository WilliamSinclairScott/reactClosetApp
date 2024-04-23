/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { login, logout } from "../services/api/auth";

export const AuthContext = createContext(null)

export default function AuthContextComponent({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  
  async function signIn(name, password) {
    try{
      const {user} = await login(name, password)
      setLoggedIn(true)
      setUser(user)
      localStorage.setItem("username", user.name)
      localStorage.setItem("jwtToken", user.token)
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("closetItems", user.closetItems)
      localStorage.setItem("associatedTags", JSON.stringify(user.associatedTags))
    } catch (error) {
      console.error("Login Error:", error)
    }
    
  }

  async function signOut() {
    await logout()
    setLoggedIn(false)
    setUser(null)
    localStorage.removeItem("username")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("closetItems")
    localStorage.removeItem("associatedTags")
    localStorage.removeItem("closetItems")
    localStorage.removeItem("associatedTags")
  }

  return (
    <AuthContext.Provider value={{ loggedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}