const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 7001;

// Create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19920531', // Change to your user password 
    database: 'naimuri' // Change to your database name
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

app.use(cors());
app.use(express.json());
// Serve the login form
app.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;

        let sql = `SELECT u.email, u.password, ut.user_type_name
        FROM user u
        INNER JOIN user_type ut ON u.user_type_id = ut.user_type_id
        WHERE u.email = '${email}' AND u.password = '${password}';`;
        // Execute the SQL query
        con.query(sql, function(err, results) {
            if (err) {
                throw err;
            }
            console.log('Query successful');
            console.log(results);

            // Check if any rows were returned
            if (results.length > 0) {

                const userType = results[0].user_type_name; // Extract the user type
                console.log('Welcome');
                res.json({ success: true, userType: userType ,message: ' Login Susseccful' }); // Send success response
              } else {
                console.log('No user found with the specified login credentials.');
                res.json({ success: false, message: 'Invalid credentials' }); // Send failure response
              }
        });
    } catch (error) {
        console.error('Error:', error);
        // Send an error response to the client
        res.status(500).send('Internal Server Error');
    }
});

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
    console.log(`Server is listening at http://localhost:${port}/login`);
    console.log(`Server is listening at http://localhost:${port}/signup`);
});

