import React from 'react';
import './about.css';
import ME from '../../assets/fas.jpg';
import {AiFillGooglePlusSquare} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import {SiQuicktime} from 'react-icons/si'

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
              <SiQuicktime className='about__icon'/>
              <h5 className='text-co'> Co-founder </h5>
              <small>Qickzo</small>
            </article>

            <article className="about__card">
              <AiFillGooglePlusSquare className='about__icon'/>
              <h5>GDG </h5>
              <small>Member of GDG  </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+completed</small>
            </article>
          </div>

          <p>I'm a Full Stack Developer, With My Experience I can build Your Dreams
            with my Skills & Efficient Knowledge Of Working In Different
            Projects. If You Like My Works Then don’t hesitate to reach out me !  
            </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>      

        </div>
      </div>
    </section>
  )
}

export default about