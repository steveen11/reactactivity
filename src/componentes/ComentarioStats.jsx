import React, { useContext } from 'react';
import ComentariosContexto from '../contexto/comentarioContexto';

const ComentarioStats = ({ comentarios }) => {

    const {comments} = useContext(ComentariosContexto)

    const totalComentarios = comments.length;
    
    const promedio = totalComentarios > 0 ? comments.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios : 0;

    return (
        <div>
            <h4>Total Comentarios: {totalComentarios}</h4>
            <h4>Promedio de Calificación: {promedio.toFixed(2)}</h4>
        </div>
    );
};

export default ComentarioStats;
