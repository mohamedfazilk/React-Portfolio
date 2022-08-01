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
          <div className="portfolio-item-image">
              <img src={IMG1} alt="image1" />
          </div>
          <h3>title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>



        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG2} alt="image1" />
          </div>
          <h3>title</h3>
           <div className="portfolio-item-cta">
           <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>



        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG3} alt="image1" />
          </div>
          <h3>title</h3>
           <div className="portfolio-item-cta">
           <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>



        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG4} alt="image1" />
          </div>
          <h3>title</h3>
           <div className="portfolio-item-cta">
           <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>



        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG5} alt="image1" />
          </div>
          <h3>title</h3>
           <div className="portfolio-item-cta">
           <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG6} alt="image1" />
          </div>
          <h3>title</h3>
           <div className="portfolio-item-cta">
           <a href="#" className='btn' target='_blank'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         
        </article>
      </div>
    </section>
  )
}

export default Portfolio