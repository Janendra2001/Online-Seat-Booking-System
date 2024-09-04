import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/image.png'; // Adjust the path to your image
import sltlogo from '../images/slt-mobitel-logo.png';

function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field automatically
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification here
    console.log('OTP entered:', otp.join(''));
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-4">
            <img src={sltlogo} alt="SLT Mobitel Logo" className="w-22 h-16 mx-auto" />
            <br/>
            <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
            <p className="text-gray-600 mb-4">
              We have sent a One-Time Password (OTP) to your email address. Please enter the OTP below to verify your account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center space-x-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  className="shadow appearance-none border rounded w-12 h-12 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <button type="button" className="text-green-500 hover:underline">
                Resend OTP
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      {/* Image Section */}
      <div className="relative flex-1">
        <img
          src={image}
          alt="Signup"
          className="w-full h-full object-cover object-center"
          style={{ maxWidth: '800px', maxHeight: '750px' }}
        />
        <Link
          to="/contact"
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default OTP;
