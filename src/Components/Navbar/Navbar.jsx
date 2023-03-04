import React from 'react'
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
        <Link to={"/"}><i class="fa-solid fa-piggy-bank" style={{color:"white",fontSize:"30px"}}>   CRYPTOCELL</i></Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <Link to={"buycrypto"}><li ><i class="fa-solid fa-cart-shopping" style={{fontSize:"15px"}}>   Buy Crypto</i></li></Link>
          <Link to={"charity"}><li><i class="fa-solid fa-handshake-angle" style={{fontSize:"15px"}}>  Charity</i></li></Link>
          <Link to={"azercell"}><li><i class="fa-solid fa-tower-cell" style={{fontSize:"15px"}}>   Azercell</i></li></Link>
        </ul>
      </div>
      <div className="navbar-login">
        <button>
        <i class="fa-solid fa-user"> USER</i>
         
        </button>
      </div>
    </div>
  )
}

export default Navbar