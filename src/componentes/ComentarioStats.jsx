import React, { useContext } from 'react';
import ComentariosContexto from '../contexto/comentarioContexto';

export default function ComentarioStats() {
    const {comments} = useContext(ComentariosContexto)
    const comentarios=comments

    const totalComentarios = comentarios.length;
    
    const promedio = totalComentarios > 0 ? comments.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios : 0;

    return (
        <div>
            <h4>Total Comentarios: {totalComentarios}</h4>
            <h4>Promedio de Calificación: {promedio}</h4>
        </div>
    );
};

