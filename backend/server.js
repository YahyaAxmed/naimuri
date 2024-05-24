const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 7001;

app.use(cors());

// Create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',

    password: '19920531', // Change to your user password 
    database: 'Naimuri' // Change to your database name
});

// Connect to MySQL database
con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse request body
app.use(express.json());
app.use(cors());
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Public')));

// Route to serve the login HTML page
app.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        let sql = `SELECT email, password, team_id from user WHERE email = '${email}' AND password = '${password}';`;
        // Execute the SQL query
        con.query(sql, function(err, results) {
            if (err) {
                throw err;
            }
            console.log('Query successful');
            console.log(results);
  
            // Check if any rows were returned
            if (results.length > 0) {
                const userType = results[0].team_id; // Extract the user type
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
        const { firstname, lastname, team, email, password } = req.body; // Extract form data from request body

        let sqlcheck = `SELECT email FROM user WHERE email = '${email}'`;
        con.query(sqlcheck, (err, results) => {
            if (err) {
                console.error('Error checking email:', err);
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            if (results.length > 0) {
                console.log('Email already in use');
                console.log(results);
                return res.json({ success: false, message: 'Email already in use' });
            }

            let sqlteam = `SELECT id FROM team WHERE name = '${team}'`;
            con.query(sqlteam, (err, results) => {
                if (err) {
                    console.error('Error selecting team from database:', err);
                    return res.status(500).json({ success: false, message: 'Database error' });
                }

                if (results.length === 0) {
                    console.error('No team found');
                    return res.status(404).json({ success: false, message: 'Team not found' });
                }

                const team_id = results[0].id;
                let sqlUser = `INSERT INTO user (first_name, last_name, email, password, team_id) VALUES ('${firstname}', '${lastname}', '${email}', '${password}', '${team_id}')`;
                con.query(sqlUser, (err, results) => {
                    if (err) {
                        console.error('Error inserting user:', err);
                        return res.status(500).json({ success: false, message: 'Database error' });
                    }
                    console.log('User inserted successfully');
                    console.log(results);
                    res.status(200).json({ success: true, message: 'Signup successful' });
                });
            });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

  
// Route to retrieve reservation by ID
app.get('/api/reservation/:reservationId', (req, res) => {
    const id = req.params.reservationId;
    console.log('Received request for /api/reservation/' + id);

    const query = 'SELECT r.id, DATE_FORMAT(booking_date, "%d") AS booking_date, DATE_FORMAT(booking_date, "%W") AS booking_week,  DATE_FORMAT(booking_date, "%b") AS booking_month, checked_in, attendees, equipment_id, e.name as equipmentName, team_id, t.name as teamName FROM reservation as r LEFT JOIN equipment as e ON e.id = r.equipment_id LEFT JOIN team as t ON t.id = team_id WHERE r.id = ? ';
    con.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
            return;
        }

        if (results.length > 0) {
            const reservation = results[0];
            console.log('Sending response:', reservation);
            res.json(reservation);
        } else {
            console.log('No reservations found');
            res.status(404).json({ error: 'No reservations found' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
