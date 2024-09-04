import { useState } from 'react';
import image from '../images/image.png'; // Adjust the path to your image
import sltlogo from '../images/slt-mobitel-logo.png';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [traineeId, setTraineeId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Trainee ID:', traineeId);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-800 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{ maxWidth: '600px', maxHeight: '700px' }}>
          <div className="text-center mb-4">
          <img src={sltlogo} alt="SLT Mobitel Logo" className="w-22 h-16 mx-auto" />
          <br/>
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="traineeId" className="block text-gray-700 font-bold mb-2">
                Trainee ID
              </label>
              <input
                type="text"
                id="traineeId"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={traineeId}
                onChange={(e) => setTraineeId(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
            <Link
                  to="/otp"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center block"
                  >
                  Sign Up
            </Link>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-end bg-gray-800">
          <img
            src={image}
            alt="Signup"
            className="object-cover object-center rounded-tl-4xl rounded-bl-4xl"
            style={{ width: '600px', height: '728px' }}
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

export default Signup;
