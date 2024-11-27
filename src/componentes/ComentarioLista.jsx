import {React, useContext} from 'react'
import { ComentarioItem } from './ComentarioItem'
import { AnimatePresence, motion } from 'framer-motion'
import ComentariosContexto from '../contexto/comentarioContexto'

 export const MyComponent = () => (
   <motion.button
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
   />
 )

function ComentarioLista (){

    const {comments, isLoading} = useContext(ComentariosContexto)

    if(!isLoading && comments.length === 0 || !comments){
        return <p>No hay comentario</p>
    }else{




return isLoading?(<h2>cargando...</h2>):(
    <AnimatePresence>
    <div className='comments'>
    <ul>
        {
            comments.map(comentario =>
                <motion.div key={comentario.id}
                >
                <ComentarioItem 
                id={comentario.id}
                comentario={comentario.comentario}   
                calificacion={comentario.calificacion}

                />
                </motion.div>
            )
        }
    </ul>
</div>
</AnimatePresence>
  )
}
    }

export default ComentarioLista