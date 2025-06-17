import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { PetList } from "./pages/PetList";
import { PetDetails } from "./pages/PetDetails";
import { useState } from "react";

//using uuid for unique ids
import { v4 as uuidv4 } from "uuid";

function App() {
  const petsArray = [
    { id: 1, name: "Ragnar", age: 4, isGood: true, type: "Dog" },
    { id: 2, name: "Tomas", age: 1, isGood: false, type: "Cat" },
    { id: 3, name: "Buddy", age: 12, isGood: true, type: "Dog" },
  ];
  const [petsState, setPetsState] = useState(petsArray);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isGood, setIsGood] = useState(true);
  const [type, setType] = useState(null);
  //functions
  function handleNameChange(event) {
    console.log("hello in the function", event.target.value);
    setName(event.target.value);
  }
  function handleAddNewPet(event) {
    //special method to stop page reloads
    event.preventDefault();
    //create a new variable
    const petToCreate = { id: uuidv4(), name: name, age, isGood, type };

    setPetsState([petToCreate, ...petsState]);
    console.log("form submitted", petToCreate);

    //clear the form
    setName("");
    setAge(0);
    setIsGood(false);
    setType("");
  }

  //function to delete
  function handleDelete(petId) {
    console.log("pet deleted", petId);
    const filteredPets = petsState.filter((pet) => {
      if (pet.id !== petId) {
        return true;
      }
    });
    setPetsState(filteredPets);
  }
  return (
    <>
      <h1>Form Day</h1>
      {/* here is where we add the form  */}
      <form onSubmit={handleAddNewPet}>
        <label>
          Pet Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Pet age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Is a good pet:
          <input
            type="checkbox"
            checked={isGood}
            onChange={(e) => setIsGood(e.target.checked)}
          />
        </label>
        <label>
          Pet Type:
          <select onChange={(event) => setType(event.target.value)}>
            <option value="">--none--</option>
            <option value="Cat">Meow Meow</option>
            <option value="Dog">Woof Woof</option>
            <option value="Bird">Tweet Tweet</option>
          </select>
        </label>
        <button>Add Pet</button>
      </form>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pets-list"
          element={
            <PetList petsState={petsState} handleDelete={handleDelete} />
          }
        />
        <Route
          path="/one-pet/:petId"
          element={<PetDetails petsState={petsState} />}
        />
      </Routes>
    </>
  );
}

export default App;
