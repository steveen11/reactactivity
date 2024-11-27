import {React, useState, useContext} from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa';
import ComentariosContexto from '../contexto/comentarioContexto'; 

export function ComentarioItem ({comentario, calificacion, id}){

    //desestructuar: tomar objeto y separar sus atributos

    const [comment, setComentario] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [identificacion, setIdentificacion] = useState(comentario.id)

    const {borrarItem} = useContext(ComentariosContexto)

  return (
    <Card reverse={false}>
      <div className='num-display'>{calificacion}</div>
      <div className='text-display'>{ comentario }</div>
            <button className='close' onClick={ ()=> {borrarItem( id)}}>
      <FaTimes color='black'/>
      </button>
    </Card>
  )
}
