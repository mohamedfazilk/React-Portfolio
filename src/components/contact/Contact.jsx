import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iv6f50x', 'template_28ngzaz', form.current, 'DFZhpuQmWfC_NBjK0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);////////////////emailjs///////////
      });
  };
////////////////
  return (
    <section id='contact'>
      <h5>Get   In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < MdOutlineEmail  className='contact__option-icon ' />
            <h4>Email</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="mailto:Mohamedfazil961@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            < BsWhatsapp  className='contact__option-icon '/>
            <h4>Whatsapp</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="https://whatsapp.com/send?phone=8086447566" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            < MdOutlineEmail   className='contact__option-icon '/>
            <h4>Email</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="mailto:Mohamedfazil961@gmail.com" target='_blank'>Send a Message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact