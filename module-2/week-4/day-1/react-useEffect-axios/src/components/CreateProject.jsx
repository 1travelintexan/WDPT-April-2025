import { useState } from "react"
import axios from "axios"
function CreateProject({ projects, setProjects }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  //SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      //if title or description is empty, dont run function
      if (!form.title || !form.description) {
        alert("fill out the fields")
        return
      }
      //request
      const response = await axios.post(
        "https://project-management-api-4641927fee65.herokuapp.com/projects",
        form
      )

      //optimistic UI
      if (response.status === 201 || response.status === 200) {
        setProjects([...projects, response.data])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" onChange={handleChange} required />
      <label htmlFor="description">description:</label>

      <input type="text" name="description" onChange={handleChange} required />

      <button type="submit">Create new project</button>
    </form>
  )
}

export default CreateProject
