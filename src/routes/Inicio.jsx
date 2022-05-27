import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Inicio = () => {

  const {user, setUser} = useState(false);

  return (
    <div className='container'>
        <h1>Inicio</h1>
        <h2>
          {
            user ? 'conectado' : 'desconectado'
          }
        </h2>
        <button onClick={() => setUser(true)}>Acceder</button>
    </div>
  )
}

export default Inicio