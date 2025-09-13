import { useState } from "react"
import { useAuthContext } from "../context/auth.context"

export const SignupForm = ({ setToggle }) => {
  const { signup } = useAuthContext()
  const [body, setBody] = useState({
    email: "",
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    setBody((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col items-center gap-2">
      Sign up
      <form
        onSubmit={(e) => signup(body, setToggle, e)}
        className="flex flex-col w-[40vw] justify-center gap-2"
      >
        <label htmlFor="email">email</label>
        <input
          className="borders"
          type="text"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="username">username</label>
        <input
          className="borders"
          type="text"
          name="username"
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          className="borders"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit" className="nice-hover-btn hover:bg-green-200">
          Sign up
        </button>
      </form>
      Already have an account?
      <button
        className="text-blue-500 underline"
        onClick={() => setToggle((prev) => !prev)}
      >
        Login
      </button>
    </div>
  )
}
