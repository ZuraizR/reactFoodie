import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {
  const { showLogin, setShowLogin, getTotalCartAmount } =
    useContext(StoreContext)
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const handleWindowWheel = (event) => {
      if (showLogin) {
        event.preventDefault()
      }
    }

    window.addEventListener('wheel', handleWindowWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWindowWheel)
    }
  }, [showLogin])

  const changeNavBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <div className={`container ${navbar ? 'navbar sticky' : 'navbar'}`}>
      <Link to='/'>
        {/* <img src={assets.logo} alt='Logo' className='logo' /> */}
        <h1 className='logo'>Foodie.</h1>
      </Link>
      <ul className='navbar-menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='Search' />
        <div className='navbar-search-icon'>
          <Link
            to='/cart'
            title={getTotalCartAmount() ? 'Cart' : 'Cart is empty'}
          >
            <img src={assets.basket_icon} alt='Cart' />
          </Link>
          <div className={getTotalCartAmount() && 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
