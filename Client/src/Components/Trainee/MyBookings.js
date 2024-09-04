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

  const specialRequests = [
    { id: 'R1', message: 'Need a seat near the window', status: 'In Progress' },
    { id: 'R2', message: 'Prefer a seat in a quieter area', status: 'Done' },
  ];

  const handleCancel = (id) => {
    // Handle booking cancellation logic here
    alert(`Booking ${id} cancelled`);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex p-6">
      {/* Left Side - Bookings */}
      <div className="flex-1">
        {/* Upcoming Bookings Section */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg mb-6">
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
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
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

      {/* Right Side - Special Requests */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-6" style={{ maxWidth: '600px', maxHeight: '700px' }}>
        <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
        <div className="space-y-4">
          {specialRequests.map((request) => (
            <div key={request.id} className="p-4 border rounded-lg">
              <p className="text-sm"><strong>Request ID:</strong> {request.id}</p>
              <p className="text-sm"><strong>Message:</strong> {request.message}</p>
              <p className={`text-sm mt-2 font-bold ${request.status === 'In Progress' ? 'text-yellow-600' : request.status === 'Done' ? 'text-green-600' : 'text-red-600'}`}>
                <strong>Status:</strong> {request.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
