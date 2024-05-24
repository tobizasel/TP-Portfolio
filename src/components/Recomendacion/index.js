import React from 'react'
import Recomendacion from './Recomendacion'
import './recomendacion.css'

const index = () => {
    const parrafo = "Ezequiel fue muy didáctico y transmitió los contenidos de la cursada de una manera que se me hizo muy fácil de entender. Siempre estuvo a disposición para despejar dudas y fue realmente de ayuda en la resolución de los distintos ejercicios."
    
    return (
    <section>
        <h2 className='recomendacion__titulo'>Recomendaciones</h2>
        <div className='recomendaciones'>
        <Recomendacion texto={parrafo}/>
        <Recomendacion texto={parrafo}/>
        </div>
    </section>
  )
}

export default index