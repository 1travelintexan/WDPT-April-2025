import { createContext, useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import api from "../lib/api"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const verify = async (token) => {
    if (!token) {
      setUser(null)
      localStorage.removeItem("authToken")
      return
    }
    try {
      const response = await api.get("/auth/verify")
      if (response.status === 200) {
        setUser(response.data.payload)
      }
      return
    } catch (error) {
      console.log(error)
      return
    }
  }

  const signup = async (body, setToggle, e) => {
    e.preventDefault()
    try {
      const response = await api.post("/auth/signup", body)

      if (response.status === 201 || response.status === 200) {
        setToggle((prev) => !prev)
      }
      return
    } catch (error) {
      console.log(error)
      return
    }
  }

  const login = async (body, e) => {
    e.preventDefault()
    try {
      const response = await api.post("/auth/login", body)
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.authToken)
        verify(response.data.authToken)
        navigate("/profile")
      }
      return
    } catch (error) {
      console.log(error)
      return
    }
  }
  const logout = async () => {
    localStorage.removeItem("authToken")
    setUser(null)
    navigate("/")
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    verify(token)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("context must be used inside a provider")
  }
  return context
}
