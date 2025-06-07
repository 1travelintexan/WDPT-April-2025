const PetCard = ({ pet, felix }) => {
  const { image, petName, age, owner } = pet;
  return (
    <div className={`pet-card ${felix}`}>
      <img src={image} />
      <h4>Name: {petName}</h4>
      <h4>Age: {age}</h4>
      <h4>Owner: {owner}</h4>
    </div>
  );
};
export default PetCard;
