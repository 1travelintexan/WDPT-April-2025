import "./App.css"
import Homepage from "./components/Homepage"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import ProjectDetails from "./components/ProjectDetails"
import { Toaster } from "react-hot-toast"

function App() {
  const [projects, setProjects] = useState(false)
  return (
    <div>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={<Homepage projects={projects} setProjects={setProjects} />}
        />
        <Route
          path="/project/:projectId"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </div>
  )
}

export default App
