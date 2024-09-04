import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ManageSeats = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [specialRequests, setSpecialRequests] = useState([
    { id: 1, traineeId: 'T001', date: '2024/8/25', message: 'Need a seat near the window', status: 'In Progress' },
    { id: 4, traineeId: 'T004', date: '2024/8/27', message: 'Prefer a seat in a quieter area', status: 'In Progress' },
    { id: 13, traineeId: 'T005', date: '2024/8/30', message: 'Need a seat near the window', status: 'In Progress' },
    { id: 2, traineeId: 'T002', date: '2024/8/31', message: 'Prefer a seat in a quieter area', status: 'In Progress' },
  ]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleConfirmBooking = () => {
    if (selectedSeat) {
      alert(`Seat ${selectedSeat} booked successfully!`);
    } else {
      alert('Please select a seat to reserve.');
    }
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleStatusChange = (status) => {
    setSpecialRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === selectedRequest.id ? { ...request, status } : request
      )
    );
    setSelectedRequest(null); // Close the popup after updating
  };

  const closePopup = () => {
    setSelectedRequest(null);
  };

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mr-6">
        {/* Date Picker */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Select the date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="p-2 border rounded-lg shadow-sm"
            calendarClassName="bg-white"
          />
        </div>

        {/* Seat Selection */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Select a Seat to Reserve</h3>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {seats.map((seat) => (
              <div
                key={seat}
                className={`flex items-center justify-center w-12 h-12 cursor-pointer border rounded-lg text-white ${
                  selectedSeat === seat
                    ? 'bg-blue-600'
                    : 'bg-gray-600 hover:bg-blue-500'
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>

        {/* Seat Legend */}
        <div className="mb-4 flex justify-center gap-8">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-600 rounded-lg mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded-lg mr-2"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-600 rounded-lg mr-2"></div>
            <span>Not Available</span>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={handleConfirmBooking}
          >
            Confirm Reservation
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
        <div className="space-y-4">
          {specialRequests.map((request) => (
            <div
              key={request.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                request.status === 'In Progress'
                  ? 'bg-gray-400'
                  : request.status === 'Done'
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}
              onClick={() => handleRequestClick(request)}
            >
              <p className="text-sm font-bold">Trainee ID: {request.traineeId}</p>
              <p className="text-sm"><strong>Date:</strong> {request.date}</p>
              <p className="text-sm">{request.message}</p>
              <p className="text-sm font-semibold">Status: {request.status}</p>
            </div>
          ))}
        </div>

        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Special Request Details</h3>
              <p><strong>Trainee ID:</strong> {selectedRequest.traineeId}</p>
              <p><strong>Date:</strong> {selectedRequest.date}</p>
              <p className="mt-2"><strong>Message:</strong> {selectedRequest.message}</p>
              <div className="mt-4 flex gap-2">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => handleStatusChange('In Progress')}
                >
                  In Progress
                </button>
                <button
                  className="bg-green-600 text-white py-2 px-4 rounded"
                  onClick={() => handleStatusChange('Done')}
                >
                  Done
                </button>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => handleStatusChange('Declined')}
                >
                  Declined
                </button>
              </div>
              <button
                className="mt-4 bg-gray-600 text-white py-2 px-4 rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSeats;
