import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocio = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.google.com/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.google.com/" target='_blank'><FaGithub /></a>
        <a href="https://www.google.com/" target='_blank'><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocio