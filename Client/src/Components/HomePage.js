import React from 'react';
import mobile from '../images/mobile.png';
import sltLogo from '../images/slt-mobitel-logo.png';


function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={sltLogo} alt="Giel Logo" className="w-36 h-auto" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="mt-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Gateway to Easy and Quick Seat Booking!</h1>
          <h2 className="text-2xl font-semibold mb-8">Book Your Seat with Ease!</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </main>

        {/* Image */}
            <div className="mt-16 relative w-full h-96 overflow-hidden rounded-lg">
        <img
            src={mobile}
            alt="Woman booking a seat"
            className="absolute  right-0 w-22 h-59 object-cover"
        />
        <div className="absolute inset-0"></div>
    </div>

      </div>
    </div>
  );
}

export default HomePage;