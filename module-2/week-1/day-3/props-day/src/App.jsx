import "./App.css";
import Footer from "./components/Footer";
//this is an import from a component that is not exported by default
import { Navbar } from "./components/Navbar";
import PetCard from "./components/PetCard";
//import a default export from the Navbar
// import Navbar from "./components/Navbar";

function App() {
  const petArray = [
    {
      petName: "Tomas",
      owner: "Dani",
      age: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      petName: "Ragnar",
      owner: "Joshua",
      age: 4,
      image:
        "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl0YnVsbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      petName: "Rocky",
      owner: "Tim",
      age: 1,
      image:
        "https://images.unsplash.com/photo-1666471301755-ffe9995005c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhcmRlZCUyMGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  // const foundPet = petArray.find((pet) => {
  //   if (pet.petName === "Ragnar") {
  //     return true;
  //   }
  // });
  // console.log({ foundPet });
  const teacher = "Joshua";
  return (
    <>
      {/* calling or 'using' a component (the same as add(2,3)....)*/}
      <Navbar teacher={teacher} />
      <main>
        <h1>Props Day</h1>
        <PetCard pet={petArray[0]} felix={"felix"} />
        <PetCard pet={petArray[1]} />
        <PetCard pet={petArray[2]} />
      </main>
      {/* the same as calling the function with JS Footer() */}
      <Footer />
    </>
  );
}

export default App;
