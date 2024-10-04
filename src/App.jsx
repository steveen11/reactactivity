import React, { useState } from 'react';
import { ComentarioItem } from './componentes/ComentarioItem';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';

function App() {

    const [comments, setCommments] = useState(comentarios)

    const titulo="App de comentarios"
    const Autor ="Miguel Angel Ortiz Neira"
    const Ficha = 2902093
    const CentroF = "SENA CGMLTI"

    const loading = false;
    const showComments = true;
    if(loading === true) return ( <h1> Cargando comentarios...</h1> )

  return (
    <div
     className='container'>
        <Header titulo={titulo} autor={Autor} ficha={Ficha} centrof={CentroF}/>
        {showComments ? 
            (
            <div className='comments'>
                <h3>Comentarios: {comentarios.length} </h3>
                <ul>
                    {
                        comments.map(comentario => 
                            <ComentarioItem 
                            key={comentario.id}
                            calificacion={comentario.calificacion}
                            comentario={comentario.comentario}
                            />
                        )
                    }
                </ul>
            </div>
            )
        : 'no hay comentarios'}
    </div>
  )
}

export default App