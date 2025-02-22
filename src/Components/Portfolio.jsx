import React from 'react'
import Navbar from './Navbar'
import Slider from "react-slick";
import "./Portfolio.css"
import { Project } from './Constants/Project'
const Portfolio = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <Navbar/>

        <section className='portfolio'>
        <h2 className='heading'>Latest <span>Projects</span></h2>
        <Slider {...settings}>
        {
              Project.map((projectData)=>{
                return(
                  <div className='portfolio-container'>
                  <div className='thumbnail'>
                  <img src={projectData.image}></img>
                </div> 
              <div className='portfolio-box'>
                <div className='portfolio-detail active'>
                  <p className='numb'>{projectData.Slno}</p>
                  <h3>{projectData.heading}</h3>
                  <p>{projectData.about}</p>
                  <div className='tech'>
                    <p>{projectData.language}</p>
                  </div>
                  <div className='live-git'>
                  <a href='https://github.com/k-aditya20703' target='blank'><i class='bx bxl-github' ></i></a>
                  <a href='#'><i class='bx bx-arrow-back' ></i></a>
                  </div>
                </div>
              </div>
               
              </div>
                )
              })
        }
        </Slider>
        
        </section>
    </>
  )
}

export default Portfolio
