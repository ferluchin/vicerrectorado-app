import React, { useState, useEffect, useRef, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";

import "./admin.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    query,
    where,
    //updateDoc,
    setDoc,
    increment,
} from "firebase/firestore";

import {
    getDatabase,
    ref,
    child,
    get,
    push,
    update,
} from "firebase/database";

import Table from "../../components/table/Table";
import TableFirebase from "../../components/tableFirebase/TableFirebase";
import TableInformacionGeneral from "../../components/tableInformacionGeneral/TableInformacionGeneral";
import TableTipoProyecto from "../../components/tableTipoProyecto/TableTipoProyecto";
import TablePersonalInterno from "../../components/tablePersonalInterno/TablePersonalInterno";
import TableInformacionTecnicaProyecto from "../../components/tableInformacionTecnicaProyecto/TableInformacionTecnicaProyecto";
import TableMetodologiaProyecto from "../../components/tableMetodologiaProyecto/TableMetodologiaProyecto";
import TableResumenPresupuesto from "../../components/tableResumenPresupuesto/TableResumenPresupuesto";
import TableListadoProyectos from "../../components/tableListadoProyectos/TableListadoProyectos";
import { setGlobalState, useGlobalState } from "../../Helper/Context";
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom'
import { app, auth } from "../../firebase";
import { firebase } from 'firebase/app';


const firestore = getFirestore(app);
const db = getFirestore();



const Admin = () => {

    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email

    const dbRef = ref(getDatabase());

    const [globalContador, setGlobalContador] = useGlobalState("contador");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");

    const navigate = useNavigate();


    const editarInformacionGeneral = () => {
        // <Link to="/home" >
        //     Informacion General
        // </Link >
        navigate("/home")
    }


    async function getData() {
        try {
            //const value = 3
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });

            //const increment = firestore.FieldValue.increment(1);
            let aux
            return aux = updateDoc(docuRef, {
                //contador: 500,
                ["contador"]: increment(1),
                //["auxiliar"]: ["contador"],
                
                //auxiliar: doc.data().contador,
                
                //grupoInvestigacion: doc.data().informacionGeneral.grupoInvestigacion,
            }, 
                //, { merge: true }
            ) 
            //console.log("🚀 ~ file: Admin.js ~ line 64 ~ Admin ~ getData ~ docuRef")
            console.log(aux)
        } catch (error) {
            console.log("error", error)
        }
        

        setGlobalAuxiliar()
        const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
        //
        
        const contadorQuery = query(collection(db, "proyectos-investigacion"), where("contador", ">=", 0));
        
        //const contador = doc(firestore, `proyectos-investigacion/${correoUsuario}`)

     
        
        const querySnapshot = await getDocs(contadorQuery);
        //let auxiliar
        let valueContador

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            if (correoUsuario === doc.id) {
                //try {
                //console.log(doc.id, " => ", doc.data().contador);
                try {
                    
                    //auxiliar: doc.data().contador

                    updateDoc(docuRef, {
                        //contador: 500,
                        auxiliar: [globalAuxiliar]
                        //auxiliar: doc.data().contador,
                        

                        //grupoInvestigacion: doc.data().informacionGeneral.grupoInvestigacion,
                    })
                }
                catch (e) {

                    console.log(e);
                }
            }
            });
        console.log(globalAuxiliar)
        //console.log(querySnapshot)
    }

    const consolaDatosContador = () => {

        getData()

        //alert("🚀 ~ file: Admin.js ~ line 58 ~ Admin ~ consolaDatosContador")

        //navigate("/home")
    }

    const [globalInformacionGeneral, setGlobalInformacionGeneral] = useGlobalState("informacionGeneral");
    const [globalAreasConocimiento, setGlobalAreasConocimiento] = useGlobalState("areasConocimiento");
    const [globalTipoProyecto, setGlobalTipoProyecto] = useGlobalState("tipoProyecto");
    const [globalPersonalInterno, setGlobalPersonalInterno] = useGlobalState("personalInterno");
    const [globalPersonalExternoContratar, setGlobalPersonalExternoContratar] = useGlobalState("personalExternoContratar");
    const [globalPersonalExternoCooperante, setGlobalPersonalExternoCooperante] = useGlobalState("personalExternoCooperante");
    const [globalInformacionTecnicaProyecto, setGlobalInformacionTecnicaProyecto] = useGlobalState("informacionTecnicaProyecto");
    const [globalMetodologiaProyecto, setGlobalMetodologiaProyecto] = useGlobalState("metodologiaProyecto");
    //const [globalCronogramaActividades, setGlobalCronogramaActividades] = useGlobalState("cronogramaActividades");
    const [globalCronogramaEspA, setGlobalCronogramaEspA] = useGlobalState("cronogramaEspA");
    const [globalCronogramaEspB, setGlobBlCronogramaEspB] = useGlobalState("cronogramaEspB");
    const [globalCronogramaEspC, setGlobalCronogramaEspC] = useGlobalState("cronogramaEspC");
    const [globalCronogramaEspD, setGlobalCronogramaEspD] = useGlobalState("cronogramaEspD");
    const [globalCronogramaEspE, setGlobalCronogramaEspE] = useGlobalState("cronogramaEspE");
    const [globalResumenPresupuesto, setGlobalResumenPresupuesto] = useGlobalState("resumenPresupuesto");


    const handleGlobalChange = () => {
        //setGlobalState("isLoggedIn", true);
        //() => update(() => true);

        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 100 ~ handleGlobalChange ~ row", row)
        console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 135 ~ handleGlobalChange ~ globalInformacionGeneral", globalInformacionGeneral)
        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 100 ~ handleGlobalChange ~ row", row)
        //update(() => !value)



        //setGlobalInformacionGeneral((p) => ({ ...p, newFormData }));
        setGlobalInformacionGeneral(prevFormDataInformacionGeneral => {
            return {
                ...prevFormDataInformacionGeneral,
                id: "",
                titulo: "",
                facultad: "",
                departamento: "",
                grupoInvestigacion: "",

                dominioAcademico: "",
                lineaInvestigacion: "",
                programaInvestigacion: "",

                //fechaInicio: fechaInicio,
                //fechaFin: fechaFin,
                fechaInicio: "",
                fechaFin: "",
                duracionProyectoSemanas: "",

                alcanceTerritorial: "",

                // Datos del Director del Proyecto
                nombreDirectorProyecto: "",
                identificacionDirectorProyecto: "",
                telefonoDirectorProyecto: "",
                correoInstitucional: "",

            }
        })


        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 51 ~ handleGlobalChange ~ titulo", titulo)

        setGlobalAreasConocimiento(prevFormData => {
            return {
                ...prevFormData,

                //Areas del conocimiento de acuerdo a organismos internacionales
                actividadCientifica: "",
                objetivoSocioEconomico: "",
                areaTematicaID: "",
                objetivosPlanCreacionOportunidades: "",

                //Clasificacion internacional Normalizada de la educación
                campoAmplio: "",
                campoEspecifico: "",
                campoDetallado: "",
                objetivosDesarrolloSostenible: "",
            }
        })


        setGlobalTipoProyecto(prevFormDataTipoProyecto => {
            return {
                ...prevFormDataTipoProyecto,
                aporteContraparte: "",
                aporteUTPL: "",
                organismoEntidadFinanciador: "",
                presupuestoTotal: "",
                tipoFinanciamiento: "",
                tipoInvestigacion: "",
                tipoProyecto: "",

            }
        })

        //Personal Interno
        setGlobalPersonalInterno(prevFormDataPersonalInterno => {
            return {
                ...prevFormDataPersonalInterno,
                //idPersonalInterno: idPersonalInterno,
                rolPersonalInterno1: "",
                rolPersonalInterno2: "",
                rolPersonalInterno3: "",
                rolPersonalInterno4: "",
                rolPersonalInterno5: "",

                tipoPersonalInterno1: "",
                tipoPersonalInterno2: "",
                tipoPersonalInterno3: "",
                tipoPersonalInterno4: "",
                tipoPersonalInterno5: "",

                senescyt1: "",
                senescyt2: "",
                senescyt3: "",
                senescyt4: "",
                senescyt5: "",

                identificacionPersonalInterno1: "",
                identificacionPersonalInterno2: "",
                identificacionPersonalInterno3: "",
                identificacionPersonalInterno4: "",
                identificacionPersonalInterno5: "",

                nombrePersonalInterno1: "",
                nombrePersonalInterno2: "",
                nombrePersonalInterno3: "",
                nombrePersonalInterno4: "",
                nombrePersonalInterno5: "",

                horasSemanalesPersonalInterno1: "",
                horasSemanalesPersonalInterno2: "",
                horasSemanalesPersonalInterno3: "",
                horasSemanalesPersonalInterno4: "",
                horasSemanalesPersonalInterno5: "",

                horasTotalesPersonalInterno1: "",
                horasTotalesPersonalInterno2: "",
                horasTotalesPersonalInterno3: "",
                horasTotalesPersonalInterno4: "",
                horasTotalesPersonalInterno5: "",
            }
        })

        //Personal Externo Cooperante
        setGlobalPersonalExternoCooperante(prevFormDataPersonalExternoCooperante => {
            return {
                ...prevFormDataPersonalExternoCooperante,
                //idPersonalExternoCooperante: idPersonalExternoCooperante,
                rolPersonalCooperante1: "",
                rolPersonalCooperante2: "",
                rolPersonalCooperante3: "",
                rolPersonalCooperante4: "",
                rolPersonalCooperante5: "",

                nombrePersonalCooperante1: "",
                nombrePersonalCooperante2: "",
                nombrePersonalCooperante3: "",
                nombrePersonalCooperante4: "",
                nombrePersonalCooperante5: "",

                entidadPersonalCooperante1: "",
                entidadPersonalCooperante2: "",
                entidadPersonalCooperante3: "",
                entidadPersonalCooperante4: "",
                entidadPersonalCooperante5: "",
            }
        })
        //Personal Externo Contratar   
        setGlobalPersonalExternoContratar(prevFormDataPersonalExternoContratar => {
            return {
                ...prevFormDataPersonalExternoContratar,
                //idPersonalExternoContratar: idPersonalExternoContratar,
                //PERSONAL EXTERNO CONTRATAR
                perfilRequerido1: "",
                perfilRequerido2: "",
                perfilRequerido3: "",
                perfilRequerido4: "",
                perfilRequerido5: "",

                funcion1: "",
                funcion2: "",
                funcion3: "",
                funcion4: "",
                funcion5: "",

                actividadesDesarrollar1: "",
                actividadesDesarrollar2: "",
                actividadesDesarrollar3: "",
                actividadesDesarrollar4: "",
                actividadesDesarrollar5: "",

                tiempoContratacion1: "",
                tiempoContratacion2: "",
                tiempoContratacion3: "",
                tiempoContratacion4: "",
                tiempoContratacion5: "",

                personasContratar1: "",
                personasContratar2: "",
                personasContratar3: "",
                personasContratar4: "",
                personasContratar5: "",
            }
        })

        //Informacion Tecnica del Proyecto
        setGlobalInformacionTecnicaProyecto(prevFormDataInformacionTecnicaProyecto => {
            return {
                ...prevFormDataInformacionTecnicaProyecto,

                introduccionAntecedentes: "",
                introduccionJustificacion: "",
                // PRINCIPALES EQUIPOS
                equipoProyecto1: "",
                equipoProyecto2: "",
                equipoProyecto3: "",

                ubicacionEquipo1: "",
                ubicacionEquipo2: "",
                ubicacionEquipo3: "",

                objetivoGeneral: "",
                palabraClave1: "",
                palabraClave2: "",
                palabraClave3: "",
                palabraClave4: "",
                resumenProyecto: "",

            }
        })

        //CronogramaEspA

        setGlobalCronogramaEspA(prevFormDataCronogramaEspA => {
            return {
                ...prevFormDataCronogramaEspA,

                actividadEspecifica1: "",
                actividadEspecifica2: "",
                actividadEspecifica3: "",
                actividadEspecifica4: "",
                actividadEspecifica5: "",

                fechaInicio1: "",
                fechaInicio2: "",
                fechaInicio3: "",
                fechaInicio4: "",
                fechaInicio5: "",

                fechaFin1: "",
                fechaFin2: "",
                fechaFin3: "",
                fechaFin4: "",
                fechaFin5: "",

                itemPresupuesto1: "",
                itemPresupuesto2: "",
                itemPresupuesto3: "",
                itemPresupuesto4: "",
                itemPresupuesto5: "",

                nombreEvidencia1: "",
                nombreEvidencia2: "",
                nombreEvidencia3: "",
                nombreEvidencia4: "",
                nombreEvidencia5: "",

                nombreResponsableActividad1: "",
                nombreResponsableActividad2: "",
                nombreResponsableActividad3: "",
                nombreResponsableActividad4: "",
                nombreResponsableActividad5: "",

                objetivoEspecificoCronograma1: "",

                valorPresupuesto1: "",
                valorPresupuesto2: "",
                valorPresupuesto3: "",
                valorPresupuesto4: "",
                valorPresupuesto5: "",
            }
        })

        setGlobalMetodologiaProyecto(prevFormDataMetodologiaProyecto => {
            return {
                ...prevFormDataMetodologiaProyecto,
                articuloCientifico: "",
                aspectosBioeticos: "",
                descripcionActividadID: "",
                impactoCientifico: "",
                impactoEconomico: "",
                impactoPolitico: "",
                impactoSocial: "",
                metodologia: "",
                otroImpacto: "",
                otrosTransferenciaConocimiento: "",
                prototipo: "",
                registroPropiedadIndustrial: "",
            }
        })


        setGlobalResumenPresupuesto(prevFormData => {
            return {
                ...prevFormData,

                bibliografia: "",
                capacitacion: "",
                equipos: "",
                honorarios: "",
                materialesSuministrosReactivos: "",
                observaciones: "",
                totalGastosDirectos: "",
                viaticosSubsistenciasMovilizacion: "",

            }
        })
        console.log()

        /*
        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                contador: {
                    ...contador + 1
                }
            }
                //, { merge: true }
            )
    
    
        } catch (error) {
            console.log(error)
        }
    
        */
        //console.log(formData)
        //console.log({ ...formData })
        //setFormData({ ...formInicial })



        //console.log(value);

        //navigate("/home");
    }

    const editarTipoProyecto = () => {
        navigate("/tipo-proyecto")
    }

    const crearNuevoProyecto = () => {

        getData()
        handleGlobalChange()
        
        navigate("/home")
    }

    return (
        <div className="admin">
            <AdminSidebar />
            <div className="adminContainer">
                <AdminNavbar />


                {/*         
        <div className="widgets">
            <Widget type="user" />
            <Widget type="product" />
            <Widget type="order" />
            <Widget type="earning" />
        </div>
 */}

                {/* 
        <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> 
        */}

                {/* <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros
                    </div>
                    <Table />
                </div> */}




                {/* <div className="listContainer">
                    <div className="listTitle">
                        Datos Información General
                    </div>
                    <TableInformacionGeneral />
                    <button
                        className="btn btn-primary"
                        onClick={() => editarInformacionGeneral()}
                    >
                        Editar Sección
                    </button>
                </div> */}
                <br />
                <h2>Proyectos de Investigación</h2>
                <hr />

                <h3>Convocatoria 2022</h3>


                <hr />

                {/* <div className="listContainer">
                    <div className="listTitle">
                        <div className="container">
                            Datos Personales
                        </div>

                    </div>
                    <TableListadoProyectos />


                </div> */}

                <div className="listContainer">
                    <div className="listTitle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    Listado de Proyectos de Investigación
                                </div>
                                <div className="col-md-1">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => consolaDatosContador()}
                                    >
                                        Consola
                                    </button>
                                </div>

                                <div className="col-md-1">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => crearNuevoProyecto()}
                                    >
                                        Nuevo +
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <TableListadoProyectos />

                    {/* <button
                        className="btn btn-primary"
                        onClick={() => editarTipoProyecto()}
                    >
                        Editar Sección
                    </button> */}


                </div>
                {/*                 
                
                <div className="listContainer">
                    <div className="listTitle">
                        Personal Interno
                    </div>
                    <TablePersonalInterno />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                */}



                {/* 
                <div className="listContainer">
                    <div className="listTitle">
                        Personal Externo Cooperante
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Personal Externo a Contratar
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>
            */}

                {/* 
                <div className="listContainer">
                    <div className="listTitle">
                        Información Técnica del Proyecto
                    </div>
                    <TableInformacionTecnicaProyecto />
                    <button className="btn btn-primary">Editar Sección</button>


                </div> 
                */}
                {/* 
                <div className="listContainer">
                    <div className="listTitle">
                        Metodología del Proyecto
                    </div>
                    <TableMetodologiaProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div> 
                */}


                {/* 
                <div className="listContainer">
                    <div className="listTitle">
                        Resumen del Presupuesto
                    </div>
                    <TableResumenPresupuesto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div> 
                */}


                {/*


                <div className="listContainer">
                    <div className="listTitle">
                        Cronograma de Actividades
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Resumen del Presupuesto
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>
                
                */}
                {/*                 
                <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros Firebase
                    </div>
                    <TableFirebase />
                </div> */}

            </div>
        </div>
    );
};

export default Admin;
