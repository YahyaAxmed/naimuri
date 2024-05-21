
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();

            if (result.success) {
                 alert('Welcome')
                 console.log('Login successful:', result);
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
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
