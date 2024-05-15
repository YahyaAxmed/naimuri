const express = require('express'); // Import the Express.js module
const mysql = require('mysql'); // Import the MySQL module
const path = require('path'); // Import the Path module

const app = express(); // Create an instance of the Express application
const port = 7000; // Define the port number on which the server will listen


// Create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change to your user password 
    database: '' // Change to your database name
});

// Connect to MySQL database
con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Set up middleware to parse request body
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Public')));

// Route to serve the login HTML page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Serve the login form
app.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Received login request:', { email, password });

        let sql = `select email, password from user where email ='${email}' and password = '${password}'`;
        // Execute the SQL query
        con.query(sql, function(err, results) {
            if (err) {
                throw err;
            }
            console.log('Query successful');
            console.log(results);

            // Check if any rows were returned
            if (results.length > 0) {
                console.log('Welcome');
            } else {
                console.log('No user found with the specified login credentials.');
            }
            // Send a successful response to the client
            res.sendStatus(200);
        });
    } catch (error) {
        console.error('Error:', error);
        // Send an error response to the client
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}/login'`);
});