import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Layout from './pages/Header'
function App() {
  

  return (
    < >
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </Router>
      {/* <div className='font-bold text-[44px] text-red-500'>hiiii</div> */}
    </>
  )
}

export default App
