import React, { useState } from 'react'
import Link from './Link'
import Titulo from './Titulo'
import './header.css'

const Header = () => {

  const [header, setHeader] = useState(true)

  const cambiarHeader = () => {
    if (window.scrollY > 650) {
      setHeader(false);
      console.log("holaaa");
    } else setHeader(true);

  }

  window.addEventListener('scroll',cambiarHeader)

  return (
    <header className={`${header ? "header" : "header__blanco"}`}>

        <Titulo/>
        <ul className='header__nav'>
          <Link texto={"Acerca de mi"} link={"#acerca"}/>
          <Link texto={"Conocimientos"} link={"#conocimientos"}/>
          <Link texto={"Experiencias"} link={"#experiencias"}/>
          <Link texto={"Educacion"} link={"#educacion"}/>
          <Link texto={"Certificaciones"} link={"#certificaciones"}/>
          <Link texto={"Contacto"} link={"#contacto"}/>
        </ul>
    </header>
  )
}

export default Header