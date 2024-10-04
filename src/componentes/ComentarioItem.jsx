import {React, useState} from 'react'

export const ComentarioItem = ({comentario, calificacion}) => {

    //manejo del estado de un comentario:
    //comentario y calificacion como atributo
    //mediante el uso de Estados
    const [comment, setComentario] = useState(comentario)
    const [rating, setRating] = useState(calificacion)

    const cambiarRating = () => {
        setRating((prev) => prev + 1)
    }

  return (
    <div className="card">
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{ comment }</div>
        <button onClick={cambiarRating}>
            Cambiar Calificacion
        </button>
    </div>
  )
}
