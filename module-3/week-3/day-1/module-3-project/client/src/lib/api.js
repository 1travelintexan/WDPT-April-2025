import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8080", // Your backend URL
})
// axios.post("http://localhost:8080/auth/signup", body, {Headers: {authorization: `Bearer ${token}`}})

// api.post("/auth/signup", body)

api.interceptors.request.use(
  async (config) => {
    const json = localStorage.getItem("authToken")
    if (json) {
      config.headers.Authorization = `Bearer ${json}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
