import React from "react";
// import NavBar from "../NavBar";

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
            <div className="container">

                <div className="row">
                    <div className="col-4">

                        <label htmlFor="fechaInicio">
                            Fecha de Inicio.
                        </label>
                        <input
                            id="fechaInicio"
                            type="date"
                            placeholder="INGRESAR UNA FECHA"
                            className="form--input"
                            name="programaInvestigacion"
                            min={"2022-01-01"}
                            value={"2022-06-01"}
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div className="col-4">
                        <label htmlFor="fechaFin">
                            Fecha de Fin.
                        </label>
                        <input
                            id="fechaFin"

                            type="date"
                            placeholder="INGRESAR UNA FECHA"
                            className="form--input"
                            name="programaInvestigacion"
                            min={"2022-01-01"}
                            value={"2022-06-01"}
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div className="col-4">
                        <label>
                            Duración del proyecto semanas.
                        </label>
                        <input
                            type="number"
                            placeholder="ingresar valor"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>
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
                className="form-select"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="Nacional.">Nacional.</option>
                <option value="Provincial.">Provincial.</option>
                <option value="Cantonal.">Cantonal.</option>
                <option value="Parroquial.">Parroquial.</option>
                <option value="Institucional.">Institucional.</option>
                <option value="Internacional.">Internacional.</option>


            </select>

            {/* </form> */}
        </section>
    )
}