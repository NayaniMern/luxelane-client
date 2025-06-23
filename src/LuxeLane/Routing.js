import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'



import Blog from './Blog'
import Contact from './Contact'


import UserLogin from './UserLogin'
import UserSignup from './UserSignup'
import NoPage from './NoPage'

import Dashboard from './Admin/Dashboard'
import FA from './FA'
import MenDetails from './MenDetails'
import WomenDetails from './WomenDetails'
import KidsDetails from './KidsDetails'
import FADetails from './FADetails'
import BlogDetails from './BlogDetails'
import Login from './Admin/Login'
import Cart from './Cart'







const Routing = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/men' Component={Men}/>
      <Route path='/women' Component={Women}/>
      <Route path='/kids' Component={Kids}/>
      <Route path='/footwear & accessories' Component={FA}/>
      
      
      
      <Route path='/blog' Component={Blog}/>
      <Route path='/contact' Component={Contact}/>
      
      <Route path='/userlogin' Component={UserLogin}/>
      <Route path='/usersignup' Component={UserSignup}/>
      <Route path='*' Component={NoPage}/>
      <Route path='/admin' Component={Login}/>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/menDetails/:id' Component={MenDetails}/>
      <Route path='/womenDetails/:id' Component={WomenDetails}/>
      <Route path='/kidsDetails/:id' Component={KidsDetails}/>
      <Route path='/FADetails/:id' Component={FADetails}/>
      
      <Route path='/BlogDetails/:id' Component={BlogDetails}/>
      <Route path='/cart' Component={Cart}/>
      
    </Routes>
  )
}

export default Routing




