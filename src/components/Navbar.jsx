import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';

import './../styles/navbar.css'

const Navbar = () => {

  const {user} = useContext(UserContext);

  return (
    <nav className='nav__navbar'>
      <Link className='nav__link' to="/">
        {user ? '❤ Iris ❤':'Sin conexión'}
      </Link>
      <NavLink className='nav__link' to="/">Inicio</NavLink>
      <NavLink className='nav__link' to="/contactos">Contactos</NavLink>
      <NavLink className='nav__link' to="/blog">Blog</NavLink>
    </nav>
  )
}

export default Navbar