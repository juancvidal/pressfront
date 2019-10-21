import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Usuario from './usuarios/index';
import Crear from './usuarios/crear';
import Editar from './usuarios/editar';
import Menu from './menu/menu';

const Tareas = () => (
  <div>
    <h1>
      Tareas
    </h1>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Route exact path='/' component={ Usuario } />
      <Route exact path='/tareas' component={ Tareas } />
      <Route exact path='/crear' component={ Crear } />
      <Route exact path='/editar' component={ Editar } />
    </BrowserRouter>
    
  );
}

export default App;
