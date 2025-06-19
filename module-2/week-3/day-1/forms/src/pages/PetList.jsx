import { Link, useSearchParams } from "react-router-dom";

export const PetList = ({ petsState, handleDelete }) => {
  //use the search params
  const [theQueries] = useSearchParams();
  const theNameQuery = theQueries.get("name");
  const theAgeQuery = theQueries.get("age");
  console.log("the queries", theNameQuery, theAgeQuery);

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
            <Link to={`/update-pet/${onePet.id}`}>
              <button>Update</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
