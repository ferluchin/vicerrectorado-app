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

                <h2> 2.  Información Técnica del Proyecto</h2>
                < br />
                <h3> 2.1 Resúmen del Proyecto</h3>

                <textarea
                    //value={formData.comments}
                    placeholder="Realizar una síntesis clara y concisa del proyecto (máximo 150 palabras)"
                    //onChange={handleChange}
                    name="comments"
                />
                < br />
                <h3> 2.2 Palabras Clave</h3>

                <div className="container">
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
                </div>



                <h3> 2.3 Introducción </h3>


                <h4> a. Antecedentes </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Máximo 500 palabras"
                    //onChange={handleChange}
                    name="comments"
                />

                <h4> b. Justificación </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Máximo 500 palabras"
                    //onChange={handleChange}
                    name="comments"
                />
                < br />

                <h3> 2.5 Objetivos del Proyecto.</h3>
                <h4> Objetivo General: </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Detallar"
                    //onChange={handleChange}
                    name="comments"
                />

                <h4> Objetivos Específicos: </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Se recomienda máximo 3"
                    //onChange={handleChange}
                    name="comments"
                />
                <br/>
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