import React from 'react';
import './about.css';
import ME from '../../assets/fas.jpg';
import {FaAward} from 'react-icons/fa';

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="ME" />
          </div>
        
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Currently working</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default about