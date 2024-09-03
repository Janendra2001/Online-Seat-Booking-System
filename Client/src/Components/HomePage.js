import React from 'react';
import mobile from '../images/mobile.png';
import sltLogo from '../images/slt-mobitel-logo.png';

function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-4 w-full">
          <div className="flex items-center">
            <img src={sltLogo} alt="SLT Logo" className="w-36 h-auto" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </header>

        {/* Content Section - Divided into Two Columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16 w-full">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Your Gateway to Easy and Quick Seat Booking!
            </h1>
            <h2 className="text-2xl font-semibold mb-8">
              Book Your Seat with Ease!
            </h2>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 relative flex justify-center items-center mt-12 lg:mt-40">
            <img
              src={mobile}
              alt="Woman booking a seat"
              className="w-full max-w-lg h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#D9EFEB] w-full mt-1 py-4">
          <div className="text-center">
            <p className="text-gray-700">© 2024 Sri Lanka Telecom. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
