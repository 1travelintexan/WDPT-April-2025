import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPetsPage = () => {
  //useState at the top
  const [pets, setPets] = useState([]);
  //delete pet function
  async function handleDeletePet(thePetId) {
    try {
      console.log(thePetId);
      await axios.delete(`http://localhost:4000/pets/${thePetId}`);
      const newPetArray = pets.filter((pet) => {
        if (pet.id !== thePetId) {
          return true;
        }
      });
      setPets(newPetArray);
    } catch (error) {
      console.log(error);
    }
  }
  //get all pets from the server
  async function getAllPets() {
    try {
      const response = await axios.get("http://localhost:4000/pets");
      console.log(response.data);
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPets();
  }, []);
  // store them in a state
  //loop over them and show each one

  return (
    <div>
      <h1>All the Pets:</h1>
      {pets.map((eachPet) => (
        <div className="pet-card" key={eachPet.id}>
          <Link to={`/one-pet/${eachPet.id}`}>
            <h3>{eachPet.name}</h3>
          </Link>
          <button onClick={() => handleDeletePet(eachPet.id)}>Delete</button>
          <Link to={`/edit-pet/${eachPet.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default AllPetsPage;
