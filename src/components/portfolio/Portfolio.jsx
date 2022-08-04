import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio8.webp';
import IMG9 from '../../assets/portfolio10.webp';
import IMG8 from '../../assets/portfolio9.webp';


const data = [

	{
		id: 1,
		image: "https://media.istockphoto.com/photos/online-job-search-picture-id1148395111?k=6&m=1148395111&s=612x612&w=0&h=l0rTGVZm2Osx5O0GkrTtkH3COyVQhnbFvsuBmZHikr0=",
		title: 'Search Your Jobs',
		github: 'https://github.com/mohamedfazilk/jobswebsite.git',
		demo: 'https://mohamedfazilk.github.io/jobswebsite/'

	},

	{
		id: 2,
		image: IMG2,
		title: 'Plan A Trip ',
		github: 'https://github.com/mohamedfazilk/tour-pack-react-app.git',
		demo: 'https://tour-package.netlify.app/'

	},

	{
		id: 3,
		image: IMG3,
		title: 'Para-Robot',
		github: 'https://github.com/mohamedfazilk/Paragraph-generator.git',
		demo: 'https://para-robot.netlify.app/'

	},

	{
		id: 4,
		image: IMG4,
		title: "Let's Play TIC TAC TOE",
		github: 'https://github.com/mohamedfazilk/TIC-TAC-TOE-.git',
		demo: 'https://mohamedfazilk.github.io/TIC-TAC-TOE-/',

	},

	{
		id: 5,
		image: IMG5,
		title: 'Review Yourself',
		github: 'https://github.com/mohamedfazilk/My-Reviews.git',
		demo: 'https://my-reviewapp.netlify.app/'

	},

	{
		id: 6,
		image: IMG6,
		title: 'Your Payment is Safe here',
		github: 'https://github.com/mohamedfazilk/Stripe-app.git',
		demo: 'https://payment-app.netlify.app/'

	},

	{
		id: 7,
		image: IMG8,
		title: 'Remind Your Birthday',
		github: 'https://github.com/mohamedfazilk/Birthday-remainder-react-app.git',
		demo: 'https://remind-your-birthday.netlify.app/'

	},
	{
		id: 8,
		image: IMG9,
		title: 'Info-Tab',
		github: 'https://github.com/mohamedfazilk/Tab-Info.git',
		demo: 'https://info-tab.netlify.app/'

	},

	{
		id: 9,
		image: IMG7,
		title: 'Todo-App',
		github: 'https://github.com/mohamedfazilk/Grocery-app.git',
		demo: 'https://todo-appbasic.netlify.app/'

	},



]



const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Works</h5>
			<h3>Portfolio </h3>


			<div className="container portfolio-container">
				{data.map(({ id, image, title, github, demo }) => {
					return (

						<article key={id} className="portfolio-item">
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