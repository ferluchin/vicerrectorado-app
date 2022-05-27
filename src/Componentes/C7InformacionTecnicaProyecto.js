import React from "react";
import TitleBar from "./TitleBar";
// import NavBar from "../NavBar";
import "../style.css"

export default function InformacionTecnicaProyecto() {


    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}

                <div className="container">

                    <h2> 2.  Información Técnica del Proyecto</h2>
                    <div className="row">
                        <div className="col-3">
                            <h4> 2.1 Resúmen del Proyecto</h4>
                        </div>

                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Realizar una síntesis clara y concisa del proyecto (máximo 150 palabras)"
                                //onChange={handleChange}
                                name="comments"
                            />
                            < br />
                        </div>
                    </div>

                    < br />


                    <h3> 2.2 Palabras Clave</h3>

                    <div className="row">
                        <div className="col-3">

                            <input
                                type="text"
                                placeholder="Keywords"
                                className="form--input"
                                name="titulo"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                        <div className="col-3">

                            <input
                                type="text"
                                placeholder="Keywords"
                                className="form--input"
                                name="titulo"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                        <div className="col-3">

                            <input
                                type="text"
                                placeholder="Keywords"
                                className="form--input"
                                name="titulo"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                        <div className="col-3">

                            <input
                                type="text"
                                placeholder="Keywords"
                                className="form--input"
                                name="titulo"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>



                    <h4 style={{ textAlign: "left" }}> 2.3 Introducción </h4>

                    <div className="row">
                        <div className="col-3">
                            <h4> a. Antecedentes </h4>

                        </div>

                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Máximo 500 palabras"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <h4> b. Justificación </h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Máximo 500 palabras"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>

                    < br />

                    <h4 style={{ textAlign: "left", marginLeft: "10px" }}> 2.5 Objetivos del Proyecto.</h4>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <h4> Objetivo General: </h4>

                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Detallar"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-3">
                            <h4> Objetivos Específicos: </h4>
                        </div>
                        <div className="col-9">
                            <textarea
                                //value={formData.comments}
                                placeholder="Se recomienda máximo 3"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>

                    <br />
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