import React from "react";
// import NavBar from "../NavBar";
import TitleBar from "../../Componentes/TitleBar";
import TablaCronograma from "../../Componentes/TablaCronograma";
import "../../style.css"
import { useNavigate } from "react-router-dom";

import Split from "react-split";
import Sidebar from "../../Componentes/Sidebar";

export default function CronogramaActividades() {


    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/resumen-presupuesto`;
        navigate(path);
    }


    const [formData, setFormData] = React.useState(
        {
            //Cronograma de Actividades
            objetivoGeneral: "",
            objetivoEspecifico1: "",
            resultadoObjetivoEspecifico1: "",

            //Personal Externo a Contratar

            //objetivos y resultados
            objectivoEspecifico2: "",
            resultadoObjetivoEspecifico2: "",
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
        routeChange()
    }


    return (
        <>
            <Split
                sizes={[30, 70]}
                direction="horizontal"
                className="split"
                minSize={100}
                expandToMin={false}
                dragInterval={1}
                cursor="col-resize"
            >
                <Sidebar
                //notes={notes}
                //currentNote={findCurrentNote()}
                //setCurrentNoteId={setCurrentNoteId}
                //newNote={createNewNote}
                />

                <section>
                    <form
                        className="form"
                        onSubmit={handleSubmit}
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
                                    <h4>
                                        Objetivo General
                                    </h4>

                                </div>
                                <div className="col-9">
                                    <textarea
                                        value={formData.objetivoGeneral}
                                        placeholder="Escribir texto"
                                        onChange={handleChange}
                                        name="objetivoGeneral"
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
                                        value={formData.objetivoEspecifico1}
                                        placeholder="Escribir texto"
                                        onChange={handleChange}
                                        name="objetivoEspecifico1"
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
                                        value={formData.resultadoObjetivoEspecifico1}
                                        placeholder="Escribir texto"
                                        onChange={handleChange}
                                        name="resultadoObjetivoEspecifico1"
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
                                        value={formData.objectivoEspecifico2}
                                        placeholder="Escribir texto"
                                        onChange={handleChange}
                                        name="objectivoEspecifico2"
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
                                        value={formData.resultadoObjetivoEspecifico2}
                                        placeholder="Escribir texto"
                                        onChange={handleChange}
                                        name="resultadoObjetivoEspecifico2"
                                    />
                                </div>
                            </div>
                        </div>

                        <br />
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

            </Split>
        </>

    )
}

