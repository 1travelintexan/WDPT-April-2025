import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OurSpinner } from "../components/OurSpinner";
import { SearchBar } from "../components/SearchBar";
const AllPetsPage = () => {
  //useState at the top
  const [pets, setPets] = useState([]);
  const [searchWord, setSearchWord] = useState("");
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
  //function to filter all the pets based on the search word state
  function filterPets(event) {
    setSearchWord(event.target.value);
  }
  useEffect(() => {
    setTimeout(() => {
      getAllPets();
    }, 500);
  }, []);
  // if statement before the return to check the length of the pets array
  if (pets.length === 0) {
    return <OurSpinner />;
  }

  return (
    <div>
      <SearchBar searchWord={searchWord} filterPets={filterPets} />
      <h1>All the Pets:</h1>
      {pets
        .filter((onePet) => {
          if (onePet.name.toLowerCase().includes(searchWord.toLowerCase())) {
            return true;
          }
        })
        .map((eachPet) => (
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
