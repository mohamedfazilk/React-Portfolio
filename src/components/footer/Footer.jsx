import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <section id='contact'>
      <footer>
        <a href="#" className='footer__logo'>Fazil_Qickzo</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">My Photos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="#"><FaFacebookF/></a>
          <a href="https://instagram.com/fazil_k66"><FiInstagram/></a>

        </div>
      </footer>
    </section>
  )
}

export default Footer