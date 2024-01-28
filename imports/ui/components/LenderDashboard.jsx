import React from 'react'
import { Loans } from '../../api/loans/loans'
const LenderDashboard = () => {

  const loans=Loans.find({status:'pending'}).fetch()
  const handleConfirmPayment = (loanId) => {
        Meteor.call('loans.confirmPayment', loanId, (error) => {
          if (error) {
            console.error(error.reason);
          } else {
            console.log('Payment confirmed successfully!');
          }
        });
  };
  
  return (
    <div>

      <h2>Lender Dashboard</h2>
      

      <ul>
        {
          loans.map((loan)=>(
            
            <li key={loan._id}>
              {`Loan Amount: ${loan.amount}, Borrower: ${loan.userId}, `}
              <button onClick={() => handleConfirmPayment(loan._id)}>Confirm Payment</button>
            </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default LenderDashboard