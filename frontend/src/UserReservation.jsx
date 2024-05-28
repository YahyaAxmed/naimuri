import React, { useState } from 'react';
import CustomDatePicker from './UserDatePicker';
import EquipmentPicker from './UserEquipmentPicker';
import TotalEquipAndTester from './UserTotalEquipAndTester';
import UserRoomBooking from './UserRoomBooking';

function UserReservation() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEquipmentNames, setSelectedEquipmentNames] = useState('');
  const [greatestTesterRequired, setGreatestTesterRequired] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [attendees, setAttendees] = useState(1);
  const [message, setMessage] = useState('');

  const teamId = localStorage.getItem('teamId');
  // console.log(storedUser);

  const handleBooking = () => {
    const reservation = {
      equipments_booked: selectedEquipmentNames,
      booking_date: selectedDate,
      attendees: parseInt(attendees),
      room_id: selectedRoom ? selectedRoom.id : null,
      team_id: teamId, // Assuming you have a way to get the team ID
    };

    fetch('http://localhost:7001/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => { throw new Error(err.error || 'Network response was not ok') });
      }
      return response.json();
    })
    .then(data => {
      setMessage('Thank you, the reservation has been sent to your team.');
    })
    .catch(error => {
      console.error('Fetch error:', error);
      setMessage('There was an error making the reservation. Please try again.');
    });
  };

  return (
    <div>
      <h1>Reservation</h1>
      <CustomDatePicker setSelectedDate={setSelectedDate} />
      <EquipmentPicker 
        setSelectedEquipmentNames={setSelectedEquipmentNames} 
        setGreatestTesterRequired={setGreatestTesterRequired}
      />
      <UserRoomBooking 
        setSelectedRoom={setSelectedRoom} 
        setAttendees={setAttendees}
        greatestTesterRequired={greatestTesterRequired}
      />
      <TotalEquipAndTester 
        selectedDate={selectedDate}
        selectedEquipmentNames={selectedEquipmentNames} 
        greatestTesterRequired={greatestTesterRequired} 
      />
      <button onClick={handleBooking}>Book Now</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UserReservation;
