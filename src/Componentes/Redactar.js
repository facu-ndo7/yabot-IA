import React from 'react';
import '../App.css';

const Notita = () => {
    return(
        <div className="contenedor_opcion">
            <div className='cursos'>
                <h4 className='cursos_titulo'>Curso</h4>
            </div>

            <textarea rows={18} cols={60} placeholder='Nota de rectoria...' className='notita'/>
            <button className='boton_enviarNotita'>Enviar</button>
        </div>
    )
}

export default Notita;