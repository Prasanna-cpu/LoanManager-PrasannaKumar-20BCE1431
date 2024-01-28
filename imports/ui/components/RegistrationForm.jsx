import React, { useState } from 'react'


import {Accounts} from 'meteor/accounts-base'





const RegistrationForm = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("")

    const handleRegister=()=>{
        Accounts.createUser({email,password,role})
            .then(()=>console.log('user created'))
    }


    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleRole=(e)=>{
        setRole(e.target.value)
    }




  return (
    <div>
        <input type="email" placeholder='Email' onChange={handleEmailChange}/>
        <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
        <select onChange={handleRole}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="borrower">Borrower</option>
            <option value="lender">Lender</option>
        </select>
        <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default RegistrationForm