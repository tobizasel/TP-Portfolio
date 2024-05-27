import React from 'react'
import Card from '../generales/Card'
import './educacion.css'

const index = () => {

    const parrafo = ["Proyecto final Destacado: Desarrollo de una aplicación desktop para la creación de partituras musicales utilizando la tecnología de Microsoft Kinect, en el framework .NET ."];

  return (
    <div className='educacion' id='educacion'>

        <h2 className='educacion__titulo'>Educacion</h2>
        <div className='educacion__cartas'>
            <Card titulo="Licenciado en Sistemas" subtitulo="Analista de Sistemas" texto={parrafo} clase="educacion__card"/>
            <Card titulo="Licenciado en Sistemas" subtitulo="Analista de Sistemas" texto={parrafo} clase="educacion__card"/>
            <Card titulo="Licenciado en Sistemas" subtitulo="Analista de Sistemas" texto={parrafo} clase="educacion__card"/>
        </div>
    </div>
  )
}

export default index