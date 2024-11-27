import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import Swal from 'sweetalert2';


const ComentariosContexto = createContext()
//Crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({children}) => {

    const [comments, setCommments] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        fetchComentarios()
    }, [])

    const fetchComentarios = async () => {
        const response = await fetch('http://localhost:5000/comentarios')
        const comentariosAPI = await response.json()
        setCommments(comentariosAPI)
        setIsLoading(false)
    }

    const borrarItem = async (id) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Este comentario será eliminado!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });
            if (result.isConfirmed) {
            const response = await fetch(`http://localhost:5000/comentarios/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setCommments(comments.filter((c) => c.id !== id));
                Swal.fire(
                    'Eliminado!',
                    'El comentario ha sido eliminado.',                );
            } else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar el comentario.',
                    'error'
                );
            }
        }
    };

    const addItem = async (newComentario) => {
        try {
            const response = await fetch('http://localhost:5000/comentarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComentario),
            });
            const data = await response.json()
        setCommments([data, ...comments])
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: '¡Comentario añadido!',
                text: 'Tu comentario se ha añadido correctamente.',
                timer: 1500,
                showConfirmButton: false
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al añadir',
                text: 'Hubo un problema al añadir el comentario.',
                confirmButtonText: 'Intentar de nuevo',
            });
        }
    } catch (error) {
        // Si ocurre un error al hacer la solicitud
        console.error('Error al hacer la solicitud:', error);
        Swal.fire({
            icon: 'error',
            title: 'Problema de conexión',
            text: 'Hubo un problema al intentar añadir el comentario.',
            confirmButtonText: 'Ok',
        });
    }
};

    
    return <ComentariosContexto.Provider value={{comments, setCommments, isLoading, setIsLoading, borrarItem, addItem}}>
        {children}
    </ComentariosContexto.Provider>
}

export default ComentariosContexto;