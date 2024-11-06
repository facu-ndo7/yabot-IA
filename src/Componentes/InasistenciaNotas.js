import React from 'react';
import { useRef } from 'react';
import '../App.css';

const IN = () => {

    const opcionInasistencias = useRef(null);
    const opcionNotas = useRef(null);

    function elegir(opcion) {
        opcion.current.style.backgroundColor = "rgb(0, 234, 255)";
        const otraOpcion = opcion === opcionInasistencias ? opcionNotas : opcionInasistencias;
        otraOpcion.current.style.backgroundColor = "white";
      }

    return (
        <div className="contenedor_opcion">
            <div className='elegir_IN' onClick={()=> elegir(opcionInasistencias)} ref={opcionInasistencias} >
                <p className='elegir_IN--opcion'>Inasistencias</p>
            </div>
            <div className='elegir_IN' onClick={()=> elegir(opcionNotas)} ref={opcionNotas} >
                <p className='elegir_IN--opcion'>Notas</p>
            </div>
            <input type='text' placeholder='Nombre del alumno' className='seleccionar_alumno'/>
        </div>
    );
}

export default IN;
