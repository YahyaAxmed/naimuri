import React, { useEffect, useState } from 'react';

function UserBookingDate() {
  const [bookingDate, setBookingDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7001/api/reservation/20500')
      .then((response) => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.error || 'Network response was not ok') });
        }
        return response.json();
      })
      .then((data) => {
        setBookingDate(data.booking_date);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
        console.error('Fetch error:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Booking Date</h1>
      <p>{bookingDate}</p>
    </div>
  );
}

export default UserBookingDate;
