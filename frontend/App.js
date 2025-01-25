import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { getUserFromLocalStorage } from './utils/authHelpers';
import './App.css';

function App() {
  // State to track user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <Routes>
          {/* Public Route */}
          <Route path="/login" element={!isAuthenticated ? <Auth setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />} />

          {/* Protected Route */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            } 
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        </Routes>

        <Footer />
        
        {/* About Me Section */}
        <div className="about-me">
          <a href="https://github.com/effaroukk" target="_blank" rel="noopener noreferrer">
            About this app and the creator
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;

