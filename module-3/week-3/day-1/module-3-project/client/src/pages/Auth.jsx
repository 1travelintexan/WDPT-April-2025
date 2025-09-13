import { useState } from "react"
import { LoginForm } from "../components/LoginForm"
import { SignupForm } from "../components/SignupForm"

function Auth() {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      {toggle ? (
        <LoginForm setToggle={setToggle} />
      ) : (
        <SignupForm setToggle={setToggle} />
      )}
    </div>
  )
}

export default Auth
