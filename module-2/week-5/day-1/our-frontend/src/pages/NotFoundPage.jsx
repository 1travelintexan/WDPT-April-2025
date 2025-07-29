import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oppps you got lost... 404</h1>
      <Link to="/">GO back home?</Link>
    </div>
  );
};
export default NotFoundPage;
