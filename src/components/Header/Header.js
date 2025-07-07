import React, { useState, useEffect } from 'react';
import './Header.css';
import Modal from '../Modal/Modal';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import { Link, useLocation } from 'react-router-dom'; // If using react-router
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);


    const location = useLocation(); // To detect the current route if using react-router
    const [activeLink, setActiveLink] = useState(location.pathname); // Set the initial active link based on the current route

    const handleClick = (path) => {
        setActiveLink(path); // Update the active link when a nav item is clicked
    };

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
        navigate('/');
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
        <header className="flex items-center justify-between w-full py-5 px-12 bg-[#080809] fixed z-50 border-b border-white border-opacity-15">
           <a href="/"><img src="/logo.svg" alt="AmeSabu" className="w-32 h-8" /></a>
           <nav className="flex gap-10 text-white">
            <Link
                to="/livetv"
                onClick={() => handleClick('/livetv')}
                className={activeLink === '/livetv' ? 'text-[#D31E1E] font-semibold' : ''}
            >
                Live TV
            </Link>
            <Link
                to="/a1productions"
                onClick={() => handleClick('/a1productions')}
                className={activeLink === '/a1productions' ? 'text-[#D31E1E] font-semibold' : ''}
            >
                A1 Productions
            </Link>
            <Link
                to="/advertisements"
                onClick={() => handleClick('/advertisements')}
                className={activeLink === '/advertisements' ? 'text-[#D31E1E] font-semibold' : ''}
            >
                Advertisements
            </Link>
        </nav>

            {isLoggedIn ? (
                    <div className="relative">
                        <button className="flex items-center gap-x-3" onClick={toggleDropdown}>
                            My Account
                            <img
                             src={profilePicture}  // Fallback for profile picture
                             alt="Profile"
                             className="w-12"
                            />
                        </button>
                        {showDropdown && (
                            <div className="bg-[#121212] border border-solid border-[#2C2C2C] absolute right-0 top-14 w-96 p-6 rounded-2xl my-account flex flex-col gap-5">
                                <div className="flex items-center gap-x-5">
                                    <img
                                        src={profilePicture}  // Fallback for profile picture
                                        alt="Profile"
                                        className="w-24"
                                    />
                                    <div className="">
                                        <p className="text-lg leading-relaxed">{fullName}</p>
                                        <p className="text-[#B3B3B3] text-sm leading-normal">{email}</p> 
                                        <p className="text-[#B3B3B3] text-sm">+91 9887667788</p>
                                    </div>
                                </div>
                              
                                    <button className="flex items-center justify-between">
                                        <div className="flex items-center gap-x-2">
                                        <img src="/watch_later.png" alt="watch later icon" className="w-6" />
                                        <p className="text-sm">Watch Later</p>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                        <p className="text-sm bg-[#D21F1D] py-1.5 px-2.5 rounded-2xl">5</p>
                                        <img src="/chevron_right.png" alt="watch later icon" className="w-6" />
                                        </div>
                                    </button>
                                    <button className="flex items-center justify-between">
                                        <div className="flex items-center gap-x-2">
                                        <img src="/favourties.png" alt="watch later icon" className="w-6" />
                                        <p className="text-sm">Favourites</p>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                        {/* <p className="text-sm bg-[#D21F1D] py-1.5 px-2.5 rounded-2xl">143</p> */}
                                        <img src="/chevron_right.png" alt="watch later icon" className="w-6" />
                                        </div>
                                    </button>
                                <div className="">
                                    <button onClick={handleLogout} className="w-full text-white bg-[#D21F1D] py-4 rounded-lg">Logout</button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="bg-white bg-opacity-20 py-2 px-3 rounded min-h-10 hover:bg-opacity-40" onClick={handleLoginClick}>Login Now</button>
                )}
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
