import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h3>My Recent Works</h3>
      <h5>Portfolio</h5>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio__item-image">

          </div>
          <h3>title</h3>
          <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" classNam='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio