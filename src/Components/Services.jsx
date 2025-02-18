import React from 'react'
import "./Services.css"
import Navbar from './Navbar'
const Services = () => {
  return (
    <>
    // navbar section
        <Navbar/>
    // navbar section

    // Services Section

    <section className='services'>
      <h2 className='heading'>My <span>Services</span></h2>
      <div className='service-container'>
          <div className='service-box'>
              <div className='icon'>
              <i class='bx bx-code-alt'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3 >Web Development</h3 >
              <p>By using HTML, CSS, JS, React.js, Python</p>
          </div>

          <div className='service-box'>
              <div className='icon'>
              <i class='bx bxs-palette'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3>UI/UX Design</h3>
              <p>By using Adobe XD & Figma</p>
          </div>

          <div className='service-box'>
              <div className='icon'>
              <i class='bx bxl-sketch'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3>Graphic Design</h3>
              <p>By using Adobe Photoshop & Illustrator</p>
          </div>

          <div className='service-box'>
              <div className='icon'>
              <i class='bx bxs-camera'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3>Photography</h3>
              <p>Portrait, Nature, WildLife, Street-Photography</p>
          </div>

          <div className='service-box'>
              <div className='icon'>
              <i class='bx bxs-edit'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3>Photo Editing</h3>
              <p>By Using Photoshop And Lightroom</p>
          </div>

          <div className='service-box'>
              <div className='icon'>
              <i class='bx bxs-video-plus'></i>
              <a href='#'><i class='bx bx-arrow-back' ></i></a>
              </div>
              <h3>Videography</h3>
              <p>Classic Shot, Drone Shot, Indoor & Outdoor</p>
          </div>



          
      </div>
    </section>
    </>
  )
}

export default Services
