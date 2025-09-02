import { useAuthContext } from "../context/auth.context"
import { useState } from "react"

export const LoginForm = ({ setToggle }) => {
  const { login } = useAuthContext()
  const [body, setBody] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setBody((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col items-center gap-2">
      Login
      <form
        onSubmit={(e) => login(body, e)}
        className="flex flex-col w-[40vw] justify-center gap-2"
      >
        <label htmlFor="email">email</label>
        <input
          className="borders"
          type="text"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          className="borders"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <button className="nice-hover-btn" type="submit">
          Sign in
        </button>
      </form>
      Don't have an account??
      <button
        className="text-blue-500 underline"
        onClick={() => setToggle((prev) => !prev)}
      >
        Sign up
      </button>
    </div>
  )
}
