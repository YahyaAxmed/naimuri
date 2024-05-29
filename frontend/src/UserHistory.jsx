import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingDate from './UserBookingDate';
import BookingNumber from './UserBookingNumber';
import BookingStatus from './UserBookingStatus';
import BookingEquipment from './UserBookingEquipment';
import BookingTester from './UserBookingTester';
import BookingTeam from './UserBookingTeam';
//import './App.css';
import './UserHistory.css';  // Import the CSS file

function UserHistory() {
  const [reservations, setReservations] = useState([]);
  const teamId = localStorage.getItem('teamId');
  const [visibleDetails, setVisibleDetails] = useState({});

  useEffect(() => {
    // Fetch reservations data from the backend
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:7001/api/reservations/'+teamId); // Assuming this endpoint returns all reservations
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

  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
      <div style={{left: 43, top: 82, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', wordWrap: 'break-word'}}>history</div>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id} className="reservation-card" style={{top: 200}}>
            <BookingDate bookingDate={reservation.bookingDate} />
            <BookingNumber bookingNumber={reservation.id} />
            <BookingStatus bookingStatus={reservation.checked_in} />
            {visibleDetails[reservation.id] && (
              <>
                <BookingEquipment bookingEquipment={reservation.equipments_booked} />
                <BookingTester bookingTester={reservation.attendees} />
                <BookingTeam bookingTeam={reservation.teamName} />
              </>
            )}
            <button onClick={() => toggleDetails(reservation.id)}>
              {visibleDetails[reservation.id] ? 'Hide Details' : 'Details'}
            </button>
            {/* <BookingEquipment bookingEquipment={reservation.equipments_booked} />
            <BookingTester bookingTester={reservation.attendees} />
            <BookingTeam bookingTeam={reservation.teamName} /> 
            <Link to={`/history/${reservation.id}`}>
              <button>Details</button>
            </Link>*/}
          </div>
        ))
      ) : (
        <p>No reservations found</p>
      )}
    </div>
  );
}

export default UserHistory;