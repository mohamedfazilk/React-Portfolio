import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/avatar1.jpg'
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar3.jpg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h3>Testimonials</h3>
      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={IMG1} alt="avatar-one" />
          </div>

          <h5 className='client__name'>Fazil</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nostrum nesciunt officia itaque dolorum sit sequi!
              
          </small>


        </article>
      </div>
    </section>
  )
}

export default Testimonials