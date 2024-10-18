import React, { useState } from 'react';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import Card from './componentes/Card';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {

    const [comments,
         setCommments] = useState(comentarios)

    
    const borrarItem = (id) => {
        if(
        window.confirm("Está seguro de borrar el comentario?")){
                console.log("App", id)

                setCommments(comments.filter((c)=> c.id !== id))
        }
    }

    const titulo="App de comentarios"
    const Autor ="Miguel Angel Ortiz Neira"
    const Ficha = 2902093
    const CentroF = "SENA CGMLTI"

    const loading = false;
    const showComments = true;
    if(loading === true) return ( <h1> Cargando comentarios...</h1> )

    const addComentario = (newComentario) =>{
        setCommments(prevComments=>[...prevComments, newComentario])
    }

  return (
    <div
     className='container'>
        <Header titulo={titulo} autor={Autor} ficha={Ficha} centrof={CentroF}
        />
        <ComentarioForm handleAdd={addComentario}/>
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista comments={comments} 
        handleDelete={borrarItem}
        />
        <Card>
            <p>Holaaa</p>
        </Card>
    </div>
  )
}

export default App