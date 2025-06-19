import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePet = ({ petsState, setPetsState }) => {
  //grab params from the url
  const { petId } = useParams();
  const nav = useNavigate();
  //filter the array of pets based on the petId from the url
  const foundPet = petsState.find((pet) => {
    if (pet.id == petId) {
      return true;
    }
  });
  const [name, setName] = useState(foundPet.name);
  const [age, setAge] = useState(foundPet.age);
  const [isGood, setIsGood] = useState(foundPet.isGood);
  const [type, setType] = useState(foundPet.type);

  //function to update the pet
  function handleUpdatePet(e) {
    e.preventDefault();
    const updatePet = { name, age, isGood, type };
    //we need to loop over the array and change the one whos data we changed
    const updateArrayOfPets = petsState.map((onePet) => {
      if (onePet.id == petId) {
        return updatePet;
      } else {
        return onePet;
      }
    });
    setPetsState(updateArrayOfPets);
    nav("/pets-list");
  }
  return (
    <div>
      <h3>UpdatePet</h3>
      <form onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        <button>Update Pet</button>
      </form>
    </div>
  );
};
