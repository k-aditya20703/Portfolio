import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
        <Navbar/>

        <section className='contact'>
          <div className='contact-container'>
            <div className='contact-box'>
              <h2>Let's Work Together</h2>
              <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
              <div className='contact-detail'>
              <i class='bx bxs-phone' ></i>
              <div className='detail'>
                <p>Phone</p>
                <p>(+91)6370093389</p>
              </div>
              </div>
              <div className='contact-detail'>
              <i class='bx bxs-envelope' ></i>
              <div className='detail'>
                <p>E-mail</p>
                <p>aditya.khuntia2003@gmail.com</p>
              </div>
              </div>
              <div className='contact-detail'>
              <i class='bx bx-map' ></i>
              <div className='detail'>
                <p>Address</p>
                <p>Hyderabad,Telengana,India</p>
              </div>
              </div>
            </div>

            <div className='contact-box'>
              <form action="https://formsubmit.co/aditya.khuntia2003@gmail.com" method='post'>
                  <h2 className='heading'>Contact <span>Me!</span></h2>
                  <div className='field-box'>
                    <input type='text' name='name' placeholder='First Name' required></input>
                    <input type='email' name='email' placeholder='E-mail Address' required></input>
                    <input type='number' name='number' placeholder='Phone Number' required></input>
                    <input type='text' name='subject' placeholder='Subject' required></input>
                    <textarea name='msg' id='' placeholder='Your Message' required></textarea>
                  </div>
                  <button className='download-btn' type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact
