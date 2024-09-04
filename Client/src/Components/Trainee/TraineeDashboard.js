import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import profilePic from '../../images/profile.jpg';
import sltlogo from '../../images/slt-mobitel-logo.png';

const TraineeDashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4 bg-gray-100 mt-0 mr-0 fixed w-full z-10">
        <img src={sltlogo} alt="SLT Mobitel Logo" className="w-32 h-auto" />
        <div className="flex space-x-8">
          <NavLink
            to="/traineedashboard/traineeId/book-seats"
            className={({ isActive }) =>
              isActive ? 'text-xl font-semibold text-blue-500' : 'text-xl font-semibold'
            }
          >
            Book a Seat
          </NavLink>
          <NavLink
            to="/traineedashboard/traineeId/my-bookings"
            className={({ isActive }) =>
              isActive ? 'text-xl font-semibold text-blue-500' : 'text-xl font-semibold'
            }
          >
            My Bookings
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/traineedashboard/traineeId/profile">
            <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full cursor-pointer" />
          </NavLink>
          <button className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md">
            LogOut
          </button>
        </div>
      </div>

      {/* Outlet for Nested Routes */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default TraineeDashboard;
