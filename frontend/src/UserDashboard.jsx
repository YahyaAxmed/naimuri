import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BookingDate from './UserBookingDate';
import BookingStatus from './UserBookingStatus';
import BookingEquipment from './UserBookingEquipment';
import BookingNumber from './UserBookingNumber';
import BookingTeam from './UserBookingTeam';
import BookingRoom from './UserBookingRoom';
// import './App.css';
import './UserDashboard.css';  // Import the CSS file

function UserDashboard() {
  const [reservations, setReservations] = useState([]);
  const teamId = localStorage.getItem('teamId');
  const [visibleDetails, setVisibleDetails] = useState({});
  const [checkInMessage, setCheckInMessage] = useState('');

  useEffect(() => {
    // Fetch reservations data from the backend
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:7001/api/dashboard/${teamId}`); // Assuming this endpoint returns all reservations
        const data = await response.json();
        setReservations(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, [teamId]);

  const toggleDetails = (id) => {
    setVisibleDetails(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleCheckIn = async (id) => {
    try {
      const response = await fetch(`http://localhost:7001/api/reservations/checkin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (response.ok) {
        // Filter out the checked-in reservation from the state
        setReservations(prevReservations =>
          prevReservations.filter(reservation => reservation.id !== id)
        );
        console.log(result.message);
        setCheckInMessage('Thank you, your check-in time has been successfully logged.');
        // Remove the message after a few seconds
        setTimeout(() => {
          setCheckInMessage('');
        }, 8000);
      } else {
        console.error('Check-in failed:', result.error);
      }
    } catch (error) {
      console.error('Error during check-in:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {checkInMessage && <p className="check-in-message">{checkInMessage}</p>}
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id} className="dashboard-card">
            <BookingDate bookingDate={reservation.bookingDate} />
            <BookingTeam bookingTeam={reservation.teamName} />
            <BookingRoom bookingRoom={reservation.roomName} />

            {visibleDetails[reservation.id] && (
              <>
                <BookingEquipment bookingEquipment={reservation.equipments_booked} />
                <BookingNumber bookingNumber={reservation.id} />
                <button onClick={() => handleCheckIn(reservation.id)}>
                  Check-In
                </button>
              </>
            )}
            <button onClick={() => toggleDetails(reservation.id)}>
              {visibleDetails[reservation.id] ? 'Hide Details' : 'View Details'}
            </button>
            <br />
            <Link to="/reservation">Modify</Link> {/* Use Link to navigate to UserReservation */}
          </div>
        ))
      ) : (
        <p>No reservations found</p>
      )}
    </div>
  );
}

export default UserDashboard;
