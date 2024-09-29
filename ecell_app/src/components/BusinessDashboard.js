import React, { useState } from 'react';
import './BusinessDashboard.css';

const BusinessDashboard = () => {
  // eslint-disable-next-line 
  const [remainingAmount, setRemainingAmount] = useState(100000000);
  const businesses = [
    { name: 'Business 1', amount: 2500000 },
    { name: 'Business 2', amount: 3000000 },
    { name: 'Business 3', amount: 3500000 },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Your Business Dashboard</h1>
        
        <div className="dashboard-summary">
            <h2 className="summary-title">Remaining Amount - {formatAmount(remainingAmount)}</h2>
            <p className="summary-amount"></p>
        </div>
        
        <div className="business-breakdown">
          <h2 className="breakdown-title">Amount Spent on Businesses</h2>
          <div className="business-list">
            {businesses.map((business, index) => (
              <div key={index} className="business-item">
                <span className="business-name">{business.name}</span>
                <span className="business-amount">{formatAmount(business.amount)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          {/* Chart will be added here */}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;