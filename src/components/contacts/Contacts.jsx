import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { IoCalendarOutline } from 'react-icons/io5';

const Contacts = () => {

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Email Section */}
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>qiaotong6418@gmail.com</h5>
            <a href="mailto:qiaotong6418@gmail.com">Send a message</a>
          </article>
        </div>

        {/* Schedule a Meeting Section */}
        <div className="contact__schedule">
        <IoCalendarOutline className='contact__schedule-icon' />
          <p>
            Use the link below to book a meeting with me.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RVym-TxzM9LNKEbJJX0dDtCNN3BzTG1d9Y19AOx1fQkVD-sNbNWCC9uNIzcvln57FwFy8Ks4S"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a Meeting
          </a>
         </div>
      </div>    
    </section>
  )
}

export default Contacts