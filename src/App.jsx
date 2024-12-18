import  React  from 'react';
import Header from './componentes/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComentarioLista from './componentes/Comentariolista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './paginas/About';
import AboutIconLink from './componentes/AboutIconLink';
import AboutIndexLink from './componentes/AboutIndexLink';
import {ComentariosProvider} from './contexto/comentarioContexto'
function App() {

    const titulo="App de comentarios"
    const Autor ="Samuel Steven Ardila"
    const Ficha = 2902093
    const CentroF = "SENA CGMLTI"

    const loading = false;
    if(loading === true) return ( <h1> Cargando comentarios...</h1> )



  return (
    <ComentariosProvider>
    <Router>
    <div
     className='container'>
        <Header titulo={titulo} autor={Autor} ficha={Ficha} centrof={CentroF}
        />
        <Routes>
          <Route exact path='/' element={
            <>
             <ComentarioForm />
             <ComentarioStats/>
             <ComentarioLista/>
              <AboutIconLink/>
            </>
          }></Route>
          <Route exact path='/About' element={
            <>
              <About titulo={titulo} autor={Autor} ficha={Ficha}
              />
              <AboutIndexLink/>
            </>
            }>
            </Route>
        </Routes>
    </div>
    </Router>
    </ComentariosProvider>
  )
}

export default App