import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [

	{
	id:1,
	image:IMG1,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	},

	{
	id:2,
	image:IMG2,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	},

{
	id:3,
	image:IMG3,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	},

{
	id:4,
	image:IMG4,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	},

{
	id:5,
	image:IMG5,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	},

{
	id:6,
	image:IMG6,
	title:'dummy of every time',
	github:'https://google.com',
	demo:'https://mashable.com/article/dark-mode-apps-instagram-google-chrome-apple-ios13'
	
	}

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h3>My Recent Works</h3>
      <h5>Portfolio</h5>

      <div className="container portfolio-container">
        {data.map(({id,image,title,github,demo}) =>{
          return(
            
        <article key={id}  className="portfolio-item">
        <div className="portfolio-item-image">
            <img src={image} alt="image1" />
        </div>
        <h3>{title}</h3>
         <div className="portfolio-item-cta">
         <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio