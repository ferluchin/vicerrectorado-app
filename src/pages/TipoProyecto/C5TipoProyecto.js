import React, { useState, useEffect, useRef, useContext } from "react";
// import NavBar from "../NavBar";
import "./tipoProyecto.scss";
import TitleBar from "../../components/TitleBar";
import Split from "react-split";
import Sidebar from "../../components/Sidebar";

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
import { AuthContext } from "../../context/AuthContext";

import { app } from "../../firebase";
import { setGlobalState, useGlobalState } from "../../Helper/Context";


const db = getFirestore(app);

export default function TipoProyecto() {

    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext)

    const correoUsuario = currentUser.email;
    console.log("🚀 ~ file: C5TipoProyecto.js ~ line 33 ~ TipoProyecto ~ correoUsuario", correoUsuario)

    //const correoUsuario = "lgrandab@gmail.com"

    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/personal-interno`;
        navigate(path);
    }


    const formInicial = {
        tipoProyecto: "",
        tipoInvestigacion: "",
        tipoFinanciamiento: "",

        organismoEntidadFinanciador: "",

        presupuestoTotal: "",
        aporteUTPL: "",
        aporteContraparte: "",
    }

    const [globalTipoProyecto, setGlobalTipoProyecto] = useGlobalState("tipoProyecto");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");

    //const [formData, setFormData] = React.useState({ ...formInicial });

    const [formData, setFormData] = useState({ ...globalTipoProyecto } ? { ...globalTipoProyecto } : { ...formInicial })

    async function getAux() {
        var docRef = doc(db, `proyectos-investigacion/${correoUsuario}`);
        //var docRef = collection(db, "proyectos-investigacion", `${correoUsuario}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().auxiliar);
            setGlobalAuxiliar(docSnap.data().auxiliar)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
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

        try {

            const docuRef = doc(db, `proyectos-investigacion/${correoUsuario}`)
            await updateDoc(docuRef, {
                ["tipoProyecto" + globalAuxiliar]: {
                    ...formData
                }
            })
        } catch (error) {
            console.log(error)
        }

        console.log({ ...formData })
        //setFormData({ ...formInicial })
        setGlobalTipoProyecto({ ...formData })

        routeChange()
    }
    useEffect(() => {
        getAllNodes();
    }, []);

    const getAllNodes = () => {
        getAux().then((response) => {
            setNodes(response);
            setLoading(false);
        });
    };
    if (isLoading) {
        return <div className="App">Cargando...</div>;
    }
    return (
        <div className="tipo-proyecto">
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

                            <h3>
                                Tipo de Proyecto.
                            </h3>
                            {<br />}

                            <div className="container">

                                <div className="row">
                                    <div
                                        className="col-4"

                                    >
                                        <h5>
                                            Tipo de Proyecto:
                                        </h5>

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
                                        className="col-4"
                                    >
                                        <h5>
                                            Tipo de Investigación:
                                        </h5>
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
                                        className="col-4"
                                    >
                                        <h5>
                                            Tipo de Financiamiento:
                                        </h5>
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

                            <br />

                            <br />

                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Organismo (s)/ Entidad (ES) Financiador (ES)
                                        </h5>

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
                            <div className="container">

                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Presupuesto Total
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>
                                            Aporte UTPL
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>
                                            Aporte Contraparte
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="container">

                                <div className="row">
                                    <div
                                        className="col-4"
                                    >
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
                                        className="col-4"
                                    >

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
                                        className="col-4"
                                    >
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
                            </div>
                            <button
                                className="btn btn-danger"
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