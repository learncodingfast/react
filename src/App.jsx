import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppFooter } from './AppFooter'
import { NavbarList } from './NavbarList'
import About from './NavPages/About';
import Contact from './NavPages/Contact';
import { Home } from './NavPages/Home';
import Services from './NavPages/Services';


export const App = () => {
  return (
    <div>

<Router>
  <div className="d-flex flex-column min-vh-100">

 <NavbarList/>
  <main className="flex-grow-1">   
<Routes>
<Route path='/' element={<Home/>}/> 
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/contact' element={<Contact/>}/> 
  
</Routes>
</main> 


      <AppFooter/>
  </div>
</Router>



     
    </div>
  )
}
