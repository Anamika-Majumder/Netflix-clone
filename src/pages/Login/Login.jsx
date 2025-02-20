import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Login = () => {

   const [signState, setSignState]= useState("Sign In")






  return (
    <div className='login'>
      <img src={logo} className='login-logo'/>
      <div className="login-from">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type='text' placeholder='Your Name' />:<></>}
          
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='password' />
          <button>Sign Up</button>
          <div className="from-help">
            <div className="rember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="from-switch">
          <p>New To Netflix? <span>Sign UP Now</span> </p>
          <p>Already have account <span>Sign In Now</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
