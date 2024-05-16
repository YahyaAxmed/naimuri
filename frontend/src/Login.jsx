import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
    // Get the form and the password reveal checkbox
    const form = document.getElementById('loginForm');
    const reveal = document.getElementById('show');
    const changeText = document.getElementById('show-text'); // Get the span element to change text

    // Add an event listener for form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        await loginSubmit(); // Call the loginSubmit function
    });

    // Define the loginSubmit function
    async function loginSubmit() {
        // Get the email and password values from the form
        const mailValue = document.getElementById('email').value;
        const passValue = document.getElementById('pass').value;
        console.log(mailValue);
        console.log(passValue);

        try {
            // Send a POST request to the server with email and password data
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: mailValue,
                    password: passValue
                })
            });
            
            // Check if the response is not ok
            if (!response.ok) {
                throw new Error('testing new error');
            }
            console.log('Form submitted successfully:', response);
        } catch (error) {
            console.error('fetch error testing catch', error);
        }
    }

    // Add an event listener for the password reveal checkbox
    reveal.addEventListener('change', function() {
        const passField = document.getElementById('pass');
        // Toggle the password field visibility based on the checkbox state
        if (passField.type === 'password') {
            passField.type = 'text';
            changeText.textContent = 'Hide'; // Change text to 'Hide' when checkbox is checked
        } else {
            passField.type = 'password';
            changeText.textContent = 'Show'; // Change text to 'Show' when checkbox is unchecked
        }
    });
});

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form action="/login" method="post" id="loginForm">
          <label for='email'>Email:
          <input type="text" id="email" name="email"/>
          </label>
        <div>
          <label for="pass">Password:
          <input type="password" id="pass" name="password"/>
          <span id="show-text">Show</span>
          <input id="show" type="checkbox"/>
          </label>
          <label for="remember">Remember me<input type="radio"/></label> 
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
