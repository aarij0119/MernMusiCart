import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import ViewCart from './components/ViewCart'
import Admin from './components/Admin'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/viewCart' element={<ViewCart />}></Route>
        <Route path='/admindashboard' element={<Admin />}></Route>
      </Routes>
    </Router>
  )
}

export default App