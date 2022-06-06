import React from "react";
// import NavBar from "../NavBar";'
import TitleBar from "./TitleBar";
import "../style.css"

import { app, auth } from "../firebase"


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

const db = getFirestore();

export default function ResumenPresupuesto() {

    const formInicial = {
        //resumen Presupuestos
        viaticosSubsistenciasMovilizacion: "",
        honorarios: "",
        materialesSuministrosReactivos: "",
        equipos: "",
        capacitacion: "",
        totalGastosDirectos: "",
        //adicional
        bibliografia: "",
        observaciones: "",
    }

    const [formData, setFormData] = React.useState(
        { ...formInicial })
    /*
    const [formData, setFormData] = React.useState(
        {
            //resumen Presupuestos
            viaticosSubsistenciasMovilizacion: "",
            honorarios: "",
            materialesSuministrosReactivos: "",
            equipos: "",
            capacitacion: "",
            totalGastosDirectos: "",
            //adicional
            bibliografia: "",
            observaciones: "",
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
    }

    return (
        <section>
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}
                <h3>
                    2.12 Resumen Presupuestos
                </h3>

                <h3>
                    Items
                </h3>

                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-4">

                            <h5>
                                Viáticos, subsistencias y movilización.
                            </h5>
                        </div>
                        <div className="col-8">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="viaticosSubsistenciasMovilizacion"
                                onChange={handleChange}
                                value={formData.viaticosSubsistenciasMovilizacion}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">

                            <h5>
                                Honorarios.
                            </h5>

                        </div>

                        <div className="col-8">
                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="honorarios"
                                onChange={handleChange}
                                value={formData.honorarios}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-4">

                            <h5>
                                Materiales, suministros y reactivos.
                            </h5>
                        </div>
                        <div className="col-8">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="materialesSuministrosReactivos"
                                onChange={handleChange}
                                value={formData.materialesSuministrosReactivos}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">

                            <h5>
                                Equipos
                            </h5>
                        </div>

                        <div className="col-8">

                            <input
                                type="number"
                                min={0}
                                placeholder="$ "
                                className="form--input"
                                name="equipos"
                                onChange={handleChange}
                                value={formData.equipos}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">
                            <h5>
                                Capacitación.
                            </h5>
                        </div>
                        <div className="col-8">

                            <input
                                type="number"
                                min={0}
                                placeholder="$"
                                className="form--input"
                                name="capacitacion"
                                onChange={handleChange}
                                value={formData.capacitacion}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">

                            <h5>
                                Total de gastos directos.
                            </h5>
                        </div>
                        <div className="col-8">

                            <input
                                type="number"
                                min={0}
                                placeholder="$"
                                className="form--input"
                                name="totalGastosDirectos"
                                onChange={handleChange}
                                value={formData.totalGastosDirectos}
                            />
                        </div>

                    </div>

                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h5>
                                Bibliografía.
                            </h5>

                        </div>
                        <div className="col-8">
                            <textarea
                                value={formData.bibliografia}
                                placeholder="Escribir Texto "
                                onChange={handleChange}
                                name="bibliografia"
                            />
                        </div>
                    </div>
                </div>
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h5>
                                Observaciones.
                            </h5>

                        </div>
                        <div className="col-8">
                            <textarea
                                value={formData.observaciones}
                                placeholder="Escribir Texto "
                                onChange={handleChange}
                                name="observaciones"
                            />
                        </div>
                    </div>
                </div>

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