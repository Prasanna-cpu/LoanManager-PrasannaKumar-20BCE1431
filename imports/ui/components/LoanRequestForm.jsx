import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor';

const LoanRequestForm = () => {

    const [amount,setAmount]=useState("")

    const handleRequestLoan=()=>{
        Meteor.call('loaans.requestLoan',amount,(error)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log('Loan Requested')
            }
        })
    }

    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }

  return (
    <div>
        <input type="number" placeholder='Amount' onChange={amountChangeHandler}/>
        
    </div>
  )
}

export default LoanRequestForm