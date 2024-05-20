import React from 'react'
import Items from './Items'
import './acerca.css'

const index = () => {
  return (
    <section className='acerca' id='acerca'>
        <div className='acerca__izquierda'>
            <h1 className='acerca__titulo'>Tobias Zaselsky</h1>
            <p className='acerca__p'>Estudie en NUM (Nueva Universidad de Magnates) un doctorado en Mewing y una licenciatura en Chat-GPT. Tambien me gustan los animales y la chocotorta. Aguante Cristina</p>
            <div className='acerca__info'>
                <Items categoria="Edad" info="12"/>
                <Items categoria="Mail" info="ahiselomandamo@gracias.com.tv"/>
            </div>
            <p className='acerca__p'>Mi vasta experiencia en luxmaxxing y ser un alpha me permitio en varias instancias liderar equipos enteros de brainrot. Una experiencia inolvidable fue diseñar la campaña de marketing Tutu Automotores. </p>
        </div>

        <img className='acerca__img' src='https://media.revistavanityfair.es/photos/60e84d70ec46354bf448266f/master/w_1600%2Cc_limit/28299.jpg' alt='kanye'/>
    </section>

  )
}

export default index