import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../globalCss/Contact.css";
import contactImg from "../assets/contact brown img.jfif";

const Contact = () => {
  const [name  , setName ] = useState("");
  const [email ,setEmail] = useState("");
  const [textArea , setTextArea] = useState("")

const handleClick = (event) =>{
 event.preventDefault();
 if(name && email && textArea){
  alert("Successfully Completed")
 }else{
  alert("Should be Fully Completed !")
 }


}
  return (
    <>
      <NavBar />
      <div className="contactContainer" >
        <div className="contactImg animation" >
          <img src={contactImg} alt="" />
        </div>

        <div className="contactMe">
          <h1 className="animation">Contact Me</h1>
          <h3 className="animation">Enter you details below</h3>

          <form className="contactForm"  >
            <input type="text"
             placeholder="Name" 
            className="animation"
             onChange={(event)=>setName(event.target.value)}
              />
            <input 
            type="email"
             placeholder="Email" 
             className="animation"
             onChange={(event)=>setEmail(event.target.value)}
             />
            <textarea 
            rows={5} 
            cols={5} 
           placeholder="Enter Text" 
           className="animation"
           onChange={(event)=>setTextArea(event.target.value)}
           />

          </form>

          <button className="animation" onClick={handleClick}>Send</button>

        </div>
      </div>
    </>
  );
};

export default Contact;
