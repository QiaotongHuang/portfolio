import React from 'react'
import {BsInstagram, BsLinkedin, BsGithub, BsEnvelope} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/qiaotong-alan-huang-449ba0231/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/QiaotongHuang" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="mailto:qiaotong6418@gmail.com" target="_blank" rel='noreferrer'><BsEnvelope/></a>
        <a href="https://www.instagram.com/qiaotong_huang?igsh=MTA4YXcwZTUzd2lndg%3D%3D&utm_source=qr" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials