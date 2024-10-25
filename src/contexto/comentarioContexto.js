import { createContext, useState } from "react";

const ComentariosContexto = createContext()
//Crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({children}) => {

    const [comments, setCommments] = useState([
        {
            id: 1,
            comentario: "Este es el comentario 1",
            calificacion: 3
        }
    ])

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