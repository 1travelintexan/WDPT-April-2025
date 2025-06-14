import { useParams, Link } from "react-router-dom"

function Greetings() {
  const { name } = useParams()

  return (
    <div>
      Greetings, {name}
      <div>
        <Link to="/">go back home</Link>
      </div>
    </div>
  )
}

export default Greetings
