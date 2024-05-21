
import React, { useState } from 'react';

function Signup() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [usertype, setusertype] = useState('');
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
                body: JSON.stringify({ firstname, lastname, usertype, team, email, password })
            });

            if (!response.ok) {
                throw new Error('response error');
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
                Usertype: 
                <select value={usertype} onChange={(e) => setusertype(e.target.value)} required>
                    <option value="">Select an option</option>
                    <option value='Admin'>Admin</option>
                    <option value='Tester'>Tester</option>
                </select>
            </label>
            <label>
                Team: 
                <select value={team} onChange={(e) => setteam(e.target.value)} required>
                    <option value="">Select an option</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value='F'>F</option>
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