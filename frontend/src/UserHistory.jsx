import logo from './logo.svg';
import React from 'react';
import BookingDate from './UserBookingDate';
import BookingNumber from './UserBookingNumber';
import BookingStatus from './UserBookingStatus';
import BookingEquipment from './UserBookingEquipment';
import BookingTester from './UserBookingTester';
import BookingTeam from './UserBookingTeam';
//import './App.css';

function UserHistory() {
  return (
    <div>
        <h1>History</h1>
        <BookingDate></BookingDate>
        <BookingNumber></BookingNumber>
        <BookingStatus></BookingStatus>
        <BookingEquipment></BookingEquipment>
        <BookingTester></BookingTester>
        <BookingTeam></BookingTeam>
    </div>
  );
}

export default UserHistory;