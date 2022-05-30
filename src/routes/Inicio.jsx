import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider';

const Inicio = () => {

  const {user, signIn, singOut} = useContext(UserContext);

  return (
    <div className='container'>
        <h1>Inicio</h1>
        <h2>
          {
            user ? 'conectado' : 'desconectado'
          }
        </h2>
        {
          user ? ( <button onClick={singOut}>Desconectar</button>)
          : ( <button onClick={signIn}>Acceder</button>)
        }
       
    </div>
  )
}

export default Inicio