import React from 'react'
import '../Pages/CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="91002c1e-3ed8-46b6-bb61-50a372da16de"></input>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-page">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="email" id="myname" placeholder='Your Mail ID'/>
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an Account ? <span> LoginHere</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="checkbox" id="check" />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
    </form>
  )
}

export default LoginSignup