import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Globel Css/NavBar.css"

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='name'>Zeeshan-Fronted-Developer</div>
        <div className='navLinks'>
         <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
                <NavLink to="/properties">Properties</NavLink>
                <NavLink  to="/about">About</NavLink>
            </li>
         </ul>
        </div>
    </div>
  )
}

export default NavBar