import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav__navbar'>
        <Link className='nav__link' to="/">Inicio</Link>
        <Link className='nav__link' to="/contactos">Contactos</Link>
        <Link className='nav__link' to="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar