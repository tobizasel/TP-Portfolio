import React from 'react'
import Link from './Link'
import Titulo from './Titulo'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <Titulo/>
        <ul className='header__nav'>
          <Link texto={"Acerca de mi"} link={""}/>
          <Link texto={"Conocimientos"} link={""}/>
          <Link texto={"Experiencias"} link={""}/>
          <Link texto={"Educacion"} link={""}/>
          <Link texto={"Certificaciones"} link={""}/>
          <Link texto={"Contacto"} link={""}/>
        </ul>
    </header>
  )
}

export default Header