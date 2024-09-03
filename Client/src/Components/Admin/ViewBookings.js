import React from 'react';

const ViewBookings = () => {
  return <div className="flex h-screen">
        
      {/* Bookings Section */}
      <div className="w-3/4 bg-white-50 p-10">
      <div className="w-[1000px] p-8">
  
  <div className="flex justify-between items-center mb-2 relative">
    <h2 className="text-xl font-bold">Upcoming Bookings</h2>
    <div className="relative w-[300px]">
      <input
        type="text"
        placeholder="Search by Trainee ID"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-base box-border"
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg pointer-events-none">🔍</span>
    </div>
  </div>
  
  <section className="mb-5 bg-sky-100 p-6 rounded-lg">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="p-2 text-left border-b border-black">Training ID</th>
          <th className="p-2 text-left border-b border-black">Booking ID</th>
          <th className="p-2 text-left border-b border-black">Date</th>
          <th className="p-2 text-left border-b border-black">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border-b border-gray-300">2320</td>
          <td className="p-2 border-b border-gray-300">S1</td>
          <td className="p-2 border-b border-gray-300">2024/8/31</td>
          <td className="p-2 border-b border-gray-300"><button className="bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500">Cancel</button></td>
        </tr>
        <tr>
          <td className="p-2 border-b border-gray-300">2325</td>
          <td className="p-2 border-b border-gray-300">S3</td>
          <td className="p-2 border-b border-gray-300">2024/9/4</td>
          <td className="p-2 border-b border-gray-300"><button className="bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500">Cancel</button></td>
        </tr>
      </tbody>
    </table>
  </section>
  
  <div className="flex justify-between items-center mb-2 relative">
    <h2 className="text-xl font-bold">Past Bookings</h2>
    <div className="relative w-[300px]">
      <input
        type="text"
        placeholder="Search by Trainee ID"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-base box-border"
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg pointer-events-none">🔍</span>
    </div>
  </div>
  
  <section className="bg-gray-400 p-6 rounded-lg mb-5">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="p-2 text-left border-b border-black">Trainee ID</th>
          <th className="p-2 text-left border-b border-black">Booking ID</th>
          <th className="p-2 text-left border-b border-black">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border-b border-gray-300">2320</td>
          <td className="p-2 border-b border-gray-300">S1</td>
          <td className="p-2 border-b border-gray-300">2024/8/22</td>
        </tr>
        <tr>
          <td className="p-2 border-b border-gray-300">2320</td>
          <td className="p-2 border-b border-gray-300">S3</td>
          <td className="p-2 border-b border-gray-300">2024/8/4</td>
        </tr>
      </tbody>
    </table>
  </section>

</div>

      </div>
  </div>;
};

export default ViewBookings;
