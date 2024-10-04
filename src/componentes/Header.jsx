import React from 'react'

const Header = ({autor, titulo, ficha, centrof}) => {

    const headerStyles = {
        backgroundColor : 'rgba(0,0,0,0.4)',
        color: '#045abc',
        height: 'auto'
    }

    const tituloStyles = {
        color: 'red'
    }
    const autorStyles = {
        color: 'white'
    }
    const fichaStyles = {
        color: 'green'
    }


  return (
    <header style={headerStyles}>
        <div className='container'> 
            <p style={tituloStyles}>{titulo}</p>
            <p style={autorStyles}>Autor: {autor}</p>
            <p style={fichaStyles}>Ficha: {ficha}</p>        
            <p>{centrof}</p>             
        </div>
    </header>
  )
}

export default  Header