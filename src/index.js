import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from './routes/Blog'
import Contactos from './routes/Contactos'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
      </Routes>
    </BrowserRouter>
);

