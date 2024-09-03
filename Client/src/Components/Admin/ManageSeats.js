import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ManageSeats = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSeat, setSelectedSeat] = useState(null);

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

    const seats = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="p-6 max-w-4xl mx-auto">
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
    );
};

export default ManageSeats;