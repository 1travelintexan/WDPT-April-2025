import { Link } from "react-router-dom";

export const PetList = ({ petsState, handleDelete }) => {
  return (
    <div>
      <h2>PetList:</h2>
      {petsState.map((onePet) => {
        return (
          <div className="pet-card" key={onePet.id}>
            <h4>
              Pet Name:<Link to={`/one-pet/${onePet.id}`}> {onePet.name}</Link>
            </h4>
            <h4>Pet Age: {onePet.age}</h4>
            <button
              onClick={() => {
                handleDelete(onePet.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
