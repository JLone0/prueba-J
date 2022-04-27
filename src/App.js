import React from "react";
/* import Contador from "./components/Contador"; */
/* import Formulario from "./components/Formularios";
import FormHook from "./components/FormHook"; */
import Comentario from "./components/ejemploPropiedades/Comentario";

function App() {

  const subject = {
    nombre: 'Juanito', 
    urlimg: 'https://via.placeholder.com/64',
    comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }

  return (
    <div>
     <h1> 
       titulo generico :v
    </h1>
      {/* <div className="container mt-5">
        <Formulario/> 
      </div>

      <div className="container mt-5">
      <FormHook/> 
      </div> */}

      <div className="container mt-2">
      <Comentario sujeto={subject} /> 
      </div>
       
     {/* <Contador/> */} {/* <Contador> </Contador> */}
    </div>
  );
}

export default App;
