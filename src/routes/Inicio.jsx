import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
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
          user ? (<div><button onClick={singOut}>Desconectar</button> <Link to="/protegida">ruta protegida</Link></div>)
          : ( <button onClick={signIn}>Acceder</button>)
        }
       
    </div>
  )
}

export default Inicio