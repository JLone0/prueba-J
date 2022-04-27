import React from 'react'
import { ErrorMessage } from '@hookform/error-message';
import {useForm} from 'react-hook-form'


const FormHook = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data , e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <div>
            <h1>Formulario Hook</h1>
            <form className='row' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-3'>
                    <input 
                        className='form-control'
                        autoComplete='off'
                        name='nombre'
                        placeholder='Ingrese Nombre'
                        type= 'text'
                        {
                            ...register('nombre', {required:'Nombre requerido' })
                        }

                    ></input>
                    <ErrorMessage                
                        errors={errors}
                        name="nombre"
                        render={({ message }) => <span className = 'text-danger text-small d-block mb-2'> {message} </span>}
                    />
                    
               </div>

               <div className='col-md-3'>
                    <input 
                        className='form-control'
                        autoComplete='off'
                        name='apellido'
                        placeholder='Ingrese Nombre'
                        type= 'text'
                        {
                            ...register('apellido', {required:'Apellido requerido' })
                        }
                    ></input>
                    <ErrorMessage                
                        errors={errors}
                        name="apellido"
                        render={({ message }) => <span className = 'text-danger text-small d-block mb-2'> {message} </span>}
                    />
               </div>

               <div className='col-md-3'>
                    <button 
                    className='btn btn-primary' type='submit'
                    >  Enviar  </button>
                </div>   
            </form>
        </div>
    );
}

export default FormHook
