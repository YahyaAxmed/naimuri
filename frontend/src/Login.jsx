import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:7001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();

            if (result.success) {
                console.log('Login successful:', result);
                if (result.userType === 1) {
                 navigate('/admin');
                } else {
                    navigate('/user');
                }
                }
             else {
                console.error('Login failed:', result.message);
                alert('Invalid credentials. Please try again.');
             }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="login-center">
            <form onSubmit={handleSubmit}>
                <label>
                    Email Address:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className='make-left' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? 'Hide' : 'Show'}
                        </span>
                    </div>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
