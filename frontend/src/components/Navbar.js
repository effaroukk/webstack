import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;

