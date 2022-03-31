import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Estadisticas from '../components/Estadisticas'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Perfil from '../components/Perfil'
import Login from '../containers/Login'

export default class AppRoutes extends Component {
  render() {
    return (

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login/>} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/estadisticas' element={<Estadisticas />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
        <Navbar />
      </BrowserRouter>

    )
  }
}
