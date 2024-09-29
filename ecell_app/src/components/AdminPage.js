import React, { useState } from 'react';
import './AdminPage.css';
const AdminPage = () => {
  const [businesses, setBusinesses] = useState([
    { id: 1, name: 'Business 1', investment: 2500000, details: 'Details for Business 1' },
    { id: 2, name: 'Business 2', investment: 3000000, details: 'Details for Business 2' },
    { id: 3, name: 'Business 3', investment: 3500000, details: 'Details for Business 3' },
    { id: 4, name: 'Business 4', investment: 2000000, details: 'Details for Business 4' },
  ]);

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleBusinessClick = (business) => {
    setSelectedBusiness(business);
  };

  return (
    <div className="admin-dashboard">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-content">
        <div className="business-list">
          <h2 className="list-title">Businesses</h2>
          {businesses.map((business) => (
            <div
              key={business.id}
              className={`business-item ${selectedBusiness?.id === business.id ? 'selected' : ''}`}
              onClick={() => handleBusinessClick(business)}
            >
              <span className="business-name">{business.name}</span>
              <span className="business-investment">{formatAmount(business.investment)}</span>
            </div>
          ))}
        </div>
        <div className="business-details">
          <h2 className="details-title">Business Details</h2>
          {selectedBusiness ? (
            <div className="details-content">
              <h3>{selectedBusiness.name}</h3>
              <p>Investment: {formatAmount(selectedBusiness.investment)}</p>
              <p>{selectedBusiness.details}</p>
            </div>
          ) : (
            <p className="no-selection">Select a business to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;