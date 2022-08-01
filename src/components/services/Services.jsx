import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I can Provide</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className='service'>

          <div className="service__heading">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

          </ul>
        </article>
{/* =====================1st================== */}

        <article className='service'>
          <div className="service__heading">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
        </article>

        {/* =========================3============================== */}


        <article className='service'>

        <div className="service__heading">
        <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur.
              </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur.
              </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur.
              </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur.
              </p>
          </li>

        



        </ul>
        </article>
      



      </div>
    </section>
  )
}

export default Services