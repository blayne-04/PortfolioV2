import React from 'react'
import profilePic from '../../assets/profilepic.jpeg'

export default function AboutMe(){
  return(
    <div className = ' d-flex row'>
      <img src = {profilePic} alt = 'Blayne Fuller' className = 'profilePic'/>
          <p className = 'col-md-12 px-5'>Hi, I'm Blayne Fuller, I'm an 18 year old recent high school graduate and a full stack web developer,
          What truly defines me is my commitment to constantly push myself, learn, and grow as a person. I believe life is an adventure and I don't want to waste any 
          of the time i'm given. Things I like to do include but are not limited to, playing trumpet, video games, reading, exercise and self improvement.
          In essence, I am a driven individual who thrives on embracing new challenges, learning continuously, and making the most of life's adventures.
          </p>
    </div>

  )
}