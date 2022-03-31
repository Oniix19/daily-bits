import React from 'react'
import { Clock, Chat } from "react-bootstrap-icons";

const Estadisticas = () => {
  return (
    <div className='estadisticas'>
      <h2 className='estH2'>Estadísticas</h2>
      <select className='estSel'>
        <option >Los últimos 7 días</option>
        <option>Los últimos 15 días</option>
        <option>Los últimos 30 días</option>
        <option>Registro historico</option>
      </select>

      <div className='estDiv'>
        <p><Clock className='estImg'/>Tiempo de estudio (horas)</p>
        <p className='estResp1'>1</p>
      </div>
      <div className='estDiv'>
        <p><Chat className='estImg'/>Respuestas contestadas</p>
        <p className='estResp2'>40</p>
      </div>
      <div className='estDiv'>
        <p><Chat className='estImg'/>Respuestas correctas</p>
        <p className='estResp3'>20</p>
      </div>
      <div className='estDiv'>
        <p><Chat className='estImg'/>Respuestas incorrectas</p>
        <p className='estResp4'>20</p>
      </div>
    </div>
  )
}

export default Estadisticas