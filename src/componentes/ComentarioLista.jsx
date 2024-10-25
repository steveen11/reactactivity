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

    const {comments} = useContext(ComentariosContexto)

    if(comments.length === 0 || !comments){
        return <p>No hay comentario</p>
    }else{




return (
    <AnimatePresence>
    <div className='comments'>
    <ul>
        {
            comments.map(comentario =>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <ComentarioItem 
                key={comments.id}
                comentario={comments}

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