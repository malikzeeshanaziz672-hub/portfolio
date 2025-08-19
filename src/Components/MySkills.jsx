import React from 'react'
import "../Globel Css/MySkills.css"
import {  DiHtml5, DiReact } from 'react-icons/di'
import { MdCss, MdJavascript } from 'react-icons/md'

const MySkills = () => {
  return (
    <div className='skillsContainer'>
        <div className='skillH1'> <h1 >Technical Skills</h1></div>
       
        <div className='skillcontent'>
            <div className='skills'>
                <DiHtml5 className='htmlIcon'/>
                <p>Html 5</p>
            </div>
            <div className='skills'>
                <MdCss className='cssIcon'/>
                <p>Css</p>
            </div>
            <div className='skills'>
                <MdJavascript className='jsIcon'/>
                <p>JavaScript</p>
            </div>
            <div className='skills'>
                <DiReact className='reactIcon'/>
                <p>React js</p>
            </div>
        </div>
    </div>
  )
}

export default MySkills