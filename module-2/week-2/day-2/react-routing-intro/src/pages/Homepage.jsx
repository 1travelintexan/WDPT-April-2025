import About from "./About"
import users from "../users.json"
import { Link } from "react-router-dom"
function Homepage() {
  return (
    <div>
      Homepage
      <h3>this is the homepage!!!!</h3>
      <h3>Users list</h3>
      {users.map((user) => (
        <div>
          <h2>
            <Link to={`/greetings/${user.username}`}>{user.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Homepage
