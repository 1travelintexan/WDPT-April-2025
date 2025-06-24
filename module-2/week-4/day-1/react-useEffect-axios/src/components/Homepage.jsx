import { useState, useEffect } from "react"
import axios from "axios"

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
      <h2>List of projects</h2>
      <div>
        {projects ? (
          projects.map((project) => (
            <div key={project.id}>
              <h3>{project.title}</h3>
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
