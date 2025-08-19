import React, { Suspense } from 'react'
import "./App.css"
import Loader from './Components/Loader'
import Router from './libs/Router'
const App = () => {
  return (
    <Suspense fallback={Loader}>
     <Router/>
    </Suspense>
  )
}

export default App