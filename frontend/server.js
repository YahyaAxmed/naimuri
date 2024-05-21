const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'naimuri'
});

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());



app.listen(port, () => console.log(`Server running on port ${port}`));
