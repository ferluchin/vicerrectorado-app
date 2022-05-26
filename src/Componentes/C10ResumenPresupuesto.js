import React from "react";
// import NavBar from "../NavBar";'
import TitleBar from "./TitleBar";
import "../style.css"

export default function ResumenPresupuesto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}
                <h3> 2.12 Resumen Presupuestos </h3>

                <h4> Items</h4>

                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <label>
                                Viáticos, subsistencias y movilización.
                            </label>
                        </div>
                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="viaticosSubsistenciasMovilizacion"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">

                            <label>
                                Honorarios.
                            </label>

                        </div>

                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="honorarios"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-6">

                            <label>
                                Materiales, suministros y reactivos.
                            </label>
                        </div>
                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="materialesSuministrosReactivos"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">

                            <label>
                                Equipos
                            </label>
                        </div>

                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="equipos"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                Capacitación.
                            </label>
                        </div>
                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$"
                                className="form--input"
                                name="capacitacion"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6">

                            <label>
                                Total de gastos directos.
                            </label>
                        </div>
                        <div className="col-6">

                            <input
                                type="number"
                                min={0}
                                placeholder="$"
                                className="form--input"
                                name="totalGastosDirectos"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>

                </div>

                <h3> 2.13 Bibliografía.</h3>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir Texto "
                    //onChange={handleChange}
                    name="comments"
                />

                <h3> 2.14 Observaciones.</h3>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir Texto "
                    //onChange={handleChange}
                    name="comments"
                />
                <br />
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