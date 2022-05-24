import React from "react";
import { Link } from "react-router-dom";


export default function Sidebar(props) {
    return (
        <section className="pane sidebar">
            <div className="sidebar--header" >
                <h3 style={{textAlign: "center"}}>Panel de Navegación</h3>
            </div>
            <ul className="w3-ul w3-hoverable">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tipo-proyecto">Tipo de Proyecto</Link></li>
                <li><Link to="/equipo-proyecto">Equipo del Proyecto</Link></li>
                <li><Link to="/informacion-tecnica-proyecto">Información Técnica del Proyecto</Link></li>
                <li><Link to="/metodologia-proyecto">Metodología del Proyecto</Link></li>
                <li><Link to="/cronograma-actividades">Cronograma de Actividades</Link></li>
                <li><Link to="/resumen-presupuesto">Resumen del Presupuesto</Link></li>
                <li><Link to="/pruebas">Zona Pruebas</Link></li>
                {/* 
                <li><Link to="/informacion-general">Información General</Link></li>
                <li><Link to="/fechas-proyecto">Fechas del Proyecto</Link></li>
                <li><Link to="/director-proyecto">Director del Proyecto</Link></li>
                <li><Link to="/areas-conocimiento">Áreas del Conocimiento</Link></li>
                */}

            </ul>
            {/*noteElements */}
        </section>
    )
}