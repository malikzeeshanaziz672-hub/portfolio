import React from 'react'
import "../globalCss/NavBar.css"
import { NavLink } from 'react-router-dom'
import MyProjectBtn from './MyProjectBtn'
const NavBar = () => {
  return (
    <>
       <nav>

<div className='logo'>
  <h3 >M</h3>
  <p >MALIK</p>
</div>
        <div className='navLink'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/projects">Project</NavLink>
                    <NavLink to="/skill">Skill</NavLink>
                </li>
            </ul>
        </div>

        <div>
            <MyProjectBtn/>
        </div>
       </nav>
    </>
  )
}

export default NavBar