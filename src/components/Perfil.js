import React from 'react'
import { Link } from 'react-router-dom'
import { PersonCircle, XCircle, XCircleFill } from "react-bootstrap-icons"
import Navbar from './Navbar'

const Perfil = () => {
  return (
    <div className='perfil'>
      <div className='Div'>
        <h2 className='perfH2'>Perfil</h2>
        <Link to="/home">
          <button className="btnClose">
            <XCircle className='XCircle' />
          </button>
        </Link>
      </div>
      <div className='perfDiv'>
        {/* <img className='perfImg' alt='img' /> */}
        < PersonCircle className='perfImg' />
        <h4 className='perfH4'></h4>
        <h4 className='perfH4'>CorreoUsuario</h4>
        <Link to="/">
          <h4 className='perfLogOut'>Cerrar sesión</h4>
        </Link>
      </div>
      <Navbar />
    </div>
  )
}

export default Perfil