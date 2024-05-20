import React, { useState } from 'react';
import './Auth.css';
import { login } from '../../api/apiService';

const LoginForm = ({ onSwitchToSignup, onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login( email, password );
            onLoginSuccess(response.data);
            onClose();
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login to Continue</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login Now</button>
            </form>
            <div className="auth-footer">
                <p>New user? <button onClick={onSwitchToSignup}>Sign Up</button></p>
            </div>
        </div>
    );
};

export default LoginForm;
