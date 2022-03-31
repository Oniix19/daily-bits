import React from 'react'
import { url } from '../helpers/UrlUsers'

const Formulario = () => {



  return (
    <div>
      <form>
        <label>Nombre:</label>
        <input placeholder='Ingresa tu nombre:' />
        <label>Correo:</label>
        <input placeholder='Ingresa tu correo:' />
        <label>Contraseña:</label>
        <input placeholder='Ingresa tu contraseña:' />
        <label>Confirmacion de contraseña:</label>
        <input placeholder='Repite tu contraseña:' />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario