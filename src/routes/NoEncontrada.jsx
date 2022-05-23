import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrada = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <Link to="/" className='noEnc__link'>Inicio</Link>
    </div>
  )
}

export default NoEncontrada