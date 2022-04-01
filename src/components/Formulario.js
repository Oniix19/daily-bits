import axios from 'axios'
import React, { useState } from 'react'
import { XCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { url } from '../helpers/UrlUsers'

const Formulario = () => {

  const init = {
    nombre: "",
    constraseña: "",
    correo: "",
    poster: ""
  }

  const [usuario, setUsuario] = useState(init)

  const { nombre, constraseña, confConstraseña, correo, poster } = usuario

  const handleChange = ({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value
    })
  }

  const postData = () => {
    axios.post(url, usuario)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      })
  }




  const handleSubmit = e => {
    e.preventDefault()

    if (constraseña != confConstraseña) {
      alert("las contraseñas no coinciden")

    } else {
      postData()
      alert("registro cargado")
    }
  }
  return (
    <div>
      <Link to="/">
        <button className="btnClose">
          <XCircle className='XCircle' />
        </button>
      </Link>
      <form className='formulario' onSubmit={handleSubmit}>
        <h3 className='formH3'>Debes estar registrado para poder realizar la prueba, por favor registrate...</h3>
        <label>Nombre:</label>
        <input className='formInput' name="nombre" placeholder='Ingresa tu nombre:' value={nombre} onChange={handleChange} />
        <label>Correo:</label>
        <input className="formInput" name="correo" type="email" placeholder='Ingresa tu correo:' value={correo} onChange={handleChange} />
        <label>Contraseña:</label>
        <input className="formInput" name="constraseña" type="password" placeholder='Ingresa tu contraseña:' value={constraseña} onChange={handleChange} />
        <label>Confirmacion de contraseña:</label>
        <input className="formInput" name="confConstraseña" type="password" placeholder='Repite tu contraseña:' value={confConstraseña} onChange={handleChange} />
        <button className='formBtn' type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario