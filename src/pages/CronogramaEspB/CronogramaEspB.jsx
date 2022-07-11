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
import './cronogramaEspB.scss';
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

export default function CronogramaEspB() {
    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        //let path = `/areas-conocimiento`;
        
        //CAMBIAR
        let path = `/resumen-presupuesto`;
        navigate(path);
    }

    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email
    const formInicial = {
        //CRONOGRAMA DE ACTIVIDADES
        //objetivoGeneral: "",
        objetivoEspecificoCronograma2: "",
        resultadoObjetivoEspecificoCronograma2: "",
        //Actividades
        actividadEspecificaB1: "",
        actividadEspecificaB2: "",
        actividadEspecificaB3: "",
        actividadEspecificaB4: "",
        actividadEspecificaB5: "",

        //Fecha Inicio
        fechaInicioB1: "",
        fechaInicioB2: "",
        fechaInicioB3: "",
        fechaInicioB4: "",
        fechaInicioB5: "",

        //Fecha Fin 
        fechaFinB1: "",
        fechaFinB2: "",
        fechaFinB3: "",
        fechaFinB4: "",
        fechaFinB5: "",

        //Nombrre Evidencia / Medio de Verificación
        nombreEvidenciaB1: "",
        nombreEvidenciaB2: "",
        nombreEvidenciaB3: "",
        nombreEvidenciaB4: "",
        nombreEvidenciaB5: "",

        //Valor de Presupuesto
        valorPresupuestoB1: "",
        valorPresupuestoB2: "",
        valorPresupuestoB3: "",
        valorPresupuestoB4: "",
        valorPresupuestoB5: "",

        //Item de Presupuesto
        itemPresupuestoB1: "",
        itemPresupuestoB2: "",
        itemPresupuestoB3: "",
        itemPresupuestoB4: "",
        itemPresupuestoB5: "",

        //Nombre Responsable Actividad
        nombreResponsableActividadB1: "",
        nombreResponsableActividadB2: "",
        nombreResponsableActividadB3: "",
        nombreResponsableActividadB4: "",
        nombreResponsableActividadB5: "",

    }


    const [globalCronogramaEspB, setGlobalCronogramaEspA] = useGlobalState("cronogramaEspB");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalCronogramaEspB } ? { ...globalCronogramaEspB } : { ...formInicial })
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
                ["cronogramaEspB" + globalAuxiliar]: {
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
        setGlobalCronogramaEspA({ ...formData })

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
        <div className='cronograma-esp-b'>
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
                                            <h4> Objetivo <br />Específico 2 </h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.objetivoEspecificoCronograma2}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="objetivoEspecificoCronograma1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Resultado objetivo específico 2</h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.resultadoObjetivoEspecificoCronograma2}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="resultadoObjetivoEspecificoCronograma1"
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
                                                name="actividadEspecificaB1"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaB1}
                                            />
                                        </div>
                                        <div className="col-1">



                                            {/* <DatePicker
                                                selected={formData.fechaInicio1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicio1: date
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
                                                name="fechaInicioB1"
                                                onChange={handleChange}
                                                value={formData.fechaInicioB1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinB1"
                                                onChange={handleChange}
                                                value={formData.fechaFinB1}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFin1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFin1: date
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
                                                name="nombreEvidenciaB1"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaB1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoB1"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoB1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoB1"
                                                value={formData.itemPresupuestoB1}
                                                onChange={handleChange}
                                                name="itemPresupuestoB1"
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
                                                name="nombreResponsableActividadB1"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadB1}
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
                                                name="actividadEspecificaB2"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaB2}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioB2"
                                                onChange={handleChange}
                                                value={formData.fechaInicioB2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicio2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicio2: date
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
                                                name="fechaFinB2"
                                                onChange={handleChange}
                                                value={formData.fechaFinB2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFin2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFin2: date
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
                                                name="nombreEvidenciaB2"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaB2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoB2"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoB2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoB2"
                                                value={formData.itemPresupuestoB2}
                                                onChange={handleChange}
                                                name="itemPresupuestoB2"
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
                                                name="nombreResponsableActividadB2"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadB2}
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
                                                name="actividadEspecificaB3"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaB3}
                                            />
                                        </div>

                                        <div className="col-1">


                                            {/* <DatePicker
                                                selected={formData.fechaInicio3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicio3: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioB3"
                                                onChange={handleChange}
                                                value={formData.fechaInicioB3}
                                            />

                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinB3"
                                                onChange={handleChange}
                                                value={formData.fechaFinB3}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFin3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFin3: date
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
                                                name="nombreEvidenciaB3"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaB3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoB3"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoB3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoB3"
                                                value={formData.itemPresupuestoB3}
                                                onChange={handleChange}
                                                name="itemPresupuestoB3"
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
                                                name="nombreResponsableActividadB3"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadB3}
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
                                                name="actividadEspecificaB4"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaB4}
                                            />
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioB4"
                                                onChange={handleChange}
                                                value={formData.fechaInicioB4}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaInicio4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicio4: date
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
                                                name="fechaFinB4"
                                                onChange={handleChange}
                                                value={formData.fechaFinB4}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFin4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFin4: date
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
                                                name="nombreEvidenciaB4"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaB4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoB4"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoB4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoB4"
                                                value={formData.itemPresupuestoB4}
                                                onChange={handleChange}
                                                name="itemPresupuestoB4"
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
                                                name="nombreResponsableActividadB4"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadB4}
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
                                                name="actividadEspecificaB5"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaB5}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioB5"
                                                onChange={handleChange}
                                                value={formData.fechaInicioB5}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicio5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicio5: date
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
                                                name="fechaFinB5"
                                                onChange={handleChange}
                                                value={formData.fechaFinB5}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaFin5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFin5: date
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
                                                name="nombreEvidenciaB5"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaB5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoB5"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoB5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoB5"
                                                value={formData.itemPresupuestoB5}
                                                onChange={handleChange}
                                                name="itemPresupuestoB5"
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
                                                name="nombreResponsableActividadB5"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadB5}
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

