import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Layout from './pages/Header'
import Home from './pages/Home'
function App() {
  

  return (
    < >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
      {/* <div className='font-bold text-[44px] text-red-500'>hiiii</div> */}
    </>
  )
}

export default App
