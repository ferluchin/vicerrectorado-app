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
import './cronogramaEspD.scss';
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
        objetivoEspecificoCronograma4: "",
        resultadoObjetivoEspecificoCronograma4: "",
        //Actividades
        actividadEspecificaD1: "",
        actividadEspecificaD2: "",
        actividadEspecificaD3: "",
        actividadEspecificaD4: "",
        actividadEspecificaD5: "",

        //Fecha Inicio
        fechaInicioD1: "",
        fechaInicioD2: "",
        fechaInicioD3: "",
        fechaInicioD4: "",
        fechaInicioD5: "",

        //Fecha Fin 
        fechaFinD1: "",
        fechaFinD2: "",
        fechaFinD3: "",
        fechaFinD4: "",
        fechaFinD5: "",

        //Nombrre Evidencia / Medio de Verificación
        nombreEvidenciaD1: "",
        nombreEvidenciaD2: "",
        nombreEvidenciaD3: "",
        nombreEvidenciaD4: "",
        nombreEvidenciaD5: "",

        //Valor de Presupuesto
        valorPresupuestoD1: "",
        valorPresupuestoD2: "",
        valorPresupuestoD3: "",
        valorPresupuestoD4: "",
        valorPresupuestoD5: "",

        //Item de Presupuesto
        itemPresupuestoD1: "",
        itemPresupuestoD2: "",
        itemPresupuestoD3: "",
        itemPresupuestoD4: "",
        itemPresupuestoD5: "",

        //Nombre Responsable Actividad
        nombreResponsableActividadD1: "",
        nombreResponsableActividadD2: "",
        nombreResponsableActividadD3: "",
        nombreResponsableActividadD4: "",
        nombreResponsableActividadD5: "",

    }


    const [globalCronogramaEspD, setGlobalCronogramaEspD] = useGlobalState("cronogramaEspD");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalCronogramaEspD } ? { ...globalCronogramaEspD } : { ...formInicial })
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
            // formData.fechaInicioD1 = (formData.fechaInicioD1).toISOString().split('T')
            // formData.fechaFinD1 = (formData.fechaFinD1).toISOString().split('T')
            // formData.fechaInicioD2 = (formData.fechaInicioD2).toISOString().split('T')
            // formData.fechaFinD2 = (formData.fechaFinD2).toISOString().split('T')
            // formData.fechaInicioD3 = (formData.fechaInicioD3).toISOString().split('T')
            // formData.fechaFinD3 = (formData.fechaFinD3).toISOString().split('T')
            // formData.fechaInicioD4 = (formData.fechaInicioD4).toISOString().split('T')
            // formData.fechaFinD4 = (formData.fechaFinD4).toISOString().split('T')
            // formData.fechaInicioD5 = (formData.fechaInicioD5).toISOString().split('T')
            // formData.fechaFinD5 = (formData.fechaFinD5).toISOString().split('T')

            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                ["cronogramaEspD" + globalAuxiliar]: {
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
        setGlobalCronogramaEspD({ ...formData })

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
        <div className='cronograma-esp-d'>
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


                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Objetivo <br />Específico 4 </h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.objetivoEspecificoCronograma4}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="objetivoEspecificoCronograma4"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Resultado objetivo específico 4</h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.resultadoObjetivoEspecificoCronograma4}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="resultadoObjetivoEspecificoCronograma4"
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
                                                name="actividadEspecificaD1"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaD1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            {/* <DatePicker
                                                selected={formData.fechaInicioD1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioD1: date
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
                                                name="fechaInicioD1"
                                                onChange={handleChange}
                                                value={formData.fechaInicioD1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinD1"
                                                onChange={handleChange}
                                                value={formData.fechaFinD1}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinD1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinD1: date
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
                                                name="nombreEvidenciaD1"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaD1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoD1"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoD1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoD1"
                                                value={formData.itemPresupuestoD1}
                                                onChange={handleChange}
                                                name="itemPresupuestoD1"
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
                                                name="nombreResponsableActividadD1"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadD1}
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
                                                name="actividadEspecificaD2"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaD2}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioD2"
                                                onChange={handleChange}
                                                value={formData.fechaInicioD2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioD2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioD2: date
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
                                                name="fechaFinD2"
                                                onChange={handleChange}
                                                value={formData.fechaFinD2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinD2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinD2: date
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
                                                name="nombreEvidenciaD2"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaD2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoD2"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoD2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoD2"
                                                value={formData.itemPresupuestoD2}
                                                onChange={handleChange}
                                                name="itemPresupuestoD2"
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
                                                name="nombreResponsableActividadD2"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadD2}
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
                                                name="actividadEspecificaD3"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaD3}
                                            />
                                        </div>

                                        <div className="col-1">


                                            {/* <DatePicker
                                                selected={formData.fechaInicioD3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioD3: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioD3"
                                                onChange={handleChange}
                                                value={formData.fechaInicioD3}
                                            />

                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinD3"
                                                onChange={handleChange}
                                                value={formData.fechaFinD3}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinD3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinD3: date
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
                                                name="nombreEvidenciaD3"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaD3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoD3"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoD3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoD3"
                                                value={formData.itemPresupuestoD3}
                                                onChange={handleChange}
                                                name="itemPresupuestoD3"
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
                                                name="nombreResponsableActividadD3"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadD3}
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
                                                name="actividadEspecificaD4"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaD4}
                                            />
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioD4"
                                                onChange={handleChange}
                                                value={formData.fechaInicioD4}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaInicioD4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioD4: date
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
                                                name="fechaFinD4"
                                                onChange={handleChange}
                                                value={formData.fechaFinD4}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinD4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinD4: date
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
                                                name="nombreEvidenciaD4"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaD4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoD4"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoD4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoD4"
                                                value={formData.itemPresupuestoD4}
                                                onChange={handleChange}
                                                name="itemPresupuestoD4"
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
                                                name="nombreResponsableActividadD4"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadD4}
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
                                                name="actividadEspecificaD5"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaD5}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioD5"
                                                onChange={handleChange}
                                                value={formData.fechaInicioD5}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioD5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioD5: date
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
                                                name="fechaFinD5"
                                                onChange={handleChange}
                                                value={formData.fechaFinD5}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaFinD5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinD5: date
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
                                                name="nombreEvidenciaD5"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaD5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoD5"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoD5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoD5"
                                                value={formData.itemPresupuestoD5}
                                                onChange={handleChange}
                                                name="itemPresupuestoD5"
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
                                                name="nombreResponsableActividadD5"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadD5}
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

