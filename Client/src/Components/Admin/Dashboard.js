import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import image from '../../images/slt-mobitel-logo.png'; // Import the SLT Mobitel logo image

const Dashboard = () => {
    const location = useLocation();

    return (
        <div className="flex">
            {/* Sidebar */}
            <nav className="flex flex-col bg-gray-800 text-white w-64 h-screen rounded-tr-2xl rounded-br-2xl fixed">
                <div className="flex items-center justify-center mt-10">
                    <Link to="/" className="flex flex-col items-center">
                        <img src={image} alt="SLT Mobitel Logo" className="w-36 h-auto" />
                    </Link>
                </div>
                <ul className="mt-12">
                    <li className={`p-4 ${location.pathname === '/admindashboard/manage-seats' ? 'bg-gray-600 rounded-tr-2xl rounded-br-2xl' : ''}`}>
                        <Link to="/admindashboard/manage-seats" className="block no-underline  hover:text-gray-100 transition-colors duration-300">Manage Seats</Link>
                    </li>
                    <li className={`p-4 ${location.pathname === '/admindashboard/view-bookings' ? 'bg-gray-600 rounded-tr-2xl rounded-br-2xl' : ''}`}>
                        <Link to="/admindashboard/view-bookings" className="block no-underline  hover:text-gray-100 transition-colors duration-300">View Bookings</Link>
                    </li>
                    <li className={`p-4 ${location.pathname === '/admindashboard/reports' ? 'bg-gray-600 rounded-tr-2xl rounded-br-2xl' : ''}`}>
                        <Link to="/admindashboard/reports" className="block no-underline  hover:text-gray-100 transition-colors duration-300">Reports</Link>
                    </li>
                    <li className={`p-4 ${location.pathname === '/admindashboard/profile' ? 'bg-gray-600 rounded-tr-2xl rounded-br-2xl' : ''}`}>
                        <Link to="/admindashboard/profile" className="block no-underline  hover:text-gray-100 transition-colors duration-300">Profile</Link>
                    </li>
                </ul>
                <div className="mt-auto p-4">
                    <button className="w-full bg-red-800 hover:bg-red-600 text-white py-2 px-4 rounded-xl">
                        LogOut
                    </button>
                </div>
            </nav>
            
            {/* Page Content */}
            <div className="ml-64 p-8 bg-gray-100 w-full min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
