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

  return (
    <div>
    <h1>Blog</h1>

    {
      data.map((item) => (
        <h4 key={item.id}>
          <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
        </h4>
      ))
    }
    </div>
  )
}

export default Blog