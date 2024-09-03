import React from 'react';

function MyBookings() {
  const upcomingBookings = [
    { id: 'S1', date: '2024/8/31' },
    { id: 'S3', date: '2024/9/4' },
  ];

  const pastBookings = [
    { id: 'S1', date: '2024/8/22' },
    { id: 'S3', date: '2024/8/4' },
  ];

  const handleCancel = (id) => {
    // Handle booking cancellation logic here
    alert(`Booking ${id} cancelled`);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center">
      

      {/* Upcoming Bookings Section */}
      <div className="w-3/4 bg-green-100 p-6 rounded-lg shadow-lg mt-8" style={{ maxWidth: '800px', maxHeight: '800px' }}>
        <h2 className="text-xl font-bold mb-4 text-center">Upcoming Bookings</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Booking ID</th>
              <th className="py-2">Date</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {upcomingBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2">{booking.id}</td>
                <td className="py-2">{booking.date}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Past Bookings Section */}
      <div className="w-3/4 bg-gray-200 p-6 rounded-lg shadow-lg mt-8" style={{ maxWidth: '800px', maxHeight: '800px' }}>
        <h2 className="text-xl font-bold mb-4 text-center">Past Bookings</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Booking ID</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {pastBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2">{booking.id}</td>
                <td className="py-2">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings;
