import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from './routes/Blog'
import Contactos from './routes/Contactos'
import Inicio from './routes/Inicio';
import NoEncontrada from './routes/NoEncontrada';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
      {/* APP en este caso, funciona como una plantilla */}
        <Route path='/' element={<App/>}>
          {/* Index Lo que se pinta en la raiz */}
          <Route index element={<Inicio/>}></Route>
          {/* rutas anidadas */}
          <Route path='blog' element={<Blog/>}/>
          <Route path='contactos' element={<Contactos/>}/>

          {/* por si ponen ruta que no existe */}
          <Route path='*' element={<NoEncontrada/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

