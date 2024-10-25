import {React, useState, useContext} from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa';
import ComentariosContexto from '../contexto/comentarioContexto'; 

export function ComentarioItem ({comentario}){

    //desestructuar: tomar objeto y separar sus atributos

    const [comment, setComentario] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [identificacion, setIdentificacion] = useState(comentario.id)

  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
            <button className='close'>
      <FaTimes color='green'/>
      <div className='text-display'>{ comment }</div>
      </button>
    </Card>
  )
}
