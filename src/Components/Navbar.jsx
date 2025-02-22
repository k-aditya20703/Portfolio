import React, { useState } from 'react'
import "./Home.css"
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {

  const[menuOpen,setMenuopen]=useState(false);

  const handleMenu = ()=>{
    setMenuopen(!menuOpen);
  }

  return (
    <>
        <header>
            <a href='#' ><img className='logo' src='/Images/logo.jpg'></img></a>
            <i onClick={handleMenu} class='bx bx-menu' id='menu-icon'></i>
            {menuOpen&&<nav>
                <NavLink to='/'><a href='#'>Home</a></NavLink>
                <NavLink to='/services'><a  href='#'>Services</a></NavLink>
                <NavLink to='/resume'><a href='#'>Resume</a></NavLink>
                <NavLink to='/portfolio'><a  href='#'>Portfolio</a></NavLink>
                <NavLink to='/contact'><a  href='#'>Contact</a></NavLink>
            </nav>}
        </header>
    </>
  )
}

export default Navbar
