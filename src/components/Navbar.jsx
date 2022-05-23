import React from 'react'
import { NavLink } from 'react-router-dom'

import './../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav__navbar'>
        <NavLink className='nav__link' to="/">Inicio</NavLink>
        <NavLink className='nav__link' to="/contactos">Contactos</NavLink>
        <NavLink className='nav__link' to="/blog">Blog</NavLink>
    </nav>
  )
}

export default Navbar