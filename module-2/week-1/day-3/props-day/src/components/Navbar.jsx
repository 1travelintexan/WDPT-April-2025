import IHLogo from "../assets/ironhack-logo.jpg";
//with arrow function syntax with default export
// const Navbar = () => {
//   return <div>Pizza Navbar</div>;
// };
// export default Navbar;
//arrow syntax without default export
export const Navbar = ({ teacher }) => {
  return (
    <nav>
      <img src={IHLogo} alt="ironhack logo" />
      <h2>{teacher}'s Navbar</h2>
      <button>Logout</button>
    </nav>
  );
};

//function keyword syntax
// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }
// export default Navbar
