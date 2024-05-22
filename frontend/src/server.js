const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5050;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19920531',
  database: 'naimuri'
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query to check user credentials
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {

    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }

    if (results.length > 0) {
      const user = results[0];

      res.json(user);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
