import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/my_image.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, Welcome to my page!</h5>
          <h1>Qiaotong(Alan) Huang</h1>
          <h3 className="text-light">Software Engineering</h3>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header