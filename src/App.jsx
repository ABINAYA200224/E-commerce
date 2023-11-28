import { useState } from 'react'

import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Layout from './components/Header'
import Home from './pages/Home'
import Card from './components/Card'
import Jewelery from './pages/Jewelery'
import Mensclothing from './pages/Men\'s clothing'
import Electronics from './pages/Electronics'
import Womensclothing from './pages/Women\'sclothing'
function App() {
  

  return (
    < >
    
    
    <Router>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/jewelery"element={<Jewelery/>} />
        <Route path="/mensclothing"element={<Mensclothing/>} />
        <Route path="/electronics"element={<Electronics/>} />
        <Route path="/womensclothing"element={<Womensclothing/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
