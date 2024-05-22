import React from 'react'
import Experiencia from './Experiencia'
import Card from '../generales/Card'
import { faCode, faSitemap } from '@fortawesome/free-solid-svg-icons';
import './experiencia.css'

const index = () => {

  const carta1 = ["Trabajé durante 2 años en el rediseño funcional del sistema informático de Wadiah Capital. Comencé a cargo de un módulo que realiza una integración con servicios crypto, para luego quedar a cargo del core bancario.", "El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure.", "Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea"]
  const carta2= ["Durante este tiempo, he adquirido experiencia en proyectos personales, tanto en el desarrollo Frontend utilizando tecnologías como HTML, CSS, y React.js, como en el desarrollo Backend empleando TypeScript, Node.js y Nest.js. Además, he incursionado en el desarrollo móvil utilizando React Native.", "Mis habilidades destacadas se centran en el uso de NestJS y TypeScript, áreas en las que he acumulado experiencia significativa a lo largo de mi trayectoria profesional."];

  return (
    <div className='experiencia'>
        <h2>Experiencia laboral</h2>
        <div className='experiencia__cards'>
        <Card titulo={"Desarrollador Backend"} subtitulo={"Wadiah Capital. (2021-2023)"} logo={faCode} texto={carta1}/>
        <Card titulo={"Desarrollador Backend"} subtitulo={"Wadiah Capital. (2021-2023)"} logo={faSitemap} texto={carta2}/>
        <Card titulo={"Desarrollador Backend"} subtitulo={"Wadiah Capital. (2021-2023)"} logo={faSitemap} texto={carta1}/>
        <Card titulo={"Desarrollador Backend"} subtitulo={"Wadiah Capital. (2021-2023)"} logo={faCode} texto={carta2}/>

        </div>
    </div>
  )
}

export default index