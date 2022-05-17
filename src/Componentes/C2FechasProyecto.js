import React from "react";
import NavBar from "../NavBar";

import "../style.css"


export default function FechasProyecto() {

    return (
        <section>
            {/* 
            <form
                className="form"
            //onSubmit={handleSubmit}
            > */}
            {/* <NavBar /> */}
            {
                //FECHAS
            }
            <div class="row">
                <div class="column">
                    <label>
                        Fecha de Inicio.
                    </label>
                    <input
                        type="text"
                        placeholder="INGRESAR UNA FECHA"
                        className="form--input"
                        name="programaInvestigacion"
                    //onChange={handleChange}
                    //value={formData.programaInvestigacion}
                    />
                </div>

                <div class="column">
                    <label>
                        Fecha de Fin.
                    </label>
                    <input
                        type="text"
                        placeholder="INGRESAR UNA FECHA"
                        className="form--input"
                        name="programaInvestigacion"
                    //onChange={handleChange}
                    //value={formData.programaInvestigacion}
                    />
                </div>

                <div class="column">
                    <label>
                        Duración del proyecto semanas.
                    </label>
                    <input
                        type="text"
                        placeholder="Escribir Texto"
                        className="form--input"
                        name="programaInvestigacion"
                    //onChange={handleChange}
                    //value={formData.programaInvestigacion}
                    />
                </div>
            </div>


            {<br />}

            <label htmlFor="departamento">
                Alcance Territorial. (Cobertura del Proyecto)
            </label>



            {<br />}
            <select
                id="favColor"
                //value={formData.favColor}
                //onChange={handleChange}
                name="al"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="sdsa">Nacional.</option>
                <option value="sdsa">Provincial.</option>
                <option value="sdsa">Cantonal.</option>
                <option value="sdsa">Parroquial.</option>
                <option value="sdsa">Institucional.</option>
                <option value="sdsa">Internacional.</option>


            </select>

            {/* </form> */}
        </section>
    )
}