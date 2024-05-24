import React from 'react'
import svg from '../../assets/hombrecontraje.svg'
import Boton1 from '../generales/Boton1'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faTwitch, faBitcoin} from '@fortawesome/free-brands-svg-icons'
import {faArrowTrendDown} from "@fortawesome/free-solid-svg-icons"
import './main.css'

const index = () => {

  const color = "#64DFDF"
  return (
    <>
    <section className='main'>
        <img src={svg} alt='hombrecondinero' className='main__img'/>
        <div className='main__derecha'>
            <h4 className='main__saludo'>Hola</h4>
            <h2 className='main__titulo'>Soy Zasel</h2>
            <h5 className='main__subtitulo'>Licenciado en Mewing</h5>
            <div className='main__iconos'>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faInstagram}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitter}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitch}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faBitcoin}/></a>
            </div>

            <Boton1 texto={"hola "}/>
        </div>

    </section>
    
    <svg id="wave" className='waves' viewBox="0 0 1440 230" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(235, 235, 235, 1)" offset="0%"></stop><stop stop-color="rgba(235, 235, 235, 1)" offset="100%"></stop></linearGradient></defs><path className='waves-2' fill={color} d="M0,23L16,49.8C32,77,64,130,96,130.3C128,130,160,77,192,80.5C224,84,256,146,288,172.5C320,199,352,192,384,172.5C416,153,448,123,480,126.5C512,130,544,169,576,187.8C608,207,640,207,672,195.5C704,184,736,161,768,141.8C800,123,832,107,864,111.2C896,115,928,138,960,157.2C992,176,1024,192,1056,191.7C1088,192,1120,176,1152,157.2C1184,138,1216,115,1248,111.2C1280,107,1312,123,1344,111.2C1376,100,1408,61,1440,46C1472,31,1504,38,1536,42.2C1568,46,1600,46,1632,49.8C1664,54,1696,61,1728,88.2C1760,115,1792,161,1824,149.5C1856,138,1888,69,1920,61.3C1952,54,1984,107,2016,126.5C2048,146,2080,130,2112,118.8C2144,107,2176,100,2208,80.5C2240,61,2272,31,2288,15.3L2304,0L2304,230L2288,230C2272,230,2240,230,2208,230C2176,230,2144,230,2112,230C2080,230,2048,230,2016,230C1984,230,1952,230,1920,230C1888,230,1856,230,1824,230C1792,230,1760,230,1728,230C1696,230,1664,230,1632,230C1600,230,1568,230,1536,230C1504,230,1472,230,1440,230C1408,230,1376,230,1344,230C1312,230,1280,230,1248,230C1216,230,1184,230,1152,230C1120,230,1088,230,1056,230C1024,230,992,230,960,230C928,230,896,230,864,230C832,230,800,230,768,230C736,230,704,230,672,230C640,230,608,230,576,230C544,230,512,230,480,230C448,230,416,230,384,230C352,230,320,230,288,230C256,230,224,230,192,230C160,230,128,230,96,230C64,230,32,230,16,230L0,230Z"></path></svg>    
    </>
      )
}

export default index