// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import A1Productions from './pages/A1Productions/A1Productions';
import Advertisements from './pages/Advertisements/Advertisements';
import Login from './pages/Login/Login';
import './styles/global.css';
import Player from './pages/Player/Player';
import GuestHome from './pages/GuestHome/GuestHome';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import LiveTV from './pages/LiveTV/LiveTV';
import Header from './components/Header/Header';

const AppContent = ({ handleLogout, handleLogin }) => {
  const location = useLocation();
  const hideHeaderRoutes = ['/privacy', '/terms-and-conditions'];

  return (
    <div className="app-container">
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header onLogout={handleLogout} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem('authToken') ? (
              <Navigate to="/home" replace />
            ) : (
              <GuestHome />
            )
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/a1productions" element={<A1Productions />} />
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/player/:videoId" element={<Player />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/livetv" element={<LiveTV />} />
      </Routes>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('authToken');
  });

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AppContent handleLogout={handleLogout} handleLogin={handleLogin} />
    </Router>
  );
}

export default App;
