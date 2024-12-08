import React from 'react'
import './about.css'
import myImage from '../../assets/headshot.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small><i>Northeastern University</i> <br/>Msc. Information Systems(Computer System Engineering)</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full-stack Development</li>
                      <li>Data Engineer & AI</li>
                      <li>Blockchain/Smart Contract</li>
                    </ul>
                  </small>
              </article>

            </div>

          </div>
      </div>
    </section>
  )
}

export default About