import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Exchange</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="navbar-login">

      </div>
    </div>
  )
}

export default Navbar