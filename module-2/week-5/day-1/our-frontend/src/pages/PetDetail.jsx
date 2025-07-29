import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetDetail = () => {
  const { petId } = useParams();
  const [onePet, setOnePet] = useState({});

  //take the id and ask the server for the data for that one pet
  // store that data in a state
  // show the data on the page
  useEffect(() => {
    function getOnePet() {
      axios
        .get(`http://localhost:4000/pets/${petId}`)
        .then((res) => {
          console.log(res.data);
          setOnePet(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOnePet();
  }, [petId]);
  return (
    <div>
      <img alt="pet image" src={onePet.image} className="detail-image" />
      <h1>{onePet.name}'s Page!!!</h1>
    </div>
  );
};
export default PetDetail;
