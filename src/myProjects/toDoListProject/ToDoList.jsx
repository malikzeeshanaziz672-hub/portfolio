import React, { useState } from 'react'
import "./ToDoList.css"
import { MdDelete } from 'react-icons/md';

const ToDoList = () => {
    const [initial , setInitial] = useState();
    const [data , setData] = useState([])

    const handleInput = (event) =>{
     setInitial(event.target.value)
    }

   const handleClick = () =>{
    let store = [...data , initial]
   setData(store)
   setInitial("")
   }

   const handleDeleteIcon =(index)=>{
       let filterData = data.filter((elem , id)=>{
        return id != index
       })
       setData(filterData)
   }
  return (
    <>
    <h1 className='ToDoh1'>TO DO LIST</h1>
     
      
        <div className='toDoContainer animation'>

            <div className='toDoInput'>
            <input type="text" placeholder='ENTER YOUR TEXT' value={initial} onChange={handleInput} />
            <button onClick={handleClick}>ADD</button>
            </div>

          {data.map((curVal , index)=>{
            return(
                
                <div className='data'>
                    <p>{curVal}</p>
                    <MdDelete className='deleteIcon' onClick={()=>handleDeleteIcon(index)}/>
                </div>
            )
          } )}
        </div>
        
    </>
  )
}

export default ToDoList