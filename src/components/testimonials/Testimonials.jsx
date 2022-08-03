import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/avatar1.jpg'
import IMG2 from '../../assets/avatar2.webp';
import { Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const data = [

	{
	id:1,
	image:IMG1,
	title:'Near Taj Mahal',
	Review:'Near One Of The 7 Wonders Of the World',
	
	},

	{
	id:2,
	image:IMG2,
	title:'Near Rohtang Pass',
	Review:'At a high altitude of 13,050 ft, is named after the local word for pile of corpses.',
	
	},



{
	id:3,
	image:"https://www.targetadmission.com/img/colleges/optimized/600/IMG-1-772888231.jpg",
	title:'Btech',
	Review:'MGM College Of Engineering&Pharmaceutical Sciences',
	
	},

	
	{
		id:4,
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLw-A6xmEkudC7wvrKyLIZGLRIBGjLnzCCei1P91qV2dCllzIDdhD9cOE94lIlhCKrTKg&usqp=CAU",
		title:'Higher Secondary',
		Review:'Gvhss Kalpakanchery',
		
	},
	
	{
		id:5,
		image:"https://cache.careers360.mobi/media/schools/social-media/media-gallery/8817/2019/7/24/Aes%20Central%20School-Campus%20View.jpg",
		title:'High School',
		Review:'Aes Central School',
		
		}
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h3>Testimonials</h3>
      <Swiper className="container testimonials_container"  modules={[Pagination,Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={true}
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