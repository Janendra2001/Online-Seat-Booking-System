import React from 'react';
import profile from '../../images/profile.jpg';

const Profile = () => {
  return (
    <div className="flex h-screen">
      


      {/* Profile Update Form Section */}
      <div className="w-3/4  p-10">
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl font-bold mb-8">Profile Update</h2>
          <div className="relative">
            <img src={profile} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
              <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
              </svg>
            </div>
          </div>
          <form className="space-y-4 mt-8 w-1/2 bg-slate-400 p-4">
            <input type="text" placeholder="Admin ID" className="w-full p-2 rounded-md bg-gray-100 focus:outline-none" />
            <input type="password" placeholder="Current Password" className="w-full p-2 rounded-md bg-gray-100 focus:outline-none" />
            <input type="password" placeholder="New Password" className="w-full p-2 rounded-md bg-gray-100 focus:outline-none" />
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;