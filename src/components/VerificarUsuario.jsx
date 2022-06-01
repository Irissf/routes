import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom';

const VerificarUsuario = (props) => {

    //nos traemos al usuario
    const {user} = useContext(UserContext);

    //en caso de que no exista el usuario, lo manda a otra ruta
    if(!user){
        return <Navigate to="/" />
    }

    return props.children
}

export default VerificarUsuario