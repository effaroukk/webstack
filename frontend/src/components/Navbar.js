import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user from localStorage
    setIsAuthenticated(false);        // Update auth state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={isAuthenticated ? '/home' : '/login'}>My Digital Diary</Link>
      </div>
      <ul className="navbar-links">
        {isAuthenticated ? (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

