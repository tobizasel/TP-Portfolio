import React from 'react'

const Link = ({texto, link}) => {
  return (
    <a href={link}><li className='header__list'>{texto}</li></a>
  )
}

export default Link