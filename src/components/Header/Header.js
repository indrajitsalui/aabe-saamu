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

    // Set default values if user or any of its fields are undefined
    const defaultProfilePic = '/profile_pic.png';  // Replace with the path to your default image
    const defaultFullName = 'Guest';
    const defaultEmail = 'guest@example.com';

    const profilePicture = user?.profile_picture || defaultProfilePic;
    const fullName = user?.full_name || defaultFullName;
    const email = user?.email || defaultEmail;

    return (
        <header className="header">
            <img src="/aamesabu.png" alt="AmeSabu" className="logo" />
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
                                        src={profilePicture}  // Fallback for profile picture
                                        alt="Profile"
                                        className="profile-picture"
                                    />
                                    <div>
                                        <p className="account-name">{fullName}</p>  {/* Fallback for full name */}
                                        <p className="account-email">{email}</p>   {/* Fallback for email */}
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
