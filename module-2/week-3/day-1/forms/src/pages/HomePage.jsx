import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h3>HomePage</h3>
      <Link to="/pets-list">Pets list</Link>
    </div>
  );
};
export default HomePage;
