import React from 'react'
import logo from './logo.png'
import './Navbar.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <Link to={"buycrypto"}><li>Buy Crypto</li></Link>
          <Link to={"charity"}><li>Charity</li></Link>
          <Link to={"azercell"}><li>Azercell</li></Link>
        </ul>
      </div>
      <div className="navbar-login">
        <button>
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar