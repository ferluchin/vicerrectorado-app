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
import './cronogramaEspA.scss';
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
        objetivoEspecificoCronograma1: "",
        resultadoObjetivoEspecificoCronograma1: "",
        //Actividades
        actividadEspecifica1: "",
        actividadEspecifica2: "",
        actividadEspecifica3: "",
        actividadEspecifica4: "",
        actividadEspecifica5: "",

        //Fecha Inicio
        fechaInicio1: "",
        fechaInicio2: "",
        fechaInicio3: "",
        fechaInicio4: "",
        fechaInicio5: "",

        //Fecha Fin 
        fechaFin1: "",
        fechaFin2: "",
        fechaFin3: "",
        fechaFin4: "",
        fechaFin5: "",

        //Nombrre Evidencia / Medio de Verificación
        nombreEvidencia1: "",
        nombreEvidencia2: "",
        nombreEvidencia3: "",
        nombreEvidencia4: "",
        nombreEvidencia5: "",

        //Valor de Presupuesto
        valorPresupuesto1: "",
        valorPresupuesto2: "",
        valorPresupuesto3: "",
        valorPresupuesto4: "",
        valorPresupuesto5: "",

        //Item de Presupuesto
        itemPresupuesto1: "",
        itemPresupuesto2: "",
        itemPresupuesto3: "",
        itemPresupuesto4: "",
        itemPresupuesto5: "",

        //Nombre Responsable Actividad
        nombreResponsableActividad1: "",
        nombreResponsableActividad2: "",
        nombreResponsableActividad3: "",
        nombreResponsableActividad4: "",
        nombreResponsableActividad5: "",

    }


    const [globalCronogramaEspA, setGlobalCronogramaEspA] = useGlobalState("cronogramaEspA");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalCronogramaEspA } ? { ...globalCronogramaEspA } : { ...formInicial })
    //const [formData, setFormData] = useState({ ...formInicial })

    async function  getAux(){
        var docRef = doc(db, `proyectos-investigacion/${correoUsuario}`);
        //var docRef = collection(db, "proyectos-investigacion", `${correoUsuario}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().contador);
            setGlobalAuxiliar(docSnap.data().contador)
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


            // formData.fechaInicio1 = (formData.fechaInicio1).toISOString().split('T')
            // formData.fechaFin1 = (formData.fechaFin1).toISOString().split('T')
            // formData.fechaInicio2 = (formData.fechaInicio2).toISOString().split('T')
            // formData.fechaFin2 = (formData.fechaFin2).toISOString().split('T')
            // formData.fechaInicio3 = (formData.fechaInicio3).toISOString().split('T')
            // formData.fechaFin3 = (formData.fechaFin3).toISOString().split('T')
            // formData.fechaInicio4 = (formData.fechaInicio4).toISOString().split('T')
            // formData.fechaFin4 = (formData.fechaFin4).toISOString().split('T')
            // formData.fechaInicio5 = (formData.fechaInicio5).toISOString().split('T')
            // formData.fechaFin5 = (formData.fechaFin5).toISOString().split('T')

            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                ["cronogramaEspA"+globalAuxiliar]: {
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
        <div className='cronograma-esp-a'>
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
                                            <h4> Objetivo <br />Específico 1 </h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.objetivoEspecificoCronograma1}
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
                                            <h4> Resultado objetivo específico 1</h4>

                                        </div>
                                        <div className="col-9">
                                            <textarea
                                                value={formData.resultadoObjetivoEspecificoCronograma1}
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
                                                name="actividadEspecifica1"
                                                onChange={handleChange}
                                                value={formData.actividadEspecifica1}
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
                                                name="fechaInicio1"
                                                onChange={handleChange}
                                                value={formData.fechaInicio1}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFin1"
                                                onChange={handleChange}
                                                value={formData.fechaFin1}
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
                                                name="nombreEvidencia1"
                                                onChange={handleChange}
                                                value={formData.nombreEvidencia1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuesto1"
                                                onChange={handleChange}
                                                value={formData.valorPresupuesto1}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuesto1"
                                                value={formData.itemPresupuesto1}
                                                onChange={handleChange}
                                                name="itemPresupuesto1"
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
                                                name="nombreResponsableActividad1"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividad1}
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
                                                name="actividadEspecifica2"
                                                onChange={handleChange}
                                                value={formData.actividadEspecifica2}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicio2"
                                                onChange={handleChange}
                                                value={formData.fechaInicio2}
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
                                                name="fechaFin2"
                                                onChange={handleChange}
                                                value={formData.fechaFin2}
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
                                                name="nombreEvidencia2"
                                                onChange={handleChange}
                                                value={formData.nombreEvidencia2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuesto2"
                                                onChange={handleChange}
                                                value={formData.valorPresupuesto2}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuesto2"
                                                value={formData.itemPresupuesto2}
                                                onChange={handleChange}
                                                name="itemPresupuesto2"
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
                                                name="nombreResponsableActividad2"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividad2}
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
                                                value={formData.actividadEspecifica3}
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
                                                name="fechaInicio3"
                                                onChange={handleChange}
                                                value={formData.fechaInicio3}
                                            />

                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaFin3"
                                                onChange={handleChange}
                                                value={formData.fechaFin3}
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
                                                name="nombreEvidencia3"
                                                onChange={handleChange}
                                                value={formData.nombreEvidencia3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuesto3"
                                                onChange={handleChange}
                                                value={formData.valorPresupuesto3}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuesto3"
                                                value={formData.itemPresupuesto3}
                                                onChange={handleChange}
                                                name="itemPresupuesto3"
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
                                                name="nombreResponsableActividad3"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividad3}
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
                                                name="actividadEspecifica4"
                                                onChange={handleChange}
                                                value={formData.actividadEspecifica4}
                                            />
                                        </div>
                                        <div className="col-1">

                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicio4"
                                                onChange={handleChange}
                                                value={formData.fechaInicio4}
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
                                                name="fechaFin4"
                                                onChange={handleChange}
                                                value={formData.fechaFin4}
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
                                                name="nombreEvidencia4"
                                                onChange={handleChange}
                                                value={formData.nombreEvidencia4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuesto4"
                                                onChange={handleChange}
                                                value={formData.valorPresupuesto4}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuesto4"
                                                value={formData.itemPresupuesto4}
                                                onChange={handleChange}
                                                name="itemPresupuesto4"
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
                                                name="nombreResponsableActividad4"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividad4}
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
                                                name="actividadEspecifica5"
                                                onChange={handleChange}
                                                value={formData.actividadEspecifica5}
                                            />
                                        </div>
                                        <div className="col-1">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="fechaInicio5"
                                                onChange={handleChange}
                                                value={formData.fechaInicio5}
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
                                                name="fechaFin5"
                                                onChange={handleChange}
                                                value={formData.fechaFin5}
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
                                                name="nombreEvidencia5"
                                                onChange={handleChange}
                                                value={formData.nombreEvidencia5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="valorPresupuesto5"
                                                onChange={handleChange}
                                                value={formData.valorPresupuesto5}
                                            />
                                        </div>
                                        <div className="col-2">
                                            <select
                                                id="itemPresupuesto5"
                                                value={formData.itemPresupuesto5}
                                                onChange={handleChange}
                                                name="itemPresupuesto5"
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
                                                name="nombreResponsableActividad5"
                                                onChange={handleChange}
                                                value={formData.nombreResponsableActividad5}
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

