import React, { useEffect, useState } from 'react';

function BookingTester() {
  const [bookingTester, setbookingTester] = useState(null);
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
        setbookingTester(data.attendees);
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
        {bookingTester}
    </div>
  );
}

export default BookingTester;
