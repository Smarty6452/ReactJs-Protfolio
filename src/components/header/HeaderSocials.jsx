import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/rohit-bharti-/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Smarty6452" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/rohit__.03.__/" target="_blank"><AiOutlineInstagram/></a>
        
    </div>
  )
}
export default HeaderSocials
