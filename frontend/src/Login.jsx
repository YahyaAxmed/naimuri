import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({email, password});
    try {
      const response = await axios.post('http://localhost:7001/api/login', { email, password });
      const { success, user, message } = response.data;
      if (success) {
        console.log('LOGIN SUCCESS');
        console.log(response.data);
        console.log(user.team_id);
        //console.log(localStorage.getItem('user'));
        // Handle successful login (e.g., set user data in local storage)
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('teamId', JSON.stringify(user.team_id));
        // const storedUser = JSON.parse(localStorage.getItem('user'));
        // console.log('StoredUser');
        // console.log(storedUser);

        onLogin(); // Call the onLogin function passed as a prop
        navigate('/dashboard');
      } else {
        console.log('LOGIN FAILED');
        setError(message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred while logging in');
      console.error('Login error:', error);
    }

    // try {
    //   const response = await axios.post('http://localhost:7001/api/login', { email, password });
    //   const userData = response.data;

    //   // Handle authentication success
    //   console.log('User data:', userData);
    // } catch (error) {
    //   console.error('Login failed:', error.response.data.error);
    //   setError(error.response.data.error);
    // }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Login;