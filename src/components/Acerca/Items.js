import React from 'react'

const Items = ({categoria, info}) => {
  return (
    <div className='acerca__informacion'>
        <h5 className='acerca__informacionTitulo'>{categoria}</h5>
        <p className='acerca__informacionInfo'>{info}</p>
    </div>
  )
}

export default Items