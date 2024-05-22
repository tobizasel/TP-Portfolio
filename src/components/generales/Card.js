import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({titulo, subtitulo, logo, texto}) => {

    console.log(texto);

  return (
    <div className='card'>
        <div className='card__header'>
            <div className='card__titulos'>
                <h3 className='card__titulo'>{titulo}</h3>
                <h4 className='card__subtitulo'>{subtitulo}</h4>
            </div>
            {
             logo ? <FontAwesomeIcon className='card__icono' icon={logo}/> : ""
            }
        </div>
        <div className='card__body'>
            {
                texto.map((p, i) => 
                    <p key={i} className='card__p'>{p}</p>
                )
            }
        </div>
    </div>
  )
}

export default Card

