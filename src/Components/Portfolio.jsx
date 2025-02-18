import React from 'react'
import Navbar from './Navbar'
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <>
        <Navbar/>

        <section className='portfolio'>
        <h2 className='heading'>Latest <span>Projects</span></h2>
        <div className='portfolio-container'>
          <div className='portfolio-box'>
            <div className='portfolio-detail'>
              <p className='numb'>01</p>
            </div>

            <div className='portfolio-detail'>
              <p className='numb'>02</p>
            </div>

            <div className='portfolio-detail'>
              <p className='numb'>03</p>
            </div>

            <div className='portfolio-detail'>
              <p className='numb'>04</p>
            </div>

            <div className='portfolio-detail'>
              <p className='numb'>05</p>
            </div>

            <div className='portfolio-detail'>
              <p className='numb'>06</p>
            </div>
          </div>

          <div className='portfolio-box'>
            
          </div>
        </div>

        </section>
    </>
  )
}

export default Portfolio
