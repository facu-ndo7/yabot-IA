import React, { useRef } from "react";
import '../App.css';

const Configuracion = () => {
    const cursos = useRef(null);
    const inasistencias = useRef(null);
    const materia = useRef(null);

    function mostrarContenedor(contenedor) {
        cursos.current.style.display = "none";
        inasistencias.current.style.display = "none";
        materia.current.style.display = "none";
        
        contenedor.current.style.display = "block";
    }

    return (
        <div className="contenedor_opcion">
            <div className="opcion_configuracion" onClick={() => mostrarContenedor(cursos)}>
                <h4 className="opcion_configuracion--titulo">Cursos</h4>
            </div>

            <div className="contenedor_opcionElegida" ref={cursos}>
                <input placeholder="Nombre del curso"  className="contenedor_opcionElegida--input"/>
                <input placeholder="División" className="contenedor_opcionElegida--inputChiquito" /> <br />
                <button className="contenedor_opcionElegida--btn">Agregar</button>
                <button className="contenedor_opcionElegida--btn">Eliminar</button>
            </div>

            <div className="opcion_configuracion" onClick={() => mostrarContenedor(inasistencias)}>
                <h4 className="opcion_configuracion--titulo">Inasistencias</h4>
            </div>

            <div className="contenedor_opcionElegida" ref={inasistencias}>
                <label>Cantidad de inasistencias permitidas</label>
                <input type="number" className="contenedor_opcionElegida--inputChiquito" /> <br/>
                <button className="contenedor_opcionElegida--btn">Guardar</button>
            </div>

            <div className="opcion_configuracion" onClick={() => mostrarContenedor(materia)}>
                <h4 className="opcion_configuracion--titulo">Materias</h4>
            </div>

            <div className="contenedor_opcionElegida" ref={materia}>
                <input placeholder="Materia" /> <br/>
                <button className="contenedor_opcionElegida--btn">Agregar</button>
                <button className="contenedor_opcionElegida--btn">Eliminar</button>
            </div>
        </div>
    );
};

export default Configuracion;
