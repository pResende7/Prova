import React from 'react'

import Img from 'react-image'

import teacher1 from "./images/teacher1.jpg"

import Navbar from './Navbar'

const AboutPage = () => {

  return (

    <div>
      <Navbar />
      <div className='header-container flex row center-center full-view' >
      <h1 id="sobre">Esse sistema serve para facilitar o planejamento <br/> da carga horária de cada turma, 
          bem como <br/> horário de aulas, docentes que estão <br/> ministrando aula em determinada hora e sala.</h1>
          <img src="./images/teacher1.jpg"/>
          <img src="./images/teacher2.jpg"/>

    </div>
    </div>
  )
}

export default AboutPage;