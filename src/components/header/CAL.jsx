import React from 'react';
import cv from '../../assets/cv.pdf'

const CAL = () => {
  return (
    <div className='cal'>
        <a href={cv} download>Download CV</a>
        <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CAL