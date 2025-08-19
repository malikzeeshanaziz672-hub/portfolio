import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Globel Css/MyProjectBtn.css"

const MyProjectBtn = () => {
    const navigate = useNavigate();
    const MyProjects = ()=>{
        navigate("/todolist");
    }
  return (
    <div className='myProjectBtn'>
        <button onClick={MyProjects}>View My Project</button>
    </div>
  )
}

export default MyProjectBtn