import { createContext, useEffect, useState } from "react";

const ComentariosContexto = createContext()
//Crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({children}) => {

    const [comments, setCommments] = useState([]);
    
    useEffect(()=>{
        fetchComentarios()
    }, [])

    const fetchComentarios = async () => {
        const response = await fetch('http://localhost:5000/comentarios')
        const comentariosAPI = await response.json()
        setCommments(comentariosAPI)
    }

    const borrarItem = (id) => {
        if(
        window.confirm("Está seguro de borrar el comentario?")){
                console.log("App", id)

                setCommments(comments.filter((c)=> c.id !== id))
        }
    }

    return <ComentariosContexto.Provider value={{comments, setCommments, borrarItem }}>
        {children}
    </ComentariosContexto.Provider>
}

export default ComentariosContexto;