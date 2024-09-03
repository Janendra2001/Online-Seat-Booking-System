import React from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
  return (
    <div className="flex h-screen">
      

      {/* Reports Section */}
      <div className="w-3/4 bg-white-50 p-24">
      <div className="w-[1000px] p-8">
  
  <div className="flex justify-between items-center mb-2 relative">
    <h2 className="text-xl font-bold mb-2">Past Bookings</h2>
    <div className="relative w-[300px] mr-[180px]">
      <input
        type="text"
        placeholder="Search by Trainee ID"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-base box-border"
      />
      <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg pointer-events-none">🔍</span>
    </div>
  </div>
  
  <section className="bg-gray-100 p-4 rounded-lg mb-5 w-[800px]">
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

  <div className="flex justify-end mr-4">
  <div className="grid grid-cols-2 gap-4 mb-8 w-[500px] h-[150px]">
    <button className="bg-[#44974d] text-white px-4 py-3 rounded-md hover:bg-[#357a43]">
      Generate an attendance report
    </button>
    <button className="bg-[#44974d] text-white px-4 py-3 rounded-md hover:bg-[#357a43]">
      Generate a Booking Summary Report
    </button>
    <button className="bg-[#44974d] text-white px-4 py-3 rounded-md hover:bg-[#357a43]">
      Trainee Booking History Report
    </button>
    <button className="bg-[#44974d] text-white px-4 py-3 rounded-md hover:bg-[#357a43]">
      Daily/Weekly/Monthly Booking Report
    </button>
  </div>
</div>


</div>


      </div>
    </div>
  );
};

export default Reports;
