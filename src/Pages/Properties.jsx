import React from 'react'
import NavBar from '../Components/NavBar'
import "../Globel Css/Properties.css"
import reactPhoto from "../assets/react photo.avif"
const Properties = () => {
  return (
    <>
      <NavBar/>
      <h1 style={{padding:30 , color:"purple"}}>Properties</h1>
      <div className='propertiesContext'>
        <div className='propertiesUl'>
        <ul>
          <li> Proficient in HTML5, CSS3, JavaScript (ES6+) and React.</li>
           <li>Hands-on experience with React.js and basic state management.</li>
          <li>Responsive web design using Flexbox and Grid.</li>
          <li>Basic understanding of REST APIs and JSON.</li>
          <li>Familiar with modern tools like VS Code, npm, and browser dev tools.</li>
          <li>Basic knowledge of UI/UX principles and accessibility standards. </li>
          <li>Quick learner with a strong desire to grow .</li>
         
        </ul>
        
      </div>
        <div>
          <img
          style={{width:600 , height:450}}
           src={reactPhoto} alt="loading photo..." />
        </div>
      </div>
      
    </>
  )
}

export default Properties