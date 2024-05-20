import React, { useState } from 'react';
import Modal from 'react-modal';
import { login } from '../../api/apiService';
import './LoginDialog.css';

const LoginDialog = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login({ email, password });
            onLogin(response.data);
            onClose();
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="overlay">
            <h2>Login to Continue</h2>
            {error && <p className="error">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login Now</button>
        </Modal>
    );
};

export default LoginDialog;
