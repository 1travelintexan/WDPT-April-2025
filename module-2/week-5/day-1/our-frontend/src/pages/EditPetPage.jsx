import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPetPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  //grab the id from the URL
  const { petId } = useParams();
  const nav = useNavigate();
  //use the id from the URL to ask the server for all the data for that specific pet
  //we want that to happen once when the page loads and if the id ever changes
  useEffect(() => {
    //with axios
    async function getPetDetails() {
      try {
        const response = await axios.get(`http://localhost:4000/pets/${petId}`);
        console.log(response);
        setName(response.data.name);
        setImage(response.data.image);
      } catch (error) {
        console.log(error);
      }
    }
    //always call the function
    getPetDetails();
  }, [petId]);

  //function to send a put or patch request to the server and update the pet
  function handleUpdatePet(e) {
    //always always.... stop the page reloading
    e.preventDefault();
    const petToUpdate = { name, image };
    axios
      .patch(`http://localhost:4000/pets/${petId}`, petToUpdate)
      .then((res) => {
        console.log("pet updated! Nice work", res);
        nav("/all-pets");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Update pet</h1>
      <form onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button>Update Pet</button>
      </form>
    </div>
  );
};
export default EditPetPage;
