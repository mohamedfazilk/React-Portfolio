import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

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
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Html</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                 
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>React </h4>
                  <small className='text-light'>Intermediate</small>
                 </div>

                
                
               </article>

              
             </div>

           </div>

           {/* ================================backend=================================== */}

           <div className="backend__experience">
           <h3>Backend Development</h3>
             <div className="experience__content">
               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>  
                 <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Spring Boot</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
               </article>

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Spring Rest</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
               </article>

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>MySql</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Django</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                 </article>
               
                
               

               <article className="experience__details">
               <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Flask</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                 </article>
             </div>

           </div>


           <div className="front-end__experience">
             <h3>Tools Which I'm Used</h3>
             <div className="experience__content">
               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Version Control</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                 
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Eclipse</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Vscode</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Spring Tool Suite</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Intellij</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>                
               </article>

               <article className="experience__details">
                 <BsPatchCheckFill className='experience__details-icons'/>
                 <div>
                 <h4>Pycharm</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                
               </article>

              
             </div>

           </div>
         </div>

    </section>
  )
}

export default Experience