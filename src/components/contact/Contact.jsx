import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get   In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < MdOutlineEmail />
            <h4>Email</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="mailto:Mohamedfazil961@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            < BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="https://whatsapp.com/send?phone=8086447566" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            < MdOutlineEmail />
            <h4>Email</h4>
            <h5>Mohamedfazil961@gmail.com</h5>
            <a href="mailto:Mohamedfazil961@gmail.com" target='_blank'>Send a Message</a>
          </article>
        </div>


        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact