import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { makeRequest } from '../utils'

export default function TeamProfileDashBoard() {
  const [name, setName] = useState('')
  const [investments, setInvestments] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    makeRequest('GET', 'profile/', {},
      (data) => {
        setName(data.name)
        setInvestments(data.investments)
      },
      (err) => { alert('You are not logged in!'); nav('/login') }
    )
  }, [])


  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      {/* Team Name */}
      <div className="text-3xl font-bold text-gray-800 mb-4">{name}</div>

      {/* Remaining Amount */}
      <div className="text-xl text-gray-700 mb-8">
        Remaining Investment Amount: <span className="font-semibold">{localStorage.getItem('balance') ?? 0}</span>{" "}
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
                {investment.team}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {investment.amt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
