import { Link } from "react-router-dom"
import { useAuthContext } from "../context/auth.context"
export const Navbar = () => {
  const { user, logout } = useAuthContext()
  return (
    <nav className="flex items-center justify-evenly h-11 bg-amber-600">
      <Link to="/">Home</Link>
      {!user && <Link to="/auth">Login/Signup</Link>}

      {user && (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  )
}
