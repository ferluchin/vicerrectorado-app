import React from "react";
// import NavBar from "../NavBar";
import TitleBar from "./TitleBar";
import TablaCronograma from "./TablaCronograma";
import "../style.css"

export default function CronogramaActividades() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}

                <h3>
                    2.11 Cronograma de Actividades
                </h3>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h4> Objetivo General </h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />

                        </div>

                    </div>
                </div>
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h4> Objetivo <br />Específico 1 </h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                </div>
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h4> Resultado objetivo específico 1</h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                </div>

                {<br />}

                <TablaCronograma />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h4> Objetivo específico 2 </h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <h4> Resultado objetivo específico 2</h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                </div>

                <br />



                {<br />}

                <br />
                <TablaCronograma />

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

