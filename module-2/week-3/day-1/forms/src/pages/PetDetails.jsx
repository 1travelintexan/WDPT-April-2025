import { useParams } from "react-router-dom";

export const PetDetails = () => {
  const { petId } = useParams();
  return <div>PetDetails</div>;
};
