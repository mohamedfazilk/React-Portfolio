import React from 'react';
import './header.css';
import CAL from './CAL';
import ME from '../../assets/fas.jpg'

const Header = () => {
  return (
   <header>
     <div className="container header-container">
       <h5>Hi I'm</h5>
       <h1>Mohamed Fazil </h1>
       <h5 className='text-light'>Full Stack Developer</h5>
     </div>

     <CAL />

     <div className='me'>
       <img src={ME} alt="me" />
     </div>



   </header>
  )
}

export default Header