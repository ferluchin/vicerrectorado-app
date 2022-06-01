import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tipo-proyecto">Tipo de Proyecto</Link></li>

            <li><Link to="/equipo-proyecto">Equipo del Proyecto</Link></li>
            <li><Link to="/informacion-tecnica-proyecto">Información Técnica del Proyecto</Link></li>
            <li><Link to="/metodologia-proyecto">Metodología del Proyecto</Link></li>
            <li><Link to="/cronograma-actividades">Cronograma de Actividades</Link></li>
            <li><Link to="/resumen-presupuesto">Resumen del Presupuesto</Link></li>
        </ul>
    )
}
