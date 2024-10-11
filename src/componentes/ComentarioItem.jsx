import {React, useState} from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'; 

export function ComentarioItem ({comentario, calificacion, id, handleDelete}){

    //manejo del estado de un comentario:
    //comentario y calificacion como atributo
    //mediante el uso de Estados
    const [comment, setComentario] = useState(comentario)
    const [rating, setRating] = useState(calificacion)
    const [identificacion, setIdentificacion] = useState(id)

  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{ comment }</div>

      <button className='close'       
      onClick={ ()=> handleDelete(identificacion )}>
      <FaTimes color='green'/>
      </button>
    </Card>
  )
}
