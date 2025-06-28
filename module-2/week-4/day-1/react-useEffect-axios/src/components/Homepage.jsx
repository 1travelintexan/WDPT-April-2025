import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import CreateProject from "./CreateProject"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function Homepage({ projects, setProjects }) {
  //request function
  const getProjects = async () => {
    try {
      const response = await axios.get(API_URL + "/projects")
      console.log(response.data)
      setProjects(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  //request to delete project function
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(API_URL + "/projects/" + id)

      if (response.status === 200) {
        setProjects(projects.filter((project) => project.id !== id))
      }
    } catch (error) {
      console.log(error)
    }
  }
  //runs the function only on first render
  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div>
      <CreateProject projects={projects} setProjects={setProjects} />
      <h2>List of projects</h2>
      <div>
        {projects ? (
          projects.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid black",
                margin: "6px",
                padding: "6px",
              }}
            >
              <Link to={`/project/${project.id}`}>
                <h3>{project.title}</h3>
              </Link>
              <p>{project.description}</p>
              <button onClick={() => handleDelete(project.id)}>delete</button>
            </div>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  )
}

export default Homepage
