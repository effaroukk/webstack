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

        {/* About section at the bottom right */}
        <div className="about-section">
          <p>
            This is a simple web-based digital journal app, created with React, Node.js, and MongoDB. As a beginner in coding, this project marks my first attempt at building a full-stack application. I am learning step by step, and this is my way of improving my skills and making something unique. 
            <a href="https://github.com/effaroukk/webstack.git" target="_blank" rel="noopener noreferrer" className="about-link">About Me</a>
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;

