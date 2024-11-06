import React from 'react';
import '../App.css';

const Alumno = () => {
    return(
        <div className="contenedor_opcion">
            <div className='contenedor_formulario'>
                <h4 className='contenedor_formulario--seccion'>Información del Alumno</h4>
                <input placeholder='Nombre(s)' type='text' className='contenedor_formulario--input' />
                <input placeholder='Apellido(s)' type='text' className='contenedor_formulario--input' />
                <input placeholder='D.N.I' type='number' className='contenedor_formulario--input' />
                <input placeholder='Curso' type='text' className='contenedor_formulario--input'/>
                <input placeholder='Telefono' type='number' className='contenedor_formulario--input' />
                <input placeholder='Correo Electronico' type='text' className='contenedor_formulario--input' />
            </div>

            <div className='contenedor_formulario'>
                <h4 className='contenedor_formulario--seccion'>Información del Tutor</h4>
                <input placeholder='Nombre(s)' type='text' className='contenedor_formulario--input' />
                <input placeholder='Apellido(s)' type='text' className='contenedor_formulario--input' />
                <input placeholder='D.N.I' type='number' className='contenedor_formulario--input' />
                <input placeholder='Telefono' type='number' className='contenedor_formulario--input' />
                <input placeholder='Correo Electronico' type='text' className='contenedor_formulario--input' />
            </div>

            <button className='boton_enviarDatos'>Registrar</button>
        </div>
    )
}

export default Alumno;