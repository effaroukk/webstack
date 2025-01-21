import React, { useState } from 'react';

const Auth = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (endpoint) => {
        const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setMessage(data.message || data.error);
    };

    return (
        <div>
            <h2>My Digital Diary</h2>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button onClick={() => handleSubmit('register')}>Register</button>
            <button onClick={() => handleSubmit('login')}>Login</button>
            <p>{message}</p>
        </div>
    );
};

export default Auth;

