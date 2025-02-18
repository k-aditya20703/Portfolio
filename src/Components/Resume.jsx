import React, { useState } from 'react'
import "./Resume.css"
import Navbar from './Navbar'
import cv from '../assets/CV.pdf'
import { Education } from './Constants/Education'
import { Skill } from './Constants/Skill'
const Resume = () => {

  const[education,setEducation]=useState(true);
  const[skill,setSkill]=useState(false);
  const[aboutMe,setAboutme]=useState(false);
  const[download,setdownload]=useState(false);
  const[educationisOn,setEducationIsOn] = useState(true);
  const[skillisOn,setSkillIsOn]=useState(false);
  const[aboutisOn,setAboutIsOn]=useState(false);
  const[downloadisOn,setDownloadIsOn]=useState(false);


  const handleEducation = ()=>{
      if(education===false){
        setEducation(true);
      }
      if(skill===true){
        setSkill(false)
      }
      if(aboutMe===true){
        setAboutme(false)
      }
      if(download===true){setdownload(false)}

      setEducationIsOn(!educationisOn);
      setSkillIsOn(false)
      setAboutIsOn(false)
      setDownloadIsOn(false)
    
  }

  const handleSkill =()=>{
    if(skill===false){
      setSkill(true)
    }else{setSkill(false)}

    if(education===true){
      setEducation(false)
    }
    if(aboutMe===true){
      setAboutme(false)
    }
    if(download===true){setdownload(false)}

    setSkillIsOn(!skillisOn);
    setEducationIsOn(false)
    setAboutIsOn(false)
    setDownloadIsOn(false)
  }

  const handleAboutme =()=>{
    if(aboutMe===false){
      setAboutme(true)
    }else{setAboutme(false)}

    if(education===true){setEducation(false)}
    if(skill===true){setSkill(false)}
    if(download===true){setdownload(false)}


    setAboutIsOn(!aboutisOn)
    setSkillIsOn(false);
    setEducationIsOn(false)
    setDownloadIsOn(false)
  }

  const handleDownload=()=>{
    if(download===false){
      setdownload(true)
      setEducation(false)
      setAboutme(false)
      setSkill(false)
    }

    setDownloadIsOn(!downloadisOn)
    setAboutIsOn(false)
    setSkillIsOn(false);
    setEducationIsOn(false)
  }
  return (
    <>
    //Navbar section
        <Navbar/>

    // Resume section

    <section className='resume'>
      <div className='resume-container'>
        <div className='resume-box'>
          <h2>Why You <span>Hier</span> Me</h2>
          <p className='desc'>A dedicated computer science graduate student, Eager to kickstart my career 
          as a frontend developer, proficient in designing a webpage and eager to apply 
          what I learn in a real-time project. Seeking a entry level role, where I can 
          apply my knowledge to develop a real-time project .</p>
          <button style={{borderColor:educationisOn?'#66f189' : '#323946', color:educationisOn?'#66f189': '#ffffff'}} onClick={handleEducation} className='resume-btn'>Education</button>
          <button style={{borderColor:skillisOn?'#66f189' : '#323946', color:skillisOn?'#66f189': '#ffffff'}} onClick={handleSkill} className='resume-btn'>Skill</button>
          <button style={{borderColor:aboutisOn?'#66f189' : '#323946', color:aboutisOn?'#66f189': '#ffffff'}} onClick={handleAboutme} className='resume-btn'>About Me</button>
          <a href={cv} download='cv'><button style={{borderColor:downloadisOn?'#66f189' : '#323946', color:downloadisOn?'#66f189': '#ffffff'}} onClick={handleDownload} className='resume-btn'>Download CV</button></a>
        </div>

        <div className='resume-box'>
          {education&&<div className='resume-detail-education'>
            <h2 className='heading'>My <span>Education</span></h2>
              <p className='desc'>A dedicated computer science graduate student, Eager to kickstart my career 
              as a frontend developer, proficient in designing a webpage and eager to apply 
              what I learn in a real-time project. Seeking a entry level role, where I can 
              apply my knowledge to develop a real-time project .</p>
              <div className='resume-list'>
              {
              Education.map((educationData)=>{
                return(
                <div className='resume-item'>
                <p className='year'>{educationData.year}</p>
                <h3>{educationData.class}</h3>
                <p className='board'> <span>*</span> Under {educationData.board}</p>
              </div>
                )
              })
              }
              </div>
            
              
          </div>}
          {skill&&<div className='resume-detail-skill'>
              <h2 className='heading'>My <span>Skills</span></h2>
              <p className='desc'>A dedicated computer science graduate student, Eager to kickstart my career 
              as a frontend developer, proficient in designing a webpage and eager to apply 
              what I learn in a real-time project. Seeking a entry level role, where I can 
              apply my knowledge to develop a real-time project .</p>
              <div className='resume-list'>
              {
                Skill.map((skillData)=>{
                  return(
                    <div className='resume-item'>
                    {skillData.icon}
                    <span>{skillData.name}</span>
                    </div>
                  )
                })
              }
                  
              </div>
          </div>}
          {aboutMe&&<div className='resume-detail-about'>
              <h2 className='heading'>About <span>Me</span></h2>
              <p className='desc'>A dedicated computer science graduate student, Eager to kickstart my career 
              as a frontend developer, proficient in designing a webpage and eager to apply 
              what I learn in a real-time project. Seeking a entry level role, where I can 
              apply my knowledge to develop a real-time project .</p>

              <div className='resume-list'>
                <div className='resume-item'>
                  <p>Name <span>Aditya Narayan Khuntia</span></p>
                </div>
                <div className='resume-item'>
                  <p>Age <span>23 years old</span></p>
                </div>
                <div className='resume-item'>
                  <p>Gender <span>Male</span></p>
                </div>
                <div className='resume-item'>
                  <p>Status <span>Single</span></p>
                </div>
                <div className='resume-item'>
                  <p>City <span>Hyderabad</span></p>
                </div>
                <div className='resume-item'>
                  <p>Nationality <span>Indian</span></p>
                </div>
                <div className='resume-item'>
                  <p>Experience <span>Fresher</span></p>
                </div>
                <div className='resume-item'>
                  <p>Contact <span>(+91) 6370093389</span></p>
                </div>
                <div className='resume-item'>
                  <p>E-mail <span>aditya.khuntia2003@gmail.com</span></p>
                </div>
                <div className='resume-item'>
                  <p>Languages <span>English, Hindi, Odia</span></p>
                </div>
              </div>
          </div>}

          {download&&<div className='resume-detail-download'>
              <div className='resume-download'>
                  {/* <div className='resume-icon'>
                  <i class='bx bx-check-circle'></i>
                  </div> */}
                  <div className='resume-text'>
                  <i style={{fontSize:'20rem', color:'#5ced73'}} class='bx bx-check-circle'></i>
                  <h2>Successfully Download</h2>
                  </div>
              </div>
          </div>}
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume
