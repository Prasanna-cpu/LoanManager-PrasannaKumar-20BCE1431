import React from 'react'
import { Meteor } from 'meteor/meteor';

const BorrowerDashboard = () => {
  const loans=Loans.find({userId:Meteor.userId()}).fetch()
  return (
    <div>
      <h2>Look at borrows here</h2>
      <ul>
        {
          loans.maps((loan)=>{
            <li
              key={loan._id}
            >{`Loan Amount: ${loan.amount}, Status: ${loan.status}`}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default BorrowerDashboard