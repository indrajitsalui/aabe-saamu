// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import A1Productions from './pages/A1Productions/A1Productions';
import Advertisements from './pages/Advertisements/Advertisements';
import Login from './pages/Login/Login';
import './styles/global.css';
import Player from './pages/Player/Player'; // Import the Player component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('authToken', token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a1productions" element={<A1Productions />} />
                    <Route path="/advertisements" element={<Advertisements />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/player/:videoId" element={<Player />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
