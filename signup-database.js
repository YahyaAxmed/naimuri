const express = require('express'); // Import the Express.js module
const mysql = require('mysql'); // Import the MySQL module
const path = require('path'); // Import the Path module

const app = express(); // Create an instance of the Express application
const port = 5000; // Define the port number on which the server will listen

// Create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change to your user password 
    database: '' // Change to your database name
});

// Connect to MySQL
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database'); // Log a message when connected successfully
});

// Add middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Route to serve the signup HTML page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html')); // Send the signup.html file when root route is accessed
});

// Route handler to handle form submission
app.post('/signup', (req, res) => {
    try {
        const { firstname, lastname, usertype, team, email, password } = req.body; // Extract form data from request body

        let sqlnum = 'SELECT user_id FROM user ORDER BY user_id DESC LIMIT 1;'; // Query to select the last user_id

        con.query(sqlnum, function(err, results) { // Execute the SQL query
            if (err) {
                throw err;
            }

            if (results.length > 0) { // Check if any results were returned
                const lastUserId = results[0].user_id; // Extract the last user_id

                let sqlTeam = `INSERT INTO team (team_name) VALUES ('${team}')`; // SQL query to insert into 'team' table
                let sqlUserType = `INSERT INTO user_type (user_type_name) VALUES ('${usertype}')`; // SQL query to insert into 'user_type' table
                let sqlUser = `INSERT INTO user (first_name, last_name, email, password, user_type_id, team_id) VALUES ('${firstname}', '${lastname}', '${email}', '${password}', ${lastUserId + 1}, ${lastUserId + 1})`; // SQL query to insert into 'user' table, using the last user_id

                con.query(sqlTeam, function(err, results) { // Execute the SQL query to insert into 'team' table
                    if (err) {
                        throw err;
                    }
                    console.log("Data on table team inserted successfully!"); // Log a success message
                });

                con.query(sqlUserType, function(err, results) { // Execute the SQL query to insert into 'user_type' table
                    if (err) {
                        throw err;
                    }
                    console.log("Data on table user_type inserted successfully!"); // Log a success message
                });

                con.query(sqlUser, function(err, results) { // Execute the SQL query to insert into 'user' table
                    if (err) {
                        throw err;
                    }
                    console.log("Data inserted on table user successfully!"); // Log a success message
                });
            } else {
                console.error("No user found."); // Log an error message if no user was found
            }
        });

        res.sendStatus(200); // Send a success response
    } catch (error) {
        console.error('Error:', error); // Log any errors that occur
        res.status(500).send('Internal Server Error'); // Send a 500 Internal Server Error response
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/signup`); // Log a message when the server starts listening
});

