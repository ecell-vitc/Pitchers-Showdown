import React from "react";

export default function BusinessUI() {
  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Business Name */}
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          Business 1
        </div>

        {/* Business Info Section */}
        <div className="flex items-center mb-6">
          <div>
            <div className="text-lg font-medium text-gray-700">
              Business Details
            </div>
            <div className="text-sm text-green-500">
              Remaining Amount: 1000 <span>Lakhs</span>
            </div>
          </div>
        </div>

        {/* Investment Form Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-medium text-gray-700 mb-2">
            Investment Form
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Invest
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
