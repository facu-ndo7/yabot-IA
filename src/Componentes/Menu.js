/* importo las librerias y componentes que necesito */
import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../App.css';

const Menu = () => {
    const navigate = useNavigate(); //useNavigate permite navegar hacia una ventana en especifico

    const llamarComponente = (componente) => {
        navigate(componente);
    };

    return (
        <nav className="menu">
            <div className="menu_opcion" onClick={() => llamarComponente("/")}>
                <h3 className="menu_opcion--titulo">Inicio</h3>
            </div>

            <div className="menu_opcion" onClick={() => llamarComponente("/registraralumno")}>
                <h3 className="menu_opcion--titulo">Registrar alumno</h3>
            </div>

            <div className="menu_opcion" onClick={() => llamarComponente("/inasistencianotas")}>
                <h3 className="menu_opcion--titulo">Inasistencias/Notas</h3>
            </div>

            <div className="menu_opcion" onClick={() => llamarComponente("/redactar")}>
                <h3 className="menu_opcion--titulo">Redactar</h3>
            </div>

            <div className="menu_opcion" onClick={() => llamarComponente("/configuracion")}>
                <h3 className="menu_opcion--titulo">Configuraciones</h3>
            </div>
        </nav>
    );
};

export default Menu;
