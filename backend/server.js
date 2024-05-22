const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 7001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change to your user password 
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

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Public')));

// Route to serve the login HTML page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login.jsx'));
});

// Route to retrieve reservation by ID
app.get('/api/reservation/:reservationId', (req, res) => {
    const id = req.params.reservationId;
    console.log('Received request for /api/reservation/' + id);

    const query = `SELECT r.id, DATE_FORMAT(booking_date, "%W, %d-%M") AS booking_date,equipments_booked, checked_in, attendees,team_id, t.name as teamName 
                   FROM reservation as r 
                   LEFT JOIN team as t ON t.id = team_id 
                   WHERE r.id = ?`;
    con.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An internal server error occurred', details: error });
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


// Route to retrieve equipment data
app.get('/api/equipment', (req, res) => {
    const query = 'SELECT * FROM equipment';
    con.query(query, (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
            return;
        }

        res.json(results);
        
    });
});

// Route to retrieve room data
app.get('/api/room', (req, res) => {
    const query = 'SELECT * FROM room';
    con.query(query, (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
            return;
        }

        res.json(results);
        
    });
});

// New endpoint to handle reservation creation
app.post('/api/reservation', (req, res) => {
    const { equipments_booked, booking_date, attendees, room_id, team_id } = req.body;
    
    if (!equipments_booked || !booking_date || !attendees || !room_id || !team_id) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const query = 'INSERT INTO reservation (equipments_booked, team_id, room_id, booking_date, checked_in, Attendees) VALUES (?, ?, ?, ?, 0, ?)';
    con.query(query, [equipments_booked, team_id, room_id, booking_date, attendees], (error, results) => {
      if (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
      } else {
        res.status(201).json({ message: 'Reservation created successfully', reservationId: results.insertId });
      }
    });
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
