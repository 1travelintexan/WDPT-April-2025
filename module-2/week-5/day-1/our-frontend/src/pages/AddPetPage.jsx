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
    // const petToAddToDB = { name, image };
    //send new pet
    try {
      //with axios a post request
      //   const res = await axios.post("http://localhost:4000/pets", petToAddToDB);
      //   console.log("pet added! Nice work", res.data);
      //************************** */
      //post request with fetch
      // const res = await fetch("http://localhost:4000/pets", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(petToAddToDB),
      // });
      // const data = await res.json();
      // console.log("pet added! Nice work", data);
      // setImage("");
      // setName("");
      // nav("/all-pets");

      //*********************************** */
      //new function with the cloudinary image
      //new formdata to hold three things, the file the upload_preset and the cloud_name
      const ourFormData = new FormData();
      ourFormData.append("file", image);
      ourFormData.append("upload_preset", "ironhack2");
      ourFormData.append("cloud_name", "dnkyulofa");
      //send that 'object' to cloudinary to your account
      const res = await axios.post(
        import.meta.env.VITE_CLOUDINARY_URL,
        ourFormData
      );
      //if it does not go into the catch then you should have the res.secure_url
      //which is your https
      const petToCreate = {
        name: name,
        image: res.data.secure_url,
      };
      //now take the pet to create object and send it to your server to create the new pet
      const { data } = await axios.post(
        "http://localhost:4000/pets",
        petToCreate
      );
      console.log("pet added! Nice work", data);
      nav("/all-pets");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Create a new pet</h1>
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
        {/*<label>
          Pet Image:
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>*/}

        <label>
          Pet Image:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <button>Add Pet</button>
      </form>
    </div>
  );
};
export default AddPetPage;
