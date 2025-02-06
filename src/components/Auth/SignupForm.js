import React, { useState } from 'react';
import './Auth.css';
import { register } from '../../api/apiService';

const SignupForm = ({ onSwitchToLogin, onClose }) => {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            await register( full_name, email,  password ,phone_number);
            onClose();
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <h2 className="mb-4">Create Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div><input className="bg-[#222222] py-2 px-4 rounded w-full"
                    type="text"
                    placeholder="Full Name"
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                /></div>
                <div><input className="bg-[#222222] py-2 px-4 rounded w-full"
                    type="email"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /></div>
                <div><input className="bg-[#222222] py-2 px-4 rounded w-full"
                    type="text"
                    placeholder="Phone"
                    value={phone_number}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                /></div>
                <div><input className="bg-[#222222] py-2 px-4 rounded w-full"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /></div>
                <div><input className="bg-[#222222] py-2 px-4 rounded w-full"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                /></div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg w-full">Create Account</button>
            </form>
            <div className="mt-6 text-center">
                <div className="flex justify-center gap-2">
                    <p>Already have an account?</p>
                 <button onClick={onSwitchToLogin} className="text-[#D21F1D] underline font-medium">Login</button>
                 </div>
            </div>
        </div>
    );
};

export default SignupForm;
