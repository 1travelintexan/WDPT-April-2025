import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AllPetsPage from "./pages/AllPetsPage";
import AboutPage from "./pages/AboutPage";
import PetDetail from "./pages/PetDetail";
import AddPetPage from "./pages/AddPetPage";
function App() {
  return (
    <>
      <Navbar />
      <section id="our-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-pets" element={<AllPetsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/one-pet/:petId" element={<PetDetail />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
