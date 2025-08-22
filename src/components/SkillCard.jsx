import React from 'react'
import "../globalCss/SkillCard.css"

const SkillCard = ({header , percentage , imgLink , className = ''}) => {
  return (
    <div className={`skillCard ${className}`}>
        <div className='language '>{header}</div>
        <img className='skillLogo' src={imgLink} alt="Logo..." />
        <div className='progress'>
            <div style={{width : percentage}} className='progressLine'></div>
            <div className='percent'>{percentage}</div>
        </div>
    </div>
  )
}

export default SkillCard