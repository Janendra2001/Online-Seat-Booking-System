import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../images/profile.jpg'
import sltlogo from '../../images/slt-mobitel-logo.png'

const TraineeDashboard = () => {
  return (
    <div>{/* Navigation Bar */}
    <div className="flex justify-between items-center p-4 bg-gray-100 mt-0 mr-0">
      <img src={sltlogo} alt="SLT Mobitel Logo" className="w-32 h-auto" />
      <div className="flex space-x-8">
        <Link to="/traineedashboard/:traineeId/book-seats" className="text-xl font-semibold">
          Book a Seat
        </Link>
        <Link to="/traineedashboard/:traineeId/my-bookings" className="text-xl font-semibold">
          My Bookings
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          LogOut
        </button>
      </div>
    </div>
    </div>
  )
}

export default TraineeDashboard