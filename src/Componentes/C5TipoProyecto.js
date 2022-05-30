import React from "react";
// import NavBar from "../NavBar";
import "../style.css"
import TitleBar from "./TitleBar";

export default function TipoProyecto() {

    const [formData, setFormData] = React.useState(
        {
            tipoProyecto: "",
            tipoInvestigacion: "",
            tipoFinanciamiento: "",

            organismoEntidadFinanciador: "",

            presupuestoTotal: "",
            aporteUTPL: "",
            aporteContraparte: "",

        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <section>
            <form
                className="form"
                onSubmit={handleSubmit}
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
                            <label htmlFor="tipoProyecto">
                                Tipo de Proyecto:
                            </label>

                            {<br />}
                            <select
                                id="tipoProyecto"
                                value={formData.tipoProyecto}
                                onChange={handleChange}
                                name="tipoProyecto"
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
                            <label htmlFor="tipoInvestigacion">
                                Tipo de Investigación:
                            </label>
                            <select
                                id="tipoInvestigacion"
                                value={formData.tipoInvestigacion}
                                onChange={handleChange}
                                name="tipoInvestigacion"
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
                            <label htmlFor="tipoFinanciamiento">
                                Tipo de Financiamiento:
                            </label>
                            <select
                                id="tipoFinanciamiento"
                                value={formData.tipoFinanciamiento}
                                onChange={handleChange}
                                name="tipoFinanciamiento"
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

                                name="organismoEntidadFinanciador"
                                onChange={handleChange}
                                value={formData.organismoEntidadFinanciador}
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
                            name="presupuestoTotal"
                            onChange={handleChange}
                            value={formData.presupuestoTotal}
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
                            name="aporteUTPL"
                            onChange={handleChange}
                            value={formData.aporteUTPL}
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
                            name="aporteContraparte"
                            onChange={handleChange}
                            value={formData.aporteContraparte}
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