import React from "react";
// import NavBar from "../NavBar";
import TitleBar from "../../Componentes/TitleBar";
import "./metodologiaProyecto.css"

import { app, auth } from "../../firebase"

import { useNavigate } from "react-router-dom";

import {
    getFirestore,
    collection,
    addDoc,
    // getDocs,
    // doc,
    // deleteDoc,
    // getDoc,
    // updateDoc,
    // setDoc,
} from "firebase/firestore";

import Split from "react-split";
import Sidebar from "../../Componentes/Sidebar";

const db = getFirestore();

export default function MetodologiaProyecto() {


    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/cronograma-actividades`;
        navigate(path);
    }



    const formInicial = {
        metodologia: "",

        //Tranferencia de conocimiento 
        articuloCientifico: "",
        prototipo: "",
        registroPropiedadIndustrial: "",
        otrosTransferenciaConocimiento: "",
        //Impactos del Proyecto
        impactoSocial: "",
        impactoCientifico: "",
        impactoEconomico: "",
        impactoPolitico: "",
        otroImpacto: "",

        descripcionActividadID: "",
        aspectosBioeticos: "",
    }

    const [formData, setFormData] = React.useState({
        ...formInicial
    })

    /*
    const [formData, setFormData] = React.useState(
        {
            metodologia: "",

            //Tranferencia de conocimiento 
            articuloCientifico: "",
            prototipo: "",
            registroPropiedadIndustrial: "",
            otrosTransferenciaConocimiento: "",
            //Impactos del Proyecto
            impactoSocial: "",
            impactoCientifico: "",
            impactoEconomico: "",
            impactoPolitico: "",
            otroImpacto: "",

            descripcionActividadID: "",
            aspectosBioeticos: "",
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
        try {
            await addDoc(collection(db, 'proyectos-investigacion'), {
                ...formData
            })
        } catch (error) {
            console.log(error)
        }
        console.log(formData)
        setFormData({ ...formInicial })
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
                        <div className="container">

                            <div className="row">
                                <div className="col-4">
                                    <h4 style={{ textAlign: 'left' }}> 2.6 Metodología</h4>

                                </div>
                                <div className="col-8">
                                    <textarea
                                        value={formData.metodologia}
                                        placeholder="Describir de manera sintética los métodos y técnicas necesarias para alcanzar sus objetivos"
                                        onChange={handleChange}
                                        name="metodologia"
                                    />
                                </div>
                            </div>


                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <h4 style={{ textAlign: 'left' }}>
                                        2.7 Transferecia de conocimiento
                                    </h4>

                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-4">
                                    <h5>
                                        Artículo Científico
                                    </h5>
                                </div>
                                <div className="col-8">
                                    <select
                                        id="articuloCientifico"
                                        value={formData.articuloCientifico}
                                        onChange={handleChange}
                                        name="articuloCientifico"
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
                                    <h5>
                                        Prototipo
                                    </h5>
                                </div>
                                <div className="col-8">
                                    <select
                                        id="prototipo"
                                        value={formData.prototipo}
                                        onChange={handleChange}
                                        name="prototipo"
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
                                    <h5>
                                        Registro de Propiedad Industrial
                                    </h5>
                                </div>
                                <div className="col-8">
                                    <select
                                        id="registroPropiedadIndustrial"
                                        value={formData.registroPropiedadIndustrial}
                                        onChange={handleChange}
                                        name="registroPropiedadIndustrial"
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
                                    <h5>
                                        Otros
                                    </h5>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        placeholder="Detallar si aplica. "
                                        className="form--input"
                                        name="otrosTransferenciaConocimiento"
                                        onChange={handleChange}
                                        value={formData.otrosTransferenciaConocimiento}
                                    />
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <h4 style={{ textAlign: 'left' }}> 2.8 Impactos del Proyecto</h4>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4">

                                    <h5>
                                        Impacto Social.
                                    </h5>
                                </div>
                                <div className="col-8">

                                    <input
                                        type="text"
                                        placeholder="Su proyecto tendrá el siguiente impacto "
                                        className="form--input"
                                        name="impactoSocial"
                                        onChange={handleChange}
                                        value={formData.impactoSocial}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">

                                    <h5>
                                        Impacto Científico
                                    </h5>

                                </div>

                                <div className="col-8">

                                    <input
                                        type="text"
                                        placeholder="Su proyecto tendrá el siguiente impacto "
                                        className="form--input"
                                        name="impactoCientifico"
                                        onChange={handleChange}
                                        value={formData.impactoCientifico}
                                    />
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-4">

                                    <h5>
                                        Impacto Económico
                                    </h5>
                                </div>
                                <div className="col-8">

                                    <input
                                        type="text"
                                        placeholder="Su proyecto tendrá el siguiente impacto"
                                        className="form--input"
                                        name="impactoEconomico"
                                        onChange={handleChange}
                                        value={formData.impactoEconomico}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">

                                    <h5>
                                        Impacto Político
                                    </h5>
                                </div>

                                <div className="col-8">

                                    <input
                                        type="text"
                                        placeholder="Su proyecto tendrá el siguiente impacto "
                                        className="form--input"
                                        name="impactoPolitico"
                                        onChange={handleChange}
                                        value={formData.impactoPolitico}
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5>
                                        Otro Impacto
                                    </h5>
                                </div>
                                <div className="col-8">

                                    <input
                                        type="otroImpacto"
                                        placeholder="Su proyecto tendrá el siguiente impacto"
                                        className="form--input"
                                        name="otroImpacto"
                                        onChange={handleChange}
                                        value={formData.otroImpacto}
                                    />
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <h4 style={{ textAlign: 'left' }}> 2.9 Descripción de Actividad I+D</h4>

                                </div>
                                <div className="col-8">
                                    <textarea
                                        name="descripcionActividadID"
                                        value={formData.descripcionActividadID}
                                        placeholder="Descripción de la actividad"
                                        onChange={handleChange}
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
                                        name="aspectosBioeticos"
                                        value={formData.aspectosBioeticos}
                                        placeholder="Su proyecto requiere aprobación de un comité de bioética"
                                        onChange={handleChange}
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
            </Split>
        </>

    )
}