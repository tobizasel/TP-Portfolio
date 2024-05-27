import React from 'react'
import Conocimiento from './Conocimiento'
import './conocimiento.css';
import { faChurch, faFerry, faToilet, faOilWell } from '@fortawesome/free-solid-svg-icons';

const index = () => {
  return (
    <div className='conocimientos' id='conocimientos'>

        <h2 className='conocimientos__titulo'>Conocimientos</h2>
        <div className='conocimientos__conocimientos'>
        <Conocimiento img={faChurch} texto={"Obispo de Iglesia"}/>
        <Conocimiento img={faFerry} texto={"Conductor de ferrys"}/>
        <Conocimiento img={faToilet} texto={"Desarrollador Skibidi Toilet"}/>
        <Conocimiento img={faOilWell} texto={"Operadores de torres de perforación"}/>
        </div>
    </div>
  )
}

export default index