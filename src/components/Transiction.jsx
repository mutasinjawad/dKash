
import React from 'react';

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="transaction-details">
        <h3>Transaction Details</h3>
        {/* Add transaction details here */}
      </div>
      <div className="transaction-amount">
        <h3>Amount</h3>
        {/* Add amount here */}
      </div>
      <div className="transaction-date">
        <h3>Date</h3>
        {/* Add date here */}
      </div>
      {/* Add more transaction elements as needed */}
    </div>
  );
};

export default Transaction;
