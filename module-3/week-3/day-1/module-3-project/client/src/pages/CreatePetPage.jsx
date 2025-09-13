import { useState } from "react";
import axios from "axios";
export const CreatePetPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [type, setType] = useState("");

  async function handleAddPet(e) {
    //always remember to stop the page from reloading
    e.preventDefault();
    const ourFormData = new FormData();

    //our image from the form
    const image = e.target.image.files[0];
    ourFormData.append("name", name);
    ourFormData.append("age", age);
    ourFormData.append("type", type);
    //this adds the image variable to the new special object
    ourFormData.append("imageUrl", image);
    try {
      //now we send the our form data the server to process
      const response = await axios.post(
        "http://localhost:5005/pets/create-a-pet/68b30cb52028fd8e8e0cbea9",
        ourFormData
      );
      console.log("pet created!", response.data);
    } catch (error) {
      console.log(error);
    }
  }
  //testing

  return (
    <form onSubmit={handleAddPet}>
      <label>
        Pet Name:
        <input
          type="text"
          placeholder="pet name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Pet Age:
        <input
          type="number"
          placeholder="pet age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Pet Type:
        <input
          type="text"
          placeholder="pet age"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <label>
        Pet Image:
        <input type="file" name="image" />
      </label>
      <button>Add Pet</button>
    </form>
  );
};
