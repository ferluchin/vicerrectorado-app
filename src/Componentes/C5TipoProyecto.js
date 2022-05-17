import React from "react";
import NavBar from "../NavBar";
import "../style.css"

export default function TipoProyecto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                {/* <NavBar /> */}

                <div class="row">
                    <div class="column">
                        <label>
                            Tipo de Proyecto:
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
                            <option value="sdsa"> Investigación. </option>
                            <option value="sdsa"> Innovación. </option>
                            <option value="sdsa"> Consultoría. </option>
                        </select>
                    </div>

                    <div class="column">
                        <label>
                            Tipo de Investigación:
                        </label>
                        <select
                            id="favColor"
                            //value={formData.favColor}
                            //onChange={handleChange}
                            name="al"
                            className="select-css"
                        >
                            <option value="">-- Elija un Elemento --</option>
                            <option value="sdsa"> Investigación Básica. </option>
                            <option value="sdsa"> Investigación Aplicada. </option>
                            <option value="sdsa"> Desarrollo Experimental. </option>
                        </select>
                    </div>

                    <div class="column">
                        <label>
                            Tipo de Financiamiento:
                        </label>
                        <select
                            id="favColor"
                            //value={formData.favColor}
                            //onChange={handleChange}
                            name="al"
                            className="select-css"
                        >
                            <option value="">-- Elija un Elemento --</option>
                            <option value="sdsa">ASIGNACIÓN REGULAR IES.  </option>
                            <option value="sdsa">FONDOS CONCURSABLES INTERNO IES. </option>
                            <option value="sdsa">FONDOS CONCURSABLES NACIONALES. </option>
                            <option value="sdsa">FONDOS CONSURSABLES INTERNACIONALES. </option>

                            <option value="sdsa">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNO IES. </option>
                            <option value="sdsa">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES NACIONALES. </option>
                            <option value="sdsa">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNACIONALES. </option>

                            
                            <option value="sdsa">FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE SINTERNACIONALES. </option>
                            <option value="sdsa">FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE SINTERNACIONALES. </option>
                            <option value="sdsa">FONDOS CONCURSABLE INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES </option>
                            <option value="sdsa">ASIGNACION REGULAR IES/FONDOS CONCURSABLES INTERNO IES/ FONDO CONCURSABLES INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES </option>

                        </select>
                    </div>
                </div>

                <label>
                    Organismo (s)/ Entidad (ES) Financiador (ES)
                </label>

                <input
                    type="text"
                    placeholder="Escribir texto"
                    className="form--input"
                    name="programaInvestigacion"
                //onChange={handleChange}
                //value={formData.programaInvestigacion}
                />

                <div class="row">
                    <div class="column">
                        <label>
                            Presupuesto Total
                        </label>
                        <input
                            type="text"
                            placeholder="INGRESAR VALOR"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div class="column">
                        <label>
                            Aporte UTPL
                        </label>
                        <input
                            type="text"
                            placeholder="INGRESAR VALOR"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div class="column">
                        <label>
                            Aporte Contraparte
                        </label>
                        <input
                            type="text"
                            placeholder="iNGRESAR VALOR"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>
                </div>
            </form>

        </section>
    )
}