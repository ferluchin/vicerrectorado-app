import React from "react";
// import NavBar from "../NavBar";
import TitleBar from "./TitleBar";
import "../style.css"


export default function MetodologiaProyecto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}
                <div className="container">

                    <div className="row">
                        <div className="col-4">
                            <h4 style={{ textAlign: 'left' }}> 2.6 Metodología</h4>

                        </div>
                        <div className="col-8">
                            <textarea
                                //value={formData.comments}
                                placeholder="Describir de manera sintética los métodos 
                    y técnicas necesarias para alcanzar sus objetivos"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>


                    <br />
                    <div className="row">
                        <div className="col-6">
                            <h4 style={{ textAlign: 'left' }}> 2.7 Transferecia de conocimiento</h4>

                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-4">
                            <label style={{ textAlign: 'left' }}>
                                Artículo Científico
                            </label>
                        </div>
                        <div className="col-8">
                            <select
                                id="favColor"
                                //value={formData.favColor}
                                //onChange={handleChange}
                                name="al"
                                className="form-select"
                            >
                                <option value="">-- Elija un Elemento --</option>
                                <option value="SI">SI</option>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-4">
                            <label>
                                Prototipo
                            </label>
                        </div>
                        <div className="col-8">
                            <select
                                id="favColor"
                                //value={formData.favColor}
                                //onChange={handleChange}
                                name="al"
                                className="form-select"
                            >
                                <option value="">-- Elija un Elemento --</option>
                                <option value="SI">SI</option>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">

                        <div className="col-4">
                            <label>
                                Registro de Propiedad Industrial
                            </label>
                        </div>
                        <div className="col-8">
                            <select
                                id="favColor"
                                //value={formData.favColor}
                                //onChange={handleChange}
                                name="al"
                                className="form-select"
                            >
                                <option value="">-- Elija un Elemento --</option>
                                <option value="SI">SI</option>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div >
                    <br />
                    <div className="row">

                        <div className="col-4">
                            <label>
                                Otros
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                type="text"
                                placeholder="Detallar si aplica. "
                                className="form--input"
                                name="otrosTransferenciaConocimiento"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-6">
                            <h4 style={{ textAlign: 'left' }}> 2.8 Impactos del Proyecto</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">

                            <label>
                                Impacto Social.
                            </label>
                        </div>
                        <div className="col-8">

                            <input
                                type="text"
                                placeholder="Su proyecto tendrá el siguiente impacto "
                                className="form--input"
                                name="impactoSocial"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">

                            <label>
                                Impacto Científico
                            </label>

                        </div>

                        <div className="col-8">

                            <input
                                type="text"
                                placeholder="Su proyecto tendrá el siguiente impacto "
                                className="form--input"
                                name="impactoCientifico"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-4">

                            <label>
                                Impacto Económico
                            </label>
                        </div>
                        <div className="col-8">

                            <input
                                type="text"
                                placeholder="Su proyecto tendrá el siguiente impacto"
                                className="form--input"
                                name="impactoEconomico"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">

                            <label>
                                Impacto Político
                            </label>
                        </div>

                        <div className="col-8">

                            <input
                                type="text"
                                placeholder="Su proyecto tendrá el siguiente impacto "
                                className="form--input"
                                name="impactoPolitico"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label style={{ textAlign: 'left' }} >
                                Otro Impacto
                            </label>
                        </div>
                        <div className="col-8">

                            <input
                                type="otroImpacto"
                                placeholder="Su proyecto tendrá el siguiente impacto"
                                className="form--input"
                                name="otroImpacto"
                            //onChange={handleChange}
                            //value={formData.titulo}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-4">
                            <h4 style={{ textAlign: 'left' }}> 2.9 Descripción de Actividad I+D</h4>

                        </div>
                        <div className="col-8">
                            <textarea
                                //value={formData.comments}
                                placeholder="Descripción de la actividad"
                                //onChange={handleChange}
                                name="comments"
                            />
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-4">
                            <h4 style={{ textAlign: 'left' }}> 2.10 Aspectos Bioéticos</h4>

                        </div>
                        <div className="col-8">
                            <textarea
                                //value={formData.comments}
                                placeholder="Su proyecto requiere aprobación de un comité de bioética"
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

        </section >
    )
}