import React from 'react'
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faTwitch, faBitcoin} from '@fortawesome/free-brands-svg-icons'


const index = () => {
  return (
    <footer className='footer'>
        <h2 className='footer__titulo'>Tobias Zaselsky</h2>
        <h4 className='footer__subtitulo'>Licenciado en Mewing</h4>

        <div>
        <a href=''><FontAwesomeIcon className='main__icono' icon={faInstagram}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitter}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faTwitch}/></a>
            <a href=''><FontAwesomeIcon className='main__icono' icon={faBitcoin}/></a>
        </div>

        <p className='footer__copyright'>©2024 Ezequiel Binker. Todos los derechos reservados</p>
    </footer>
  )
}

export default index