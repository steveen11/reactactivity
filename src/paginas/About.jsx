import React from 'react'
import Card from '../componentes/Card';
import AboutIndexLink from '../componentes/AboutIndexLink';

function About({autor, titulo, ficha}) {
  return (
    <Card>
      <div className='about'>
          <h1>Acerca de este proeycto</h1>
          <p><b>Titulo:</b> {titulo}</p>
          <p><strong>Autor:</strong> {autor}</p>
          <p><strong>Ficha:</strong> {ficha}</p>
          <p><strong>Versión:</strong> 1.0.0</p>
          <p><a href='/'>Volver a Página Principal:</a></p>
      </div>
    </Card>
  )
}

export default About;