import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

function ProfileUpdate() {
  const [traineeId, setTraineeId] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Trainee ID:', traineeId);
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Profile Image:', profileImage);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="relative flex justify-center">
          <div className="w-32 h-32 rounded-full bg-blue-500 relative">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            ) : (
              <label
                htmlFor="file-upload"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <FaUpload className="text-white text-2xl" />
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Profile Update
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Update your profile details
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="traineeId" className="sr-only">
                Trainee ID
              </label>
              <input
                type="text"
                name="traineeId"
                id="traineeId"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Trainee ID"
                value={traineeId}
                onChange={(e) => setTraineeId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="currentPassword" className="sr-only">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                id="currentPassword"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdate;
