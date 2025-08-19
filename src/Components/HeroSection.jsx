import React from 'react'
import "../Globel Css/HeroSection.css"
import MyProjectBtn from './MyProjectBtn'
import { useNavigate } from 'react-router-dom'
import MyImg from "../assets/WhatsApp Image 2025-07-25 at 6.56.10 PM.jpeg"

const HeroSection = () => {
  const navigate = useNavigate();
  const contactMe = ()=>{
    navigate("/contact")
  }
  return (
    <div className='heroContainer'>
      <div className='heroContent'>
        <h1 style={{color:"orange"}}>Hi , I'm Malik Zeeshan Aziz</h1>
        <h4 style={{color : "green"}}>Fronted_Developer</h4>
        <h4 style={{color : "green"}}>Ready for Intership and JavaScript Logics</h4>

        <p>
          I can build very beautifull projects
        </p>
        <div className='HeroBtn'>
            <MyProjectBtn/> 
            <button onClick={contactMe}>Contact Me</button>
        </div>

     
      </div>
      <div className='heroImg'>
        <img src={MyImg} alt="" />
      </div>
    </div>
  )
}

export default HeroSection