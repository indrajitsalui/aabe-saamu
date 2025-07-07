import React, { useState } from 'react';
import './Auth.css';
import { login } from '../../api/apiService';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSwitchToSignup, onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // 👈 add this

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            onLoginSuccess(response.data); // store authToken and userData
            onClose();                      // close the modal
            navigate('/home');             // 👈 redirect to /home
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="">
            <h2 className="mb-4">Login to Continue</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <input
                        className="bg-[#222222] py-2 px-4 rounded w-full"
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        className="bg-[#222222] py-2 px-4 rounded w-full"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    {error && <p className="error-message text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg w-full"
                    >
                        Login Now
                    </button>
                </div>
            </form>
            <div className="mt-6 text-center">
                <div className="flex justify-center gap-2">
                    <p>New user?</p>
                    <button
                        onClick={onSwitchToSignup}
                        className="text-[#D21F1D] underline font-medium"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
