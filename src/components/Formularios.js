import React, {useState} from 'react'
const Formulario = () => {



    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        
        setDatos({...datos,[event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
        event.target.reset()
    }


        return (
            <>
                <div>
                    <h1> Formulario </h1>
                    <form className='row' onSubmit={sendData}>
                            <div className='col-md-3'>
                                <input 
                                autoComplete='off'
                                placeholder='Ingrese Nombre'
                                className='form-control'
                                type='text'
                                name='nombre'
                                onChange={handleInputChange}
                                >

                                </input>
                            </div>
                            <div className='col-md-3'>
                                <input
                                autoComplete='off'
                                placeholder='Ingrese Apellido'
                                className='form-control'
                                type='text'
                                name='apellido'
                                onChange={handleInputChange}
                                >

                                </input>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-primary' type='submit'>  Enviar  </button>
                            </div>                         
                    </form>
                </div>
            </>
        );

} 

export default Formulario
