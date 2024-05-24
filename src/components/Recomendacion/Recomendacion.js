import React from 'react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Recomendacion = ({texto}) => {
  return (
    <div>
            <FontAwesomeIcon className='recomendacion__icono' icon={faQuoteLeft}/>
            <p className='recomendacion__p'>{texto}</p>
    </div>
  )
}

export default Recomendacion