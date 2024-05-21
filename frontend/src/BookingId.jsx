import React, { useEffect, useState } from 'react';

function UserBookingId() {
  const [bookingId, setBookingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7001/api/reservation/20500') // Full URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        //console.log(response)
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setBookingId(data.id);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {bookingId}
    </div>
  );
}

export default UserBookingId;




/*
import React from 'react';

function UserBookingNumber() {
  const reservationId = 20500; // Assuming 20500 is the reservation ID

  return (
    <div>
      <h1>Reservation ID</h1>
      <p>{reservationId}</p>
    </div>
  );
}

export default UserBookingNumber;
*/