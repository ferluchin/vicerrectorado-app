import React, {
    useState,
    useEffect,
    useRef,
    useContext
} from 'react'

import Split from "react-split";
import Sidebar from "../../components/Sidebar";
import TitleBar from '../../components/TitleBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cronogramaEspE.scss';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    //updateDoc,
    setDoc,
} from "firebase/firestore";

import { app, auth } from "../../firebase";
import { setGlobalState, useGlobalState } from "../../Helper/Context";

const db = getFirestore();

const firestore = getFirestore(app);

export default function CronogramaEspA() {
    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        //let path = `/areas-conocimiento`;
        let path = `/resumen-presupuesto`;
        navigate(path);
    }

    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email
    const formInicial = {
        //CRONOGRAMA DE ACTIVIDADES
        //objetivoGeneral: "",
        objetivoEspecificoCronograma5: "",
        resultadoObjetivoEspecificoCronograma5: "",
        //Actividades
        actividadEspecificaE1: "",
        actividadEspecificaE2: "",
        actividadEspecificaE3: "",
        actividadEspecificaE4: "",
        actividadEspecificaE5: "",

        //Fecha Inicio
        fechaInicioE1: "",
        fechaInicioE2: "",
        fechaInicioE3: "",
        fechaInicioE4: "",
        fechaInicioE5: "",

        //Fecha Fin 
        fechaFinE1: "",
        fechaFinE2: "",
        fechaFinE3: "",
        fechaFinE4: "",
        fechaFinE5: "",

        //Nombrre Evidencia / Medio de Verificación
        nombreEvidenciaE1: "",
        nombreEvidenciaE2: "",
        nombreEvidenciaE3: "",
        nombreEvidenciaE4: "",
        nombreEvidenciaE5: "",

        //Valor de Presupuesto
        valorPresupuestoE1: "",
        valorPresupuestoE2: "",
        valorPresupuestoE3: "",
        valorPresupuestoE4: "",
        valorPresupuestoE5: "",

        //Item de Presupuesto
        itemPresupuestoE1: "",
        itemPresupuestoE2: "",
        itemPresupuestoE3: "",
        itemPresupuestoE4: "",
        itemPresupuestoE5: "",

        //Nombre Responsable Actividad
        nombreResponsableActividadE1: "",
        nombreResponsableActividadE2: "",
        nombreResponsableActividadE3: "",
        nombreResponsableActividadE4: "",
        nombreResponsableActividadE5: "",

    }


    const [globalCronogramaEspE, setGlobalCronogramaEspE] = useGlobalState("cronogramaEspE");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalCronogramaEspE } ? { ...globalCronogramaEspE } : { ...formInicial })
    //const [formData, setFormData] = useState({ ...formInicial })

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                ["cronogramaEspE" + globalAuxiliar]: {
                    ...formData
                }
            }
                //, { merge: true }
            )
        } catch (error) {
            console.log(error)
        }
        //console.log(formData)
        console.log({ ...formData })
        //setFormData({ ...formInicial })
        setGlobalCronogramaEspE({ ...formData })

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
        <div className='cronograma-esp-e'>
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
                            <section>
                                {<br />}

                                <h4>
                                    Cronograma de Actividades
                                </h4>

                                {<br />}

                                <br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Objetivo <br />Específico 5 </h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.objetivoEspecificoCronograma5}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="objetivoEspecificoCronograma5"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Resultado objetivo específico 5</h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.resultadoObjetivoEspecificoCronograma5}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="resultadoObjetivoEspecificoCronograma5"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div className="container">

                                    <div className="row">

                                    </div>

                                    <div className="row">
                                        <div className="col-2">
                                            <label>
                                                Actividades.

                                            </label>

                                        </div>

                                        <div className="col-1">
                                            <label>
                                                Fecha Inicio

                                            </label>
                                        </div>

                                        <div className="col-1">
                                            <label>
                                                Fecha Fin
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Nombre Evidencia/
                                                medio de verificación.

                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Valor de Presupuesto

                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Item de Presupuesto.

                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Nombre responsable de la actividad.
                                            </label>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadEspecificaE1"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaE1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            {/* <DatePicker
                                                selected={formData.fechaInicioE1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioE1: date
                                                    })}
                                                className="form-control"
                                                value=''
                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioE1"
                                                onChange={handleChange}
                                                value={formData.fechaInicioE1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinE1"
                                                onChange={handleChange}
                                                value={formData.fechaFinE1}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinE1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinE1: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreEvidenciaE1"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaE1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoE1"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoE1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoE1"
                                                value={formData.itemPresupuestoE1}
                                                onChange={handleChange}
                                                name="itemPresupuestoE1"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="VIÁTICOS.">VIÁTICOS.</option>
                                                <option value="HONORARIOS.">HONORARIOS.</option>
                                                <option value="MATERIALES, SUMINISTROS Y REACTIVOS.">MATERIALES, SUMINISTROS Y REACTIVOS.</option>
                                                <option value="EQUIPOS.">EQUIPOS.</option>
                                                <option value="CAPACITACIÓN.">CAPACITACIÓN.</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreResponsableActividadE1"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadE1}
                                            />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadEspecificaE2"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaE2}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioE2"
                                                onChange={handleChange}
                                                value={formData.fechaInicioE2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioE2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioE2: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinE2"
                                                onChange={handleChange}
                                                value={formData.fechaFinE2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinE2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinE2: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreEvidenciaE2"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaE2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoE2"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoE2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoE2"
                                                value={formData.itemPresupuestoE2}
                                                onChange={handleChange}
                                                name="itemPresupuestoE2"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="VIÁTICOS.">VIÁTICOS.</option>
                                                <option value="HONORARIOS.">HONORARIOS.</option>
                                                <option value="MATERIALES, SUMINISTROS Y REACTIVOS.">MATERIALES, SUMINISTROS Y REACTIVOS.</option>
                                                <option value="EQUIPOS.">EQUIPOS.</option>
                                                <option value="CAPACITACIÓN.">CAPACITACIÓN.</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreResponsableActividadE2"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadE2}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadEspecificaE3"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaE3}
                                            />
                                        </div>

                                        <div className="col-1">

                                            {/* <DatePicker
                                                selected={formData.fechaInicioE3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioE3: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioE3"
                                                onChange={handleChange}
                                                value={formData.fechaInicioE3}
                                            />

                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinE3"
                                                onChange={handleChange}
                                                value={formData.fechaFinE3}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinE3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinE3: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreEvidenciaE3"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaE3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoE3"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoE3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoE3"
                                                value={formData.itemPresupuestoE3}
                                                onChange={handleChange}
                                                name="itemPresupuestoE3"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="VIÁTICOS.">VIÁTICOS.</option>
                                                <option value="HONORARIOS.">HONORARIOS.</option>
                                                <option value="MATERIALES, SUMINISTROS Y REACTIVOS.">MATERIALES, SUMINISTROS Y REACTIVOS.</option>
                                                <option value="EQUIPOS.">EQUIPOS.</option>
                                                <option value="CAPACITACIÓN.">CAPACITACIÓN.</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreResponsableActividadE3"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadE3}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadEspecificaE4"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaE4}
                                            />
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioE4"
                                                onChange={handleChange}
                                                value={formData.fechaInicioE4}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaInicioE4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioE4: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinE4"
                                                onChange={handleChange}
                                                value={formData.fechaFinE4}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinE4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinE4: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreEvidenciaE4"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaE4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoE4"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoE4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoE4"
                                                value={formData.itemPresupuestoE4}
                                                onChange={handleChange}
                                                name="itemPresupuestoE4"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="VIÁTICOS.">VIÁTICOS.</option>
                                                <option value="HONORARIOS.">HONORARIOS.</option>
                                                <option value="MATERIALES, SUMINISTROS Y REACTIVOS.">MATERIALES, SUMINISTROS Y REACTIVOS.</option>
                                                <option value="EQUIPOS.">EQUIPOS.</option>
                                                <option value="CAPACITACIÓN.">CAPACITACIÓN.</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreResponsableActividadE4"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadE4}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadEspecificaE5"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaE5}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioE5"
                                                onChange={handleChange}
                                                value={formData.fechaInicioE5}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioE5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioE5: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinE5"
                                                onChange={handleChange}
                                                value={formData.fechaFinE5}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaFinE5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinE5: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreEvidenciaE5"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaE5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoE5"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoE5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoE5"
                                                value={formData.itemPresupuestoE5}
                                                onChange={handleChange}
                                                name="itemPresupuestoE5"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="VIÁTICOS.">VIÁTICOS.</option>
                                                <option value="HONORARIOS.">HONORARIOS.</option>
                                                <option value="MATERIALES, SUMINISTROS Y REACTIVOS.">MATERIALES, SUMINISTROS Y REACTIVOS.</option>
                                                <option value="EQUIPOS.">EQUIPOS.</option>
                                                <option value="CAPACITACIÓN.">CAPACITACIÓN.</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombreResponsableActividadE5"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadE5}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <br />
                                <div className="container">
                                    <div className="row">

                                    </div>
                                    <button
                                        className="btn btn-primary btn-block"
                                    >
                                        Guardar y Continuar
                                    </button>
                                </div>
                            </section>
                        </form>
                    </section>

                </Split>
            </div>
        </div>
    )
}

