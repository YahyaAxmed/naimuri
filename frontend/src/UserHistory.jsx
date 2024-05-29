import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingDate from './UserBookingDate';
import BookingMonth from './UserBookingMonth';
import BookingWeek from './UserBookingWeek';
import BookingNumber from './UserBookingNumber';
import BookingStatus from './UserBookingStatus';
import BookingEquipment from './UserBookingEquipment';
import BookingTester from './UserBookingTester';
import BookingTeam from './UserBookingTeam';
//import './App.css';
import './App.css';  // Import the CSS file

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
      <div style={{left: 43, top: 82, position: 'fixed', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', wordWrap: 'break-word'}}>history</div>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id} className={`reservation-card ${visibleDetails ? 'collapsed':'expanded'}`}>
            <div style={{left: 20, top: 20, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', wordWrap: 'break-word'}}>
            <BookingDate bookingDate={reservation.bookingDate} />
            </div>
            <div style={{left: 70, top: 20, position: 'absolute', color: '#FF0000', fontSize: 36, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', wordWrap: 'break-word'}}>
            <BookingMonth  bookingMonth={reservation.bookingMonth} />
            </div>
            <div style={{left: 20, top: 70, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', wordWrap: 'break-word'}}>
            <BookingWeek  bookingWeek={reservation.bookingWeek} />
            </div>
            <div style={{textAlign: 'right', right:20, top:15 ,position: 'relative', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '300', textTransform: 'uppercase', wordWrap: 'break-word'}}>
            <BookingNumber bookingNumber={reservation.id} />
            </div>
            <div style={{textAlign: 'right', right:20, top:35 ,position: 'relative', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', textTransform: 'capitalize', wordWrap: 'break-word'}}>
            <BookingStatus bookingStatus={reservation.checked_in} />
            </div>
            {visibleDetails[reservation.id] && (
              <>
                <div style={{left: 20, top: 100, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                  Total Equipment:
                </div>
                <div style={{left: 20, top: 130, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '300', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                <BookingEquipment bookingEquipment={reservation.equipments_booked} />
                </div>
                <div style={{left: 20, top: 160, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                  Total Attendees:
                </div>
                <div style={{left: 20, top: 190, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '300', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                <BookingTester bookingTester={reservation.attendees} />
                </div>
                <div style={{left: 20, top: 220, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                  Tester:
                </div>
                <div style={{left: 20, top: 250, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '300', textTransform: 'capitalize', wordWrap: 'break-word'}}>
                <BookingTeam bookingTeam={reservation.teamName} />
                </div>
              </>
            )}
            <button style={{width: 144, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 105, top: 110, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}
             onClick={() => toggleDetails(reservation.id)}>
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