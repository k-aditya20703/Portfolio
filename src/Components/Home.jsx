import React from 'react'
import "./Home.css"
import { NavLink, Link } from 'react-router-dom'
import Navbar from './Navbar'

import cv from '../assets/CV.pdf'
const Home = () => {
  return (
    <>
        <Navbar/>

        <section className='home'>
            <div className='home-detail'>
                <h1>Aditya Narayan</h1>
                <h2>I'm a  
                    <span style={{ "--i":"4" }} data-text={'Coder'}>Coder</span>
                    <span style={{ "--i":"3" }} data-text={'Graphic Designer'}>Graphic Designer</span>
                    <span style={{ "--i":"2" }} data-text={'Photographer'}>Photographer</span>
                    <span style={{ "--i":"1" }} data-text={'Editor'}>Editor</span>
                </h2>
                <p>
                A dedicated computer science graduate student, Eager to kickstart my career as a frontend developer, 
                proficient in designing a webpage and eager to apply what I learn in a real-time project. 
                Seeking a entry level role, where I can apply my knowledge to develop a real-time project .
                </p>
                <div className='btn-section'>
                    <a href={cv} download='cv'><button className='download-btn'>Download CV</button></a>
                    <div className='icon-section'>
                        <a href='https://www.linkedin.com/in/aditya-n-khuntia/' target='blank'><i class='bx bxl-linkedin-square' ></i></a>
                        <a href='https://github.com/k-aditya20703' target='blank'><i class='bx bxl-github' ></i></a>
                        <a href='https://www.instagram.com/_adii07__/' target='blank'><i class='bx bxl-instagram-alt' ></i></a>
                    </div>
                </div>
            </div>


            <div className='home-img'>
                <div className='img-box'>
                    <div className='img-item'>
                        <img src='/Images/myImg.png'></img>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Home
