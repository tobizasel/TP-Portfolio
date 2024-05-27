import React from 'react'
import Img from './Img.js'
import './certificaciones.css'
import imagen_1 from '../../assets/nuevaescuelademagnates.jfif'
import Waves from '../generales/waves.js'
import Carrusel from './Carrusel.js'

const index = () => {

    
  return (
    <>
    <div className='certificacion' id='certificaciones'>
        <h2 className='certificaciones__titulo'>Certificaciones</h2>
        <Carrusel/>
    </div>

    </>
  )
}

export default index