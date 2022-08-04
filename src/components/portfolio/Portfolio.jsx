import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/lets.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [

	{
	id:1,
	image:"https://media.istockphoto.com/photos/online-job-search-picture-id1148395111?k=6&m=1148395111&s=612x612&w=0&h=l0rTGVZm2Osx5O0GkrTtkH3COyVQhnbFvsuBmZHikr0=",
	title:'Search Your Jobs',
	github:'https://google.com',
	demo:'https://mohamedfazilk.github.io/jobswebsite/'
	
	},

	{
	id:2,
	image:IMG2,
	title:'dummy of every time',
	github:'https://google.com',
	demo:''
	
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
	title:"Let's Play TIC TAC TOE",
	github:'https://google.com',
	demo:'https://mohamedfazilk.github.io/TIC-TAC-TOE-/',
	
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
       <h5>My Recent Works</h5>
      <h3>Portfolio </h3>
     

      <div className="container portfolio-container">
        {data.map(({id,image,title,github,demo}) =>{
          return(
            
        <article key={id}  className="portfolio-item">
        <div className="portfolio-item-image">
            <img src={image} alt="image1" />
        </div>
        <h3>{title}</h3>
         <div className="portfolio-item-cta">
         <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
        <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio