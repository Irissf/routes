import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Post = () => {

    //recogemos el parámetro de la ruta
    let params = useParams();
    const {data, error, loading}=useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if(loading){
        <h2>Loading...</h2>
    }

    if(error !== ""){
        <p>{error}</p>
    }

    return (
        <div className='container'>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Post