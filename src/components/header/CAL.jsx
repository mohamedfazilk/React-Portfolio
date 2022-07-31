import React from 'react';
import cv from '../../assets/cv.pdf'

const CAL = () => {
  return (
    <div className='cal'>
        <a href={cv} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CAL