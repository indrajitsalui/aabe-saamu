import React, { useState, useEffect } from 'react';
import './Header.css';
import Modal from '../Modal/Modal';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');
        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLoginClick = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    };

    const handleSignupClick = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
        setUser(null);
        setShowDropdown(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLoginSuccess = (data) => {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data));
        setIsLoggedIn(true);
        setUser(data);
        handleCloseModal();
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="header">
            <img src="/logo.png" alt="AmeSabu" className="logo" />
            <nav className="nav">
                <a href="/">Live TV</a>
                <a href="/a1productions">A1 Productions</a>
                <a href="/advertisements">Advertisements</a>
                {isLoggedIn ? (
                    <div className="account-menu">
                        <button className="account-button" onClick={toggleDropdown}>
                            My Account
                        </button>
                        {showDropdown && (
                            <div className="account-dropdown">
                                <div className="account-info">
                                    <img
                                        src={user.data.profile_picture || 'default-profile.png'}
                                        alt="Profile"
                                        className="profile-picture"
                                    />
                                    <div>
                                        <p className="account-name">{user.data.full_name}</p>
                                        <p className="account-email">{user.data.email}</p>
                                    </div>
                                </div>
                                <div className="account-actions">
                                    <div className="account-action-item">
                                        <span>Watch Later</span>
                                        <span className="badge">5</span>
                                    </div>
                                    <div className="account-action-item">
                                        <span>Favourites</span>
                                    </div>
                                    <button onClick={handleLogout} className="logout-button">Logout</button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="login-button" onClick={handleLoginClick}>Login</button>
                )}
            </nav>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {isLogin ? (
                    <LoginForm
                        onSwitchToSignup={handleSignupClick}
                        onLoginSuccess={handleLoginSuccess}
                        onClose={handleCloseModal}
                    />
                ) : (
                    <SignupForm
                        onSwitchToLogin={handleLoginClick}
                        onClose={handleCloseModal}
                    />
                )}
            </Modal>
        </header>
    );
};

export default Header;
