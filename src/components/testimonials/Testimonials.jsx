import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/avatar1.jpg'
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar3.jpg';


const data = [

	{
	id:1,
	image:IMG1,
	title:'dummy of every time',
	Review:'sdfghjklfghjkl;fghjk sdfghjklfghjkl;fghjk',
	
	},

	{
	id:2,
	image:IMG2,
	title:'dummy of every time',
	github:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:3,
	image:IMG3,
	title:'dummy of every time',
	github:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:4,
	image:IMG4,
	title:'dummy of every time',
	github:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:5,
	image:IMG5,
	title:'dummy of every time',
	github:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:6,
	image:IMG6,
	title:'dummy of every time',
	github:'sdfghjklfghjkl;fghjk',
	
	}

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h3>Testimonials</h3>
      <div className="container testimonials_container">
       
      </div>
    </section>
  )
}

export default Testimonials