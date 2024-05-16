const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5050;

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '19920531',
  database: 'Naimuri'
});

app.use(bodyParser.json());

// Route to handle user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      if (user.team_id === 1) {
        // If team_id is 1 (Admin), send response indicating admin
        res.json({ layout: 'admin' });
      } else {
        // If team_id is not 1, send response indicating user
        res.json({ layout: 'user' });
      }
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
