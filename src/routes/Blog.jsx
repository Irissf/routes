import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

  //para búsquedas
  let [searchParams, setSearchParams] = useSearchParams();

  //cada vez que camcie nuestro params
  useEffect(() => {
    
  }, [searchParams]);

  const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');

  if(loading){
    <h2>Loading...</h2>
  }

  if(error !== ""){
    <p>{error}</p>
  }

  const handleChange = e =>{
    let filter = e.target.value;
    if(filter){
      setSearchParams({filter});
    }else{
      setSearchParams({});
    }
  }

  return (
    <div className='container'>
    <h1>Blog</h1>
    <input type="text" value={searchParams.get('filter') || ""}
    onChange={handleChange}></input>
    {
      data.filter(item => {
        let filter = searchParams.get('filter')
        if(!filter) return true //si no hay filtro lo devuelve todo
        
        let title = item.title.toLowerCase()
        return title.startsWith(filter.toLowerCase())
      }).map((item) => ( //primero aplicamos el filtro y luego pintamos el map
        <h4 key={item.id}>
          <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
        </h4>
      ))
    }
    </div>
  )
}

export default Blog