import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "cyan",
        height: "7vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Link to="/">Homepage</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
