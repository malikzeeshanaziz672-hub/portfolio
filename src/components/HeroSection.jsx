import React from 'react'
import MyProjectBtn from './MyProjectBtn'
import MyPic from "../assets/Malik Zeeshan Aziz.jfif";
import "../globalCss/HeroSection.css"

const HeroSection = () => {
  return (
    <div className='heroSectionContainer'>
       <div className='heroContent'>
      <h1 className='animation'>Fronted Developer</h1>
      <p className='animation'>
        "Developed responsive and user-friendly web interfaces using <span> HTML, CSS, JavaScript  and React js</span> to enhance user experience.
        Collaborated with designers and backend developers to integrate APIs and deliver seamless front-end functionality.
        Optimized website performance by improving load times and implementing best practices in modern frontend development."
      </p>
      <MyProjectBtn className='btn animation'/>
       </div>

       <div className='MyPicHero'>
    <img src={MyPic} alt="Malik Zeeshan Aziz Picture" className='heroImg animation'/>
       </div>
    </div>
  )
}

export default HeroSection