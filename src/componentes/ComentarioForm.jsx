import  {useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'
import { useContext } from 'react'
import ComentariosContexto from '../contexto/comentarioContexto'



const ComentarioForm = () => {

    const[text, setText] = useState('')
    const[calificacion, setCalificacion] = useState(0)
    const{addItem} =useContext(ComentariosContexto)
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit =(e) => {
      e.preventDefault()
      //Crear el objeto comentario
      const newComentario = {
        comentario: text,
        calificacion: calificacion
      }
      addItem(newComentario)
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <ComentarioCalificacion select={(calificacion) => {setCalificacion(calificacion)} }/>
        <div className='input-group'>
            <input type='text' 
            value={text}
            onChange={handleTextChange}
            placeholder="Ingrese su comentario aqui"/>
            <button className= 'input-group' type="submit">
                Guardar
            </button>
        </div>
     </form>
    </Card>
  )
}

export default ComentarioForm
