import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AllPetsPage from "./pages/AllPetsPage";
import AboutPage from "./pages/AboutPage";
import PetDetail from "./pages/PetDetail";
import AddPetPage from "./pages/AddPetPage";
import EditPetPage from "./pages/EditPetPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <section id={darkTheme ? "our-body-dark" : "our-body-light"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-pets" element={<AllPetsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/edit-pet/:petId" element={<EditPetPage />} />
          <Route path="/one-pet/:petId" element={<PetDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
