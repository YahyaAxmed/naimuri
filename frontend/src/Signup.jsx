import React, { useState } from 'react';
import './App.css';

function Signup() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [team, setteam] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:7001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname, lastname, team, email, password })
            });

            const result = await response.json();

            if (result.success) {
                console.log('Signup successful');
            } else {
                console.log(result.message);
            }
            console.log('Form submitted successfully:', response);
        } catch (error) {
            console.error('fetch error testing catch', error); // Log any errors that occur during the fetch
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Firstname: 
                <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} required />
            </label>
            <label>
                Lastname: 
                <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} required />
            </label>
            <label>
                Team: 
                <select value={team} onChange={(e) => setteam(e.target.value)} required>
                    <option value="">Select an option</option>
                    <option value='Admin'>Admin</option>
                    <option value='Team A'>Team A</option>
                    <option value='Team B'>Team B</option>
                    <option value='Team C'>Team C</option>
                    <option value='Team D'>Team D</option>
                </select>
            </label>
            <label>
                Email Address: 
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
            </label>
            <label>
                Password: 
                <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Signup;