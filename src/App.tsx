import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import { Menu } from "./componentes/Menu"
import {Contatos} from './pages/contatos/Contatos'
import { Home } from './pages/Home'
import { Servicos } from './pages/Servicos'

//mais de um elemento eu uso fragmentaçao ou posso usar a div

function App() {
  return (
  
    <>
  <BrowserRouter>{/**rotear no navegador */}
  <Menu/>
  <Routes>{ /**Rotas */}
  <Route path ='/' element={<Home/>}/>
  <Route path ='/Contatos' element={<Contatos/>}/>
  <Route path ='/servicos' element={<Servicos/>}/>
  </Routes>
  </BrowserRouter>
  </>
  
  );
}

export default App;
