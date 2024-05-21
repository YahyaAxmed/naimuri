import React, { useEffect, useState } from 'react';

function UserBookingStatus() {
  const [bookingStatus, setBookingStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7001/api/reservation/20500')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBookingStatus(data.checked_in);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
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
      <h1>Status</h1>
      <p>{bookingStatus === 1 ? 'Checked In' : 'Cancelled'}</p>
    </div>
  );
}

export default UserBookingStatus;
