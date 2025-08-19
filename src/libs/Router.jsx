import React from 'react'
import { lazy } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

const Home = lazy(()=> import("../Pages/Home"));
const Contact = lazy(()=> import("../Pages/Contact"));
const Properties = lazy(()=> import("../Pages/Properties"));
const About = lazy(()=> import("../Pages/About"));
const ToDoList = lazy(()=> import("../Pages/ToDoList"))
 
const Router = () => {
    return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/todolist' element={<ToDoList/>}/>
</Routes>
</BrowserRouter>
    )
}

export default Router