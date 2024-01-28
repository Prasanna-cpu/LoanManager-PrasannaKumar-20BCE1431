import React from "react";
import { Loans } from "../../api/loans/loans";
import { Meteor } from "meteor/meteor";

const AdminDashboard = () => {
  const loans = Loans.find({}).fetch();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            {`Loan Amount: ${loan.amount}, Borrower: ${loan.userId}, Status: ${loan.status}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
