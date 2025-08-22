import React from 'react'
import "../globalCss/MyProjectBtn.css"
import { useNavigate } from 'react-router-dom'

const MyProjectBtn = () => {
  const navigate = useNavigate();

     const handleClick  = () =>{
       navigate("/projects")
    }

  return (
    <div className='btn'>
        <button onClick={handleClick}>View My Projects</button>

    </div>
  )
}

export default MyProjectBtn