import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {

  const[homeisOn,setHomeisOn]=useState(false)
  const[serviceisOn,setServiceisOn]=useState(false)
  const[resumeisOn,setResumeisOn]=useState(false)
  const[portfolioisOn,setPortfolioisOn]=useState(false)
  const[contactisOn,setContactisOn]=useState(false)

  const handleHome = ()=>{
    setHomeisOn(true)
    setServiceisOn(false)
    setResumeisOn(false)
    setPortfolioisOn(false)
    setContactisOn(false)
  }

  const handleService = ()=>{
    setHomeisOn(false)
    setServiceisOn(true)
    setResumeisOn(false)
    setPortfolioisOn(false)
    setContactisOn(false)
  }

  const handleResume = ()=>{
    setResumeisOn(true)
    setHomeisOn(false)
    setServiceisOn(false)
    setPortfolioisOn(false)
    setContactisOn(false)
  }

  const handlePortfolio = ()=>{
    setPortfolioisOn(true)
    setHomeisOn(false)
    setServiceisOn(false)
    setResumeisOn(false)
    setContactisOn(false)
  }

  const handleContact = ()=>{
    setContactisOn(true)
    setHomeisOn(false)
    setServiceisOn(false)
    setResumeisOn(false)
    setPortfolioisOn(false)
  }
  
  return (
    <>
        <header>
            <a href='#' ><img className='logo' src='/Images/logo.jpg'></img></a>
            <i class='bx bx-menu' id='menu-icon'></i>
            <nav>
                <NavLink to='/'><a style={{color:homeisOn?'#66f189':'#fff'}} onClick={handleHome} className='active' href='#'>Home</a></NavLink>
                <NavLink to='/services'><a style={{color:serviceisOn?'#66f189':'#fff'}} onClick={handleService} href='#'>Services</a></NavLink>
                <NavLink to='/resume'><a style={{color:resumeisOn?'#66f189':'#fff'}} onClick={handleResume} href='#'>Resume</a></NavLink>
                <NavLink to='/portfolio'><a style={{color:portfolioisOn?'#66f189':'#fff'}} onClick={handlePortfolio} href='#'>Portfolio</a></NavLink>
                <NavLink to='/contact'><a style={{color:contactisOn?'#66f189':'#fff'}} onClick={handleContact} href='#'>Contact</a></NavLink>
            </nav>
        </header>
    </>
  )
}

export default Navbar
