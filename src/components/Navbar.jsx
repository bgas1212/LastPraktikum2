import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav>
        <img src="https://lh3.googleusercontent.com/FqP7sfIeeCDCcpelL1G-LJT4UbQjQB1lpg8fVSHo0pQNXiUcPZk15b9iOmY-w6SdkZDM" alt="" className='logo'/>
        {/* <input type="text"/> */}
        <ul>
            <li><a href="#">Foods</a></li>
            {/* <li><a href="#">Beverages</a></li> */}
            <li><a href="#">Location</a></li>
        </ul>
    </nav>
  )
}
