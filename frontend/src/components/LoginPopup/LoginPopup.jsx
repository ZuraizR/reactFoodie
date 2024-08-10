import React, { useContext } from 'react'

import './LoginPopup.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const LoginPopup = () => {
  const { currState, setCurrState, setShowLogin } = useContext(StoreContext)

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt='close'
          />
        </div>
        <div className='login-popup-inputs'>
          {currState === 'Sign Up' && (
            <input type='text' placeholder='Your Name' required />
          )}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Your Password' required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className='login-popup-checkbox'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' && (
          <p>
            Create new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        )}
        {currState === 'Sign Up' && (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
