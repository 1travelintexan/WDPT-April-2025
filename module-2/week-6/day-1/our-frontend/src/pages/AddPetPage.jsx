import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPetPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();
  function handleChange(e) {
    setName(e.target.value);
  }
  async function handleAddNewPet(e) {
    //first thing is always to prevent the refresh
    e.preventDefault();
    const petToAddToDB = { name, image };
    //send new pet
    try {
      //with axios a post request
      //   const res = await axios.post("http://localhost:4000/pets", petToAddToDB);
      //   console.log("pet added! Nice work", res.data);

      //************************** */
      //post request with fetch
      const res = await fetch("http://localhost:4000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petToAddToDB),
      });
      const data = await res.json();
      console.log("pet added! Nice work", data);
      setImage("");
      setName("");
      nav("/all-pets");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleAddNewPet}>
        <label>
          Pet Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="enter pet name"
          />
        </label>
        <label>
          Pet Image:
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <button>Add Pet</button>
      </form>
    </div>
  );
};
export default AddPetPage;
