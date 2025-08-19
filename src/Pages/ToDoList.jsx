import React, { useState } from 'react'
import "../Globel Css/ToDoList.css"
import { FiDelete } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { BsBack } from 'react-icons/bs';
import { RiArrowGoBackFill } from 'react-icons/ri';

const ToDoList = () => {
  const [initial , setInitial] = useState();
  const [data , setData] = useState([]);


  const handleChange=(event)=>{
   setInitial(event.target.value)
  }
  const handleClick =() =>{
    let store = [...data ,initial]
     setData(store);
     setInitial("")

  }

  const handleIcon =(index)=>{
     let filterData =  data.filter((value , ind)=>{
        return ind != index
       })
       setData(filterData)
  }

  const navigate = useNavigate();
  const back =() =>{
    navigate("/")
  }

  return (
    <>
    <button
    onClick={back}
     className='btnBackToDo'
    > <RiArrowGoBackFill/></button>

    <div className='todoContainer'>
      <div className='todoContext'>
         <div>
        <h1 style={{margin : "20px"}}> To Do List</h1>
        <input type="text" placeholder='Enter Your Text'
        value={initial}
        onChange={handleChange}
        />
        <button onClick={handleClick}>Add me</button>
      </div>
        <div>
        {data.map((curVal , index)=>{
          return (
            <div className='todoMap'>
              <h4 style={{color: "yellowgreen"}}>{curVal}</h4>
              <MdDelete onClick={()=>handleIcon(index)}/>          
             </div>
          )
        })}

        </div>
     </div>

    </div>
    </>
  )
}

export default ToDoList