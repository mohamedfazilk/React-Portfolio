import React from 'react';
import './about.css';
import ME from '../../assets/fas.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

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
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years workspace </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ workspace</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eius tenetur ratione dicta? Beatae quaerat amet molestiae
               sit rem illum, aliquid, placeat earum ipsa, qui itaque perferendis
                cum numquam repellat similique.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>      

        </div>
      </div>
    </section>
  )
}

export default about