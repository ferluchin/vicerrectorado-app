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
import './cronogramaEspC.scss';
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
        objetivoEspecificoCronograma3: "",
        resultadoObjetivoEspecificoCronograma3: "",
        //Actividades
        actividadEspecificaC1: "",
        actividadEspecificaC2: "",
        actividadEspecificaC3: "",
        actividadEspecificaC4: "",
        actividadEspecificaC5: "",

        //Fecha Inicio
        fechaInicioC1: "",
        fechaInicioC2: "",
        fechaInicioC3: "",
        fechaInicioC4: "",
        fechaInicioC5: "",

        //Fecha Fin 
        fechaFinC1: "",
        fechaFinC2: "",
        fechaFinC3: "",
        fechaFinC4: "",
        fechaFinC5: "",

        //Nombrre Evidencia / Medio de Verificación
        nombreEvidenciaC1: "",
        nombreEvidenciaC2: "",
        nombreEvidenciaC3: "",
        nombreEvidenciaC4: "",
        nombreEvidenciaC5: "",

        //Valor de Presupuesto
        valorPresupuestoC1: "",
        valorPresupuestoC2: "",
        valorPresupuestoC3: "",
        valorPresupuestoC4: "",
        valorPresupuestoC5: "",

        //Item de Presupuesto
        itemPresupuestoC1: "",
        itemPresupuestoC2: "",
        itemPresupuestoC3: "",
        itemPresupuestoC4: "",
        itemPresupuestoC5: "",

        //Nombre Responsable Actividad
        nombreResponsableActividadC1: "",
        nombreResponsableActividadC2: "",
        nombreResponsableActividadC3: "",
        nombreResponsableActividadC4: "",
        nombreResponsableActividadC5: "",

    }


    const [globalCronogramaEspC, setGlobalCronogramaEspC] = useGlobalState("cronogramaEspC");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalCronogramaEspC } ? { ...globalCronogramaEspC } : { ...formInicial })
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
            // formData.fechaInicioC1 = (formData.fechaInicioC1).toISOString().split('T')
            // formData.fechaFinC1 = (formData.fechaFinC1).toISOString().split('T')
            // formData.fechaInicioC2 = (formData.fechaInicioC2).toISOString().split('T')
            // formData.fechaFinC2 = (formData.fechaFinC2).toISOString().split('T')
            // formData.fechaInicioC3 = (formData.fechaInicioC3).toISOString().split('T')
            // formData.fechaFinC3 = (formData.fechaFinC3).toISOString().split('T')
            // formData.fechaInicioC4 = (formData.fechaInicioC4).toISOString().split('T')
            // formData.fechaFinC4 = (formData.fechaFinC4).toISOString().split('T')
            // formData.fechaInicioC5 = (formData.fechaInicioC5).toISOString().split('T')
            // formData.fechaFinC5 = (formData.fechaFinC5).toISOString().split('T')

            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                ["cronogramaEspC" + globalAuxiliar]: {
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
        setGlobalCronogramaEspC({ ...formData })

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
        <div className='cronograma-esp-c'>
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

                                {/* <div className="container">
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
                                </div> */}
                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Objetivo <br />Específico 3 </h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.objetivoEspecificoCronograma3}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="objetivoEspecificoCronograma3"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h4> Resultado objetivo específico 3</h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.resultadoObjetivoEspecificoCronograma3}
                                                placeholder="Escribir texto"
                                                onChange={handleChange}
                                                name="resultadoObjetivoEspecificoCronograma3"
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
                                                name="actividadEspecificaC1"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaC1}
                                            />
                                        </div>
                                        <div className="col-1">



                                            {/* <DatePicker
                                                selected={formData.fechaInicioC1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioC1: date
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
                                                name="fechaInicioC1"
                                                onChange={handleChange}
                                                value={formData.fechaInicioC1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinC1"
                                                onChange={handleChange}
                                                value={formData.fechaFinC1}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinC1}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinC1: date
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
                                                name="nombreEvidenciaC1"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaC1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoC1"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoC1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoC1"
                                                value={formData.itemPresupuestoC1}
                                                onChange={handleChange}
                                                name="itemPresupuestoC1"
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
                                                name="nombreResponsableActividadC1"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadC1}
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
                                                name="actividadEspecificaC2"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaC2}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioC2"
                                                onChange={handleChange}
                                                value={formData.fechaInicioC2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioC2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioC2: date
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
                                                name="fechaFinC2"
                                                onChange={handleChange}
                                                value={formData.fechaFinC2}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinC2}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinC2: date
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
                                                name="nombreEvidenciaC2"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaC2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoC2"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoC2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoC2"
                                                value={formData.itemPresupuestoC2}
                                                onChange={handleChange}
                                                name="itemPresupuestoC2"
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
                                                name="nombreResponsableActividadC2"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadC2}
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
                                                name="titulo"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaC3}
                                            />
                                        </div>

                                        <div className="col-1">


                                            {/* <DatePicker
                                                selected={formData.fechaInicioC3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioC3: date
                                                    })}
                                                className="form-control"

                                                minDate={new Date()}
                                            //isClearable
                                            /> */}

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioC3"
                                                onChange={handleChange}
                                                value={formData.fechaInicioC3}
                                            />

                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFinC3"
                                                onChange={handleChange}
                                                value={formData.fechaFinC3}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinC3}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinC3: date
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
                                                name="nombreEvidenciaC3"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaC3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoC3"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoC3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoC3"
                                                value={formData.itemPresupuestoC3}
                                                onChange={handleChange}
                                                name="itemPresupuestoC3"
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
                                                name="nombreResponsableActividadC3"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadC3}
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
                                                name="actividadEspecificaC4"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaC4}
                                            />
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioC4"
                                                onChange={handleChange}
                                                value={formData.fechaInicioC4}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaInicioC4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioC4: date
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
                                                name="fechaFinC4"
                                                onChange={handleChange}
                                                value={formData.fechaFinC4}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaFinC4}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinC4: date
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
                                                name="nombreEvidenciaC4"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaC4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoC4"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoC4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoC4"
                                                value={formData.itemPresupuestoC4}
                                                onChange={handleChange}
                                                name="itemPresupuestoC4"
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
                                                name="nombreResponsableActividadC4"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadC4}
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
                                                name="actividadEspecificaC5"
                                                onChange={handleChange}
                                                value={formData.actividadEspecificaC5}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicioC5"
                                                onChange={handleChange}
                                                value={formData.fechaInicioC5}
                                            />

                                            {/* <DatePicker
                                                selected={formData.fechaInicioC5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaInicioC5: date
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
                                                name="fechaFinC5"
                                                onChange={handleChange}
                                                value={formData.fechaFinC5}
                                            />
                                            {/* <DatePicker
                                                selected={formData.fechaFinC5}
                                                dateFormat="yyyy/MM/dd"
                                                onChange={date => setFormData(
                                                    {
                                                        ...formData,
                                                        fechaFinC5: date
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
                                                name="nombreEvidenciaC5"
                                                onChange={handleChange}
                                                value={formData.nombreEvidenciaC5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuestoC5"
                                                onChange={handleChange}
                                                value={formData.valorPresupuestoC5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuestoC5"
                                                value={formData.itemPresupuestoC5}
                                                onChange={handleChange}
                                                name="itemPresupuestoC5"
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
                                                name="nombreResponsableActividadC5"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividadC5}
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

