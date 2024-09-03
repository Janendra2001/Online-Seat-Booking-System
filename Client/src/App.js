import React from 'react';
import './styles.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard.js';
import ManageSeats from './Components/Admin/ManageSeats.js';
import ViewBookings from './Components/Admin/ViewBookings.js';
import Reports from './Components/Admin/Reports.js';
import Profile from './Components/Admin/Profile.js';
import HomePage from './Components/HomePage.js';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admindashboard" element={<Dashboard />}>
                    <Route path="/admindashboard/manage-seats" element={<ManageSeats />} />
                    <Route path="/admindashboard/view-bookings" element={<ViewBookings />} />
                    <Route path="/admindashboard/reports" element={<Reports />} />
                    <Route path="/admindashboard/profile" element={<Profile />} />
                </Route>
            </Routes>
    </Router>
  );
}

export default App;
