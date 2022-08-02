import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/avatar1.jpg'
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar3.jpg';
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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
	Review:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:3,
	image:IMG3,
	title:'dummy of every time',
	Review:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:4,
	image:IMG1,
	title:'dummy of every time',
	Review:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:5,
	image:IMG2,
	title:'dummy of every time',
	Review:'sdfghjklfghjkl;fghjk',
	
	},

{
	id:6,
	image:IMG3,
	title:'dummy of every time',
	Review:'sdfghjklfghjkl;fghjk',
	
	}

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h3>Testimonials</h3>
      <Swiper className="container testimonials_container"  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
     
     

        {data.map(({id,image,Review,title}) => {
          return(
            <SwiperSlide key={id} className="testimonial">
             <div className="client__avatar">
              <img src={image} alt="avatar-one" />
            </div>
  
            <h5 className='client__name'>{title}</h5>
            <small className='client__review'>
             {Review}
                
            </small>
  
  
          </SwiperSlide>
          )
        })}
       
      </Swiper>
    </section>
  )
}

export default Testimonials