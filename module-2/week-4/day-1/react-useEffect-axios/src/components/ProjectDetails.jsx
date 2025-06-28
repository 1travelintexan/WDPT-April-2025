import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import toast from "react-hot-toast"
function ProjectDetails({ projects }) {
  const [project, setProject] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editedProject, setEditedProject] = useState()

  const { projectId } = useParams()

  const handleChange = (e) => {
    setEditedProject({ ...editedProject, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
        editedProject
      )
      setProject(response.data)
      setEditedProject(response.data)
      toast.success("The project was edited")
      setEdit(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //APPROACH #1
    //make a request to get a single item by ID

    //pros: gets updated version from DB
    //cons: takes longer, worse if you have a lot of requests or too much data

    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
        )

        setProject(response.data)
        setEditedProject(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProject()

    //APPROACH #2
    //pass array of items as props, find the element you need

    //pros: faster, user wont see loading, uses less memory
    //cons: will rely on state for the latest updated version

    // setProject(projects.find((element) => String(element.id) === projectId))
  }, [])

  return project ? (
    <div>
      {" "}
      <Link to={-1}>
        <button>back</button>
      </Link>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>

          <input
            type="text"
            name="title"
            value={editedProject.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={editedProject.description}
            onChange={handleChange}
          />
          <button type="submit">edit it</button>
          <button onClick={() => setEdit(!edit)}>close edit</button>
        </form>
      ) : (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <button onClick={() => setEdit(!edit)}>edit project</button>
        </>
      )}
    </div>
  ) : (
    <div>
      <h2>loading....</h2>
    </div>
  )
}

export default ProjectDetails
