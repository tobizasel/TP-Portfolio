import React from 'react'
import svg from '../../assets/hombreconplata.svg'
import Boton1 from '../generales/Boton1'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faTwitch, faBitcoin} from '@fortawesome/free-brands-svg-icons'
import './main.css'

const index = () => {
  return (
    <section className='main'>
        <img src={svg} alt='hombrecondinero' className='main__img'/>
        <div className='main__derecha'>
            <h4 className='main__saludo'>Hola</h4>
            <h2 className='main__titulo'>Soy Zasel</h2>
            <h5 className='main__subtitulo'>Licenciado en Mewing</h5>
            <div className='main__iconos'>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faInstagram}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitter}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitch}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faBitcoin}/></a>
            </div>

            <Boton1 texto={"hola →"}/>
        </div>

        
    </section>
  )
}

export default index