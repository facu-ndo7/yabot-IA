/* MONTAJE DE LA APLICACIÓN */

/* importo las librerias y componentes que necesito */
import React from "react";
import { Route, Routes} from "react-router-dom"; 

import Menu from './Componentes/Menu';
import Configuracion from './Componentes/Configuracion';
import Alumno from "./Componentes/RegistrarAlumno";
import IN from './Componentes/InasistenciaNotas';
import Notita from './Componentes/Redactar';

import './App.css';

/* estructura de mi aplicación */

const App = () => {
    return (
        <>
            <header className="encabezado">
                <h1 className="encabezado_titulo">YABOT-IA</h1>
            </header>
            <Menu /> {/* renderizo mi componente 'Menu' */}
            <Routes>
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="/registraralumno" element={<Alumno />} />
                <Route path="/inasistencianotas" element={<IN />} />
                <Route path="/redactar" element={<Notita />} />
            </Routes>
        </>
    );
};

export default App; /* exporto mi aplicación */
