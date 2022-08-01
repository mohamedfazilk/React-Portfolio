import React from 'react';
import './experience.css';
import {BsPatchCheck} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Skills I Have</h5>
         <h2>Experience</h2>
         <div className="container experience__container">

           <div className="front-end__experience">
             <h3>Frontend Development</h3>
             <div className="experience__content">
               <article className="experience__details">
                 <BsPatchCheck/>
                 <h4>Html</h4>
                  <small className='text-light'>Experienced</small>
               </article>
             </div>

           </div>

           <div className="backend__experience">

           </div>
         </div>

    </section>
  )
}

export default Experience