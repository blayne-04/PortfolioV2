import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer(){
  return(
  <div className='footer d-flex justify-content-center'>
    <div className='d-flex'>
      <a href = 'https://www.linkedin.com/in/blayne-fuller-51859b268/' className = 'm-1'><BsLinkedin /></a>
    </div>
    <div className='d-flex'>
      <a href = 'https://github.com/blayne-04' className = 'm-1'><BsGithub /></a>
    </div>
  </div>
  )
} 

