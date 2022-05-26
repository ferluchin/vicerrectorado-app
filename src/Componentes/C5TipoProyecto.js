import React from "react";
// import NavBar from "../NavBar";
import "../style.css"
import TitleBar from "./TitleBar";

export default function TipoProyecto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}
                <h3>Tipo de Proyecto.</h3> {<br />}

                <div className="container">

                    <div className="row">
                        <div
                            // className="column"
                            className="col-4"

                        >
                            <label>
                                Tipo de Proyecto:
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
                                <option value="Investigación"> Investigación. </option>
                                <option value="Innovación"> Innovación. </option>
                                <option value="Consultoría"> Consultoría. </option>
                            </select>
                        </div>

                        <div
                            //className="column"
                            className="col-4"

                        >
                            <label>
                                Tipo de Investigación:
                            </label>
                            <select
                                id="favColor"
                                //value={formData.favColor}
                                //onChange={handleChange}
                                name="al"
                                className="form-select"
                            >
                                <option value="">-- Elija un Elemento --</option>
                                <option value="Investigación Básica."> Investigación Básica. </option>
                                <option value="Investigación Aplicada."> Investigación Aplicada. </option>
                                <option value="Desarrollo Experimental."> Desarrollo Experimental. </option>
                            </select>
                        </div>

                        <div
                            //className="column"
                            className="col-4"

                        >
                            <label>
                                Tipo de Financiamiento:
                            </label>
                            <select
                                id="favColor"
                                //value={formData.favColor}
                                //onChange={handleChange}
                                name="al"
                                className="form-select"
                            >
                                <option value="">-- Elija un Elemento --</option>
                                <option value="ASIGNACIÓN REGULAR IES.">ASIGNACIÓN REGULAR IES.  </option>
                                <option value="FONDOS CONCURSABLES INTERNO IES.">FONDOS CONCURSABLES INTERNO IES. </option>
                                <option value="FONDOS CONCURSABLES NACIONALES.">FONDOS CONCURSABLES NACIONALES. </option>
                                <option value="FONDOS CONSURSABLES INTERNACIONALES">FONDOS CONSURSABLES INTERNACIONALES. </option>

                                <option value="ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNO IES.">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNO IES. </option>
                                <option value="ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES NACIONALES.">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES NACIONALES. </option>
                                <option value="ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNACIONALES.">ASIGNACIÓN REGULAR IES/FONDOS CONCURSABLES INTERNACIONALES. </option>


                                <option value="FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE NACIONALES.">FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE NACIONALES. </option>
                                <option value="FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE SINTERNACIONALES.">FONDOS CONCURSABLES INTERNO IES/ FONDOS CONCURSABLE SINTERNACIONALES. </option>
                                <option value="FONDOS CONCURSABLE INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES">FONDOS CONCURSABLE INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES </option>
                                <option value="ASIGNACION REGULAR IES/FONDOS CONCURSABLES INTERNO IES/ FONDO CONCURSABLES INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES ">ASIGNACION REGULAR IES/FONDOS CONCURSABLES INTERNO IES/ FONDO CONCURSABLES INTERNO NACIONALES/FONDOS CONCURSABLES INTERNACIONALES </option>

                            </select>
                        </div>
                    </div>
                </div>

                {<br />}

                {<br />}

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <label>
                                Organismo (s)/ Entidad (ES) Financiador (ES)
                            </label>

                        </div>
                        <div className="col-8">
                            <input
                                type="text"
                                placeholder="Escribir texto"
                                //className="form--input"
                                className="form-control"

                                name="programaInvestigacion"
                            //onChange={handleChange}
                            //value={formData.programaInvestigacion}
                            />
                        </div>
                    </div>
                </div>


                <br />
                <div className="row">
                    <div
                        //className="column"
                        className="col-4"

                    >
                        <label>
                            Presupuesto Total
                        </label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Ingresar Valor"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div
                        //className="column"
                        className="col-4"

                    >
                        <label>
                            Aporte UTPL
                        </label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Ingresar Valor"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                    <div
                        //className="column"
                        className="col-4"

                    >
                        <label>
                            Aporte Contraparte
                        </label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Ingresar Valor"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        />
                    </div>

                </div>
                <button
                    className="btn btn-primary"
                //onClick={() => console.log(docenteSeleccionado)}
                //type="button"
                >
                    Enviar Información
                </button>
            </form>

        </section>
    )
}