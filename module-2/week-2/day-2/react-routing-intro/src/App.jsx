import "./App.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Profile from "./pages/Profile"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Greetings from "./pages/Greetings"

function App() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Hello world - Routing</h2>
      <Navbar />
      <button onClick={() => navigate(-1)}>Back</button>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/greetings/:name" element={<Greetings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
