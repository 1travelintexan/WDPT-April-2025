import { users } from "../lib/users-data"
import { useState } from "react"

function Lists() {
  const [userState, setUserState] = useState(users)

  const handleDelete = (id) => {
    setUserState(userState.filter((curr) => curr.id !== id))
  }

  return (
    <div>
      <hr />
      <h2>Lists</h2>
      {userState.map((user, i) => (
        <div key={i}>
          {/* key is a unique identifier, has to be at the biggest parent */}
          <h2>{user.name}</h2>
          <p>
            {/* Ternary operator requires else */}
            {user.website
              ? user.website
              : "this user does not have a website yet"}
          </p>
          {/* && Does not require else */}
          {user.wonNobel && <p>this person won a nobel prize 🏆</p>}
          <button onClick={() => handleDelete(user.id)}>delete person</button>
        </div>
      ))}
    </div>
  )
}

export default Lists
