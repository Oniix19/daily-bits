import React from 'react'

const Perfil = () => {
  return (
    <div className='perfil'>
        <h2 className='perfH2'>Perfil</h2>
        <div className='perfDiv'>
            <img className='perfImg' alt='img'/>
            <h4 className='perfH4'>NombreUsuario</h4>
            <h4 className='perfH4'>CorreoUsuario</h4>
            <h4 className='perfLogOut'>Cerrar sesión</h4>
        </div>

    </div>
  )
}

export default Perfil