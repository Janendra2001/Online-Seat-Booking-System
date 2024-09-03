import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookSeats() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [specialRequest, setSpecialRequest] = useState('');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation here
  };

  const handleSpecialRequestSubmit = () => {
    // Handle special request submission here
  };

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      
      
      {/* Main Content */}
      <div className="flex justify-between items-start mt-8">
        {/* Seat Selection Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg max-w-md" style={{ maxWidth: '1000px', maxHeight: '1000px' }}>
          <h1 className="text-2xl font-bold mb-4">Welcome John!</h1>
          <h2 className="text-lg mb-4">Select a Seat for Booking</h2>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSeatClick(index + 1)}
                className={`w-12 h-12 rounded-md text-center font-bold ${
                  index === selectedSeat - 1
                    ? 'bg-blue-500 text-white'
                    : index % 3 === 0
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Not Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>Selected</span>
            </div>
          </div>
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full"
          >
            Confirm Booking
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-8 max-w-md">
          <h2 className="text-xl mb-4 text-center">Select the date</h2>
          <div className="text-center mb-8">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="bg-gray-200 px-4 py-2 rounded-md text-center w-full"
            />
          </div>
          <h2 className="text-xl mb-4 text-center">Make a Special Request</h2>
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4"
            placeholder="If you have any special requests or requirements for your seating arrangement, please specify them in the box below:"
          ></textarea>
          <button
            onClick={handleSpecialRequestSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookSeats;
