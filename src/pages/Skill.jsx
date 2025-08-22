import React from 'react'
import "../globalCss/Skill.css"
import NavBar from '../components/NavBar'
import SkillCard from '../components/SkillCard'
import htmlLogo from "../assets/html-5.png"
import cssLogo from "../assets/css.png"
import jsLogo from "../assets/js.png"
import reactLogo from "../assets/physics.png"
import tailwindLogo from "../assets/css.png"
const Skill = () => {
  return (
    <><NavBar/>
   <div className='Skill'>

    <h1 className='skillHeading'>MY SKILLS</h1>

    <div className='skillList'>
      <div className='Cards'>
        <SkillCard percentage="90%" header="HTML" imgLink={htmlLogo} className="animation html"/>
      </div>
        <div className='Cards'>
        <SkillCard percentage="95%" header="CSS"    imgLink={cssLogo}  className="animation css"/>
      </div>
        <div className='Cards'>
        <SkillCard percentage="85%" header="JAVASCRIPT" imgLink={jsLogo}  className="animation js"/>
      </div>
        <div className='Cards'>
        <SkillCard percentage="83%" header="REACT JS" imgLink={reactLogo}  className="animation react"/>
      </div>
        <div className='Cards'>
        <SkillCard percentage="80%" header="TAILWENT" imgLink={tailwindLogo}  className="animation tailwind"/>
      </div>
    </div>

   </div>

    </>

  )
}

export default Skill