import React from 'react'

const Img = ({src, alt, titulo, subtitulo}) => {


  return (
    <div className='imagenes'>
        <img src={src} alt={alt} className='imagenes__img'/>
        <div className="imagenes__titulos">
            <h4 className='imagenes__titulo'>{titulo}</h4>
            <h5 className='imagenes__subtitulo'>{subtitulo}</h5>
        </div>
    </div>
  )
}

export default Img