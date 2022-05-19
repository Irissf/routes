import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contactos">Contactos</Link>
        <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar