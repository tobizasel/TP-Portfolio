import React, { useState } from 'react'
import Link from './Link'
import Titulo from './Titulo'
import './header.css'

const Header = () => {

  const [header, setHeader] = useState(true)

  const cambiarHeader = () => {
    if (window.screenY > 500) {
      setHeader(false);
      console.log("holaaa");
    }
  }

  window.addEventListener('scroll',cambiarHeader)

  return (
    <header className={`${header ? "header" : "header__blanco"}`}>

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