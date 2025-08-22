import React from 'react'
import {lazy} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(()=>import("../pages/Home"));
const Projects = lazy(()=>import("../pages/Projects"));
const Contact = lazy(()=>import("../pages/Contact"))
const Skill = lazy(()=>import("../pages/Skill"))
const Router = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/projects' element={<Projects/>}/> 
 </Routes> 
 </BrowserRouter>
)
}

export default Router