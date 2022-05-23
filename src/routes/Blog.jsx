import React from 'react'
import Navbar from '../components/Navbar'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

  const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');


  return (
    <div>
      Blog
    </div>
  )
}

export default Blog