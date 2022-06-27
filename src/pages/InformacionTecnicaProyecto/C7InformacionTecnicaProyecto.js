import React from "react";
import TitleBar from "../../components/TitleBar";
// import NavBar from "../NavBar";
import "./informacionTecnica.scss"
import { app, auth } from "../../firebase"

import { useNavigate } from "react-router-dom";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    setDoc,
} from "firebase/firestore";

import Split from "react-split";
import Sidebar from "../../components/Sidebar";


const firestore = getFirestore(app)

export default function InformacionTecnicaProyecto() {

    const correoUsuario = "lgrandab@gmail.com"
    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/metodologia-proyecto`;
        navigate(path);
    }

    const formInicial = {
        resumenProyecto: "",

        palabraClave1: "",
        palabraClave2: "",
        palabraClave3: "",
        palabraClave4: "",

        introduccionAntecedentes: "",
        introduccionJustificacion: "",


        objetivoGeneral: "",
        objetivoEspecifico1: "",
        objetivoEspecifico2: "",
        objetivoEspecifico3: "",
        objetivoEspecifico4: "",
        objetivoEspecifico5: ""
    }

    const [formData, setFormData] = React.useState(
        { ...formInicial });

    /*
    const [formData, setFormData] = React.useState(
        {
            resumenProyecto: "",

            palabraClave1: "",
            palabraClave2: "",
            palabraClave3: "",
            palabraClave4: "",

            introduccionAntecedentes: "",
            introduccionJustificacion: "",


            objetivoGeneral: "",
            objetivoEspecifico1: "",
            objetivoEspecifico2: "",
            objetivoEspecifico3: "",
            objetivoEspecifico4: "",
            objetivoEspecifico5: ""
        }
    )
*/

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    /*
        function handleSubmit(event) {
            event.preventDefault()
            // submitToApi(formData)
            console.log(formData)
        }
    */
    const handleSubmit = async (event) => {
        event.preventDefault()
        // submitToApi(formData)
        // try {
        //     await addDoc(collection(db, 'proyectos-investigacion'), {
        //         ...formData
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
        // console.log(formData)
        // setFormData({ ...formInicial })
        // routeChange()

        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            updateDoc(docuRef, {
                informacionTecnicaProyecto: {
                    ...formData
                }
            })


        } catch (error) {
            console.log(error)
        }
        //console.log(formData)
        console.log({ ...formData })
        setFormData({ ...formInicial })
        routeChange()
    }

    return (
        <div className="informacion-tecnica">
            <div className="main-body">
                <Split
                    sizes={[20, 80]}
                    direction="horizontal"
                    className="split"
                    minSize={100}
                    expandToMin={false}
                    dragInterval={1}
                    cursor="col-resize"
                >
                    <Sidebar
                    />

                    <section>
                        <form
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <TitleBar />

                            <div className="container">

                                <h2> 2.  Información Técnica del Proyecto</h2>
                                <div className="row">
                                    <div className="col-3">
                                        <h4> 2.1 Resúmen del Proyecto</h4>
                                    </div>

                                    <div className="col-9">
                                        <textarea
                                            name="resumenProyecto"
                                            value={formData.resumenProyecto}
                                            placeholder="Realizar una síntesis clara y concisa del proyecto (máximo 150 palabras)"
                                            onChange={handleChange}
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
                                            name="palabraClave1"
                                            onChange={handleChange}
                                            value={formData.palabraClave1}
                                        />
                                    </div>
                                    <div className="col-3">

                                        <input
                                            type="text"
                                            placeholder="Keywords"
                                            className="form--input"
                                            name="palabraClave2"
                                            onChange={handleChange}
                                            value={formData.palabraClave2}
                                        />
                                    </div>
                                    <div className="col-3">

                                        <input
                                            type="text"
                                            placeholder="Keywords"
                                            className="form--input"
                                            name="palabraClave3"
                                            onChange={handleChange}
                                            value={formData.palabraClave3}
                                        />
                                    </div>
                                    <div className="col-3">

                                        <input
                                            type="text"
                                            placeholder="Keywords"
                                            className="form--input"
                                            name="palabraClave4"
                                            onChange={handleChange}
                                            value={formData.palabraClave4}
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
                                            name="introduccionAntecedentes"
                                            value={formData.introduccionAntecedentes}
                                            placeholder="Máximo 500 palabras"
                                            onChange={handleChange}
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
                                            name="introduccionJustificacion"
                                            value={formData.introduccionJustificacion}
                                            placeholder="Máximo 500 palabras"
                                            onChange={handleChange}
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
                                            name="objetivoGeneral"
                                            value={formData.objetivoGeneral}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12">
                                        <h4>Objetivos Específicos</h4>
                                    </div>

                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <h4> Objetivo Específico 1: </h4>
                                    </div>
                                    <div className="col-9">
                                        <textarea
                                            name="objetivoEspecifico1"
                                            value={formData.objetivoEspecifico1}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <br />
                                <div className="row">
                                    <div className="col-3">
                                        <h4> Objetivo Específico 2: </h4>
                                    </div>
                                    <div className="col-9">
                                        <textarea
                                            name="objetivoEspecifico2"
                                            value={formData.objetivoEspecifico2}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <h4> Objetivo Específico 3: </h4>
                                    </div>
                                    <div className="col-9">
                                        <textarea
                                            name="objetivoEspecifico3"
                                            value={formData.objetivoEspecifico3}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <h4> Objetivo Específico 4: </h4>
                                    </div>
                                    <div className="col-9">
                                        <textarea
                                            value={formData.objetivoEspecifico4}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                            name="objetivoEspecifico4"
                                        />
                                    </div>
                                </div>

                                <br />
                                <div className="row">
                                    <div className="col-3">
                                        <h4> Objetivo Específico 5: </h4>
                                    </div>
                                    <div className="col-9">
                                        <textarea
                                            name="objetivoEspecifico5"
                                            value={formData.objetivoEspecifico5}
                                            placeholder="Detallar"
                                            onChange={handleChange}
                                        />
                                    </div>
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
                </Split>
            </div>

        </div>

    )
}