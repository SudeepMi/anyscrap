import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../utils/User'
import './style.css'
function Navbar() {

  const LogOut = () => {
    User()?.logOut();
    window.location.reload()
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar_brand" to="/">ANYSCRAP</Link>
            <Link className='navbar_links' to="#">ABOUT</Link>
            <Link className='navbar_links' to="/ecommerce">E-COMMERCE</Link>
            <Link className='navbar_links' to="#">News</Link>
            <Link className='navbar_links' to="#">Explore</Link>
            { !User() ? <Link className='navbar_links btn btn_small_black' to="/login">Login</Link>
            : <button className='navbar_links btn btn_small_brand' onClick={()=>LogOut()}>Logout</button>}
        </nav>
  )
}

export default Navbar