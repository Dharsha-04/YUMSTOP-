import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
                <header className="navbar">
      
      <div className="logo">
        <span className="sweet">YUM</span>
        <span className="grain">STOP</span>
      </div>

      
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/recipes">Recipe</NavLink>
        <NavLink to="/added">Add ur Recipe</NavLink>
        


        
      </nav>
    
    </header>
    </div>
  )
}

export default Navbar