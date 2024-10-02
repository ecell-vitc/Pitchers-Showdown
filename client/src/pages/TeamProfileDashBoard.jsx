import React from "react";

export default function TeamProfileDashBoard() {
  const investments = [
    { company: "Company A", amount: "500" },
    { company: "Company B", amount: "800" },
    { company: "Company C", amount: "300" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      {/* Team Name */}
      <div className="text-3xl font-bold text-gray-800 mb-4">Team Alpha</div>

      {/* Remaining Amount */}
      <div className="text-xl text-gray-700 mb-8">
        Remaining Investment Amount: <span className="font-semibold">1000</span>{" "}
        <span>Lakhs</span>
      </div>

      {/* Investments Section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="text-2xl font-semibold text-gray-700 mb-4">
          Your Investments
        </div>

        {/* Investments List */}
        <div className="space-y-4">
          {investments.map((investment, index) => (
            <div
              key={index}
              className="flex justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="text-lg font-medium text-gray-600">
                {investment.company}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {investment.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
