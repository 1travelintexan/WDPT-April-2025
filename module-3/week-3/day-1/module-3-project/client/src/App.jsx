import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProfilePage from "./pages/ProfilePage"
import Auth from "./pages/Auth"
import NotFound from "./pages/NotFound"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
