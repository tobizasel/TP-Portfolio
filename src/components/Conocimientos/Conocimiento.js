import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Conocimiento = ({img, texto}) => {
  return (
    <div className='conocimientos__conocimiento'>
        <FontAwesomeIcon className='conocimiento__icono' icon={img}/>
        <h5 className='conocimiento__texto'>{texto}</h5>
    </div>
  )
}

export default Conocimiento