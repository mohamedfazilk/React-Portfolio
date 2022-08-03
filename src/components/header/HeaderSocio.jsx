import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocio = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohamed-fazil-k-054217196" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/mohamedfazilk" target='_blank'><FaGithub /></a>
        <a href="https://instagram.com/fazil_k66" target='_blank'><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocio