import "./App.css"
import CreateProject from "./components/CreateProject"
import Homepage from "./components/Homepage"
import { useState } from "react"
function App() {
  const [projects, setProjects] = useState(false)
  return (
    <div>
      <h1>hello world</h1>
      <Homepage projects={projects} setProjects={setProjects} />
      <CreateProject projects={projects} setProjects={setProjects} />
    </div>
  )
}

export default App
