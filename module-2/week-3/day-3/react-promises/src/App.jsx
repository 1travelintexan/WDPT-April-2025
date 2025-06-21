import { useEffect, useState } from "react"
import "./App.css"

import UserCard from "../components/UserCard"

function App() {
  const [users, setUsers] = useState()

  // const getUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => setUsers(result))
  //     .catch((error) => console.log(error))
  // }

  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const result = await response.json()
      setUsers(result)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  // getUsers()

  return (
    <>
      <h1>Users list</h1>
      {users ? (
        users.map((user) => <UserCard user={user} key={user.id} />)
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default App
