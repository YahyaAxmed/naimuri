import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomDatePicker from './UserDatePicker';
import EquipmentPicker from './UserEquipmentPicker';
import TotalEquipAndTester from './UserTotalEquipAndTester';
import UserRoomBooking from './UserRoomBooking';
import './App.css';

function UserReservation() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEquipmentNames, setSelectedEquipmentNames] = useState('');
  const [greatestTesterRequired, setGreatestTesterRequired] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [attendees, setAttendees] = useState(1);
  const [message, setMessage] = useState('');

  const teamId = localStorage.getItem('teamId');

  useEffect(() => {
    if (id) {
      // Fetch existing reservation details to prefill the form
      const fetchReservationDetails = async () => {
        try {
          const response = await fetch(`http://localhost:7001/api/reservation/${id}`);
          const data = await response.json();
          // Populate state with fetched data
          setSelectedDate(new Date(data.booking_date));
          setSelectedEquipmentNames(data.equipments_booked);
          setGreatestTesterRequired(data.greatestTesterRequired);
          setSelectedRoom(data.room_id); // Adjust this as per your data structure
          setAttendees(data.attendees);
        } catch (error) {
          console.error('Error fetching reservation details:', error);
        }
      };

      fetchReservationDetails();
    }
  }, [id]);

  const handleBooking = () => {
    const reservation = {
      equipments_booked: selectedEquipmentNames,
      booking_date: selectedDate,
      attendees: parseInt(attendees),
      room_id: selectedRoom ? selectedRoom.id : null,
      team_id: teamId,
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