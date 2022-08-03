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
            <h3>Web Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Effective Typography.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Calls-To-Action
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>The Right Color Scheme.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Appropriate Design Elements.
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
              <p>Responsible code for whole.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Well Beign Structure.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>User-Friendly Pages.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexible Maintenance.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast Testing & Delivery.
              </p>
            </li>
          </ul>
        </article>

        {/* =========================3============================== */}


        <article className='service'>

        <div className="service__heading">
        <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Well Beign Research The Area Of Content
              </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Deep Understanding About The Content
              </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Better Analytic Skills.
              </p>
          </li>

        

        



        </ul>
        </article>
      



      </div>
    </section>
  )
}

export default Services