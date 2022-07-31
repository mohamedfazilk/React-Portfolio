import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {
  return (
    <nav>
      <a href="#"  ><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav