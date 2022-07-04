import "./tableListadoProyectos.scss";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { setGlobalState, useGlobalState } from "../../Helper/Context";

import 'bootstrap/dist/css/bootstrap.css';


import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    getFirestore
} from "firebase/firestore";
//import { async } from "@firebase/util";
import { app } from "../../firebase";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { ConstructionTwoTone } from "@mui/icons-material";

const db = getFirestore();

const List = () => {



    const navigate = useNavigate();

    const [value, update] = useGlobalState("isLoggedIn");
    const [globalInformacionGeneral, setGlobalInformacionGeneral] = useGlobalState("informacionGeneral");
    //tipo de proyecto 
    //P interno
    //P externo cooperante
    //P externo a contratar
    //informacion tecnica
    //metodologia del proyecto
    //cronograma de activiades
    //resumen del presupuesto
    const [globalAreasConocimiento, setGlobalAreasConocimiento] = useGlobalState("areasConocimiento");
    const [globalTipoProyecto, setGlobalTipoProyecto] = useGlobalState("tipoProyecto");
    const [globalPersonalInterno, setGlobalPersonalInterno] = useGlobalState("personalInterno");
    const [globalPersonalExternoContratar, setGlobalPersonalExternoContratar] = useGlobalState("personalExternoContratar");
    const [globalPersonalExternoCooperante, setGlobalPersonalExternoCooperante] = useGlobalState("personalExternoCooperante");
    const [globalInformacionTecnicaProyecto, setGlobalInformacionTecnicaProyecto] = useGlobalState("informacionTecnicaProyecto");
    const [globalMetodologiaProyecto, setGlobalMetodologiaProyecto] = useGlobalState("metodologiaProyecto");
    const [globalCronogramaActividades, setGlobalCronogramaActividades] = useGlobalState("cronogramaActividades");
    const [globalResumenPresupuesto, setGlobalResumenPresupuesto] = useGlobalState("resumenPresupuesto");

    const handleGlobalChange = (row) => {
        //setGlobalState("isLoggedIn", true);
        //() => update(() => true);
        const {
            id,
            titulo,
            facultad,
            departamento,
            grupoInvestigacion,

            dominioAcademico,
            lineaInvestigacion,
            programaInvestigacion,

            fechaInicio,
            fechaFin,
            duracionProyectoSemanas,

            alcanceTerritorial,
            // Datos del Director del Proyecto 
            nombreDirectorProyecto,
            identificacionDirectorProyecto,
            telefonoDirectorProyecto,
            correoInstitucional,


            //ÁREAS DEL CONOCIMIENTO
            actividadCientifica,
            objetivoSocioEconomico,
            areaTematicaID,
            objetivosPlanCreacionOportunidades,
            campoAmplio,
            campoEspecifico,
            campoDetallado,
            objetivosDesarrolloSostenible,

            //TIPO DE PROYECTO
            aporteContraparte,
            aporteUTPL,
            organismoEntidadFinanciador,
            presupuestoTotal,
            tipoFinanciamiento,
            tipoInvestigacion,
            tipoProyecto,

            //INFORMACION TECNICA DEL PROYECTO - 13
            introduccionAntecedentes,
            introduccionJustificacion,
            objetivoEspecifico1,
            objetivoEspecifico2,
            objetivoEspecifico3,
            objetivoEspecifico4,
            objetivoEspecifico5,
            objetivoGeneral,
            palabraClave1,
            palabraClave2,
            palabraClave3,
            palabraClave4,
            resumenProyecto,

            //RESUMEN DEL PRESUPUESTO DESTRUCTURING
            bibliografia,
            capacitacion,
            equipos,
            honorarios,
            materialesSuministrosReactivos,
            observaciones,
            totalGastosDirectos,
            viaticosSubsistenciasMovilizacion,

        } = row;
        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 100 ~ handleGlobalChange ~ row", row)
        console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 135 ~ handleGlobalChange ~ globalInformacionGeneral", globalInformacionGeneral)
        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 100 ~ handleGlobalChange ~ row", row)
        //update(() => !value)



        //setGlobalInformacionGeneral((p) => ({ ...p, newFormData }));
        setGlobalInformacionGeneral(prevFormDataInformacionGeneral => {
            return {
                ...prevFormDataInformacionGeneral,
                id: id,
                titulo: titulo,
                facultad: facultad,
                departamento: departamento,
                grupoInvestigacion: grupoInvestigacion,

                dominioAcademico: dominioAcademico,
                lineaInvestigacion: lineaInvestigacion,
                programaInvestigacion: programaInvestigacion,

                //fechaInicio: fechaInicio,
                //fechaFin: fechaFin,
                fechaInicio: new Date(fechaInicio),
                fechaFin: new Date(fechaFin),
                duracionProyectoSemanas: duracionProyectoSemanas,

                alcanceTerritorial: alcanceTerritorial,

                // Datos del Director del Proyecto
                nombreDirectorProyecto: nombreDirectorProyecto,
                identificacionDirectorProyecto: identificacionDirectorProyecto,
                telefonoDirectorProyecto: telefonoDirectorProyecto,
                correoInstitucional: correoInstitucional,

            }
        })


        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 51 ~ handleGlobalChange ~ titulo", titulo)

        setGlobalAreasConocimiento(prevFormData => {
            return {
                ...prevFormData,

                //Areas del conocimiento de acuerdo a organismos internacionales
                actividadCientifica: actividadCientifica,
                objetivoSocioEconomico: objetivoSocioEconomico,
                areaTematicaID: areaTematicaID,
                objetivosPlanCreacionOportunidades: objetivosPlanCreacionOportunidades,

                //Clasificacion internacional Normalizada de la educación
                campoAmplio: campoAmplio,
                campoEspecifico: campoEspecifico,
                campoDetallado: campoDetallado,
                objetivosDesarrolloSostenible: objetivosDesarrolloSostenible,
            }
        })


        setGlobalTipoProyecto(prevFormDataTipoProyecto => {
            return {
                ...prevFormDataTipoProyecto,
                aporteContraparte: aporteContraparte,
                aporteUTPL: aporteUTPL,
                organismoEntidadFinanciador: organismoEntidadFinanciador,
                presupuestoTotal: presupuestoTotal,
                tipoFinanciamiento: tipoFinanciamiento,
                tipoInvestigacion: tipoInvestigacion,
                tipoProyecto: tipoProyecto,

            }
        })



        setGlobalInformacionTecnicaProyecto(prevFormDataInformacionTecnicaProyecto => {
            return {
                ...prevFormDataInformacionTecnicaProyecto,
                introduccionAntecedentes: introduccionAntecedentes,
                introduccionJustificacion: introduccionJustificacion,
                objetivoEspecifico1: objetivoEspecifico1,
                objetivoEspecifico2: objetivoEspecifico2,
                objetivoEspecifico3: objetivoEspecifico3,
                objetivoEspecifico4: objetivoEspecifico4,
                objetivoEspecifico5: objetivoEspecifico5,
                objetivoGeneral: objetivoGeneral,
                palabraClave1: palabraClave1,
                palabraClave2: palabraClave2,
                palabraClave3: palabraClave3,
                palabraClave4: palabraClave4,
                resumenProyecto: resumenProyecto,

            }
        })

        
        setGlobalResumenPresupuesto(prevFormData => {
            return {
                ...prevFormData,
                bibliografia: bibliografia,
                capacitacion: capacitacion,
                equipos: equipos,
                honorarios: honorarios,
                materialesSuministrosReactivos: materialesSuministrosReactivos,
                observaciones: observaciones,
                totalGastosDirectos: totalGastosDirectos,
                viaticosSubsistenciasMovilizacion: viaticosSubsistenciasMovilizacion,

            }
        })
        console.log(row)

        console.log(
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 249 ~ handleGlobalChange ~ setGlobalInformacionGeneral",
            globalInformacionGeneral)

        console.log(
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 253 ~ handleGlobalChange ~ setGlobalAreasConocimiento",
            globalAreasConocimiento)
        
        console.log(
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 257 ~ handleGlobalChange ~ setGlobalTipoProyecto",
            globalTipoProyecto)
        
        console.log(
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 261 ~ handleGlobalChange ~ setGlobalInformacionTecnicaProyecto",
            globalInformacionTecnicaProyecto)
        
        console.log(
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 265 ~ handleGlobalChange ~ setGlobalResumenPresupuesto",
            globalResumenPresupuesto)
        
        
        //console.log(value);
        navigate("/home");
    }

    const { currentUser } = useContext(AuthContext);
    //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 38 ~ List ~ currentUser", currentUser.email)

    const correoUsuario = currentUser.email
    const auth = getAuth();




    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);



    const [arrayProyectos, setArrayProyectos] = useState(null);

    const cambiarStatus = async (id, status) => {

    }
    //Recuperar el contenido de un solo documento
    async function getData() {
        var rows = [];
        var docRef = collection(db, `proyectos-investigacion/`);
        //var docRef = collection(db, "proyectos-investigacion", `${correoUsuario}`);

        const docSnap = await getDocs(docRef);
        //console.log(" ~ file: TableListadoProyectos.jsx ~ line 66 ~ getData ~ docSnap", docSnap)

        docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data().proyectos.equipos);
            //console.log(doc.id + " 🚀🚀🚀")

            if (doc.id === correoUsuario) {
                try {
                    rows.push({
                        id: doc.id,


                        //Información General del Proyecto
                        titulo: doc.data().informacionGeneral.titulo,
                        facultad: doc.data().informacionGeneral.facultad,
                        departamento: doc.data().informacionGeneral.departamento,
                        grupoInvestigacion: doc.data().informacionGeneral.grupoInvestigacion,

                        dominioAcademico: doc.data().informacionGeneral.dominioAcademico,
                        lineaInvestigacion: doc.data().informacionGeneral.lineaInvestigacion,
                        programaInvestigacion: doc.data().informacionGeneral.programaInvestigacion,

                        fechaInicio: doc.data().informacionGeneral.fechaInicio,
                        fechaFin: doc.data().informacionGeneral.fechaFin,
                        duracionProyectoSemanas: doc.data().informacionGeneral.duracionProyectoSemanas,

                        alcanceTerritorial: doc.data().informacionGeneral.alcanceTerritorial,

                        nombreDirectorProyecto: doc.data().informacionGeneral.nombreDirectorProyecto,
                        identificacionDirectorProyecto: doc.data().informacionGeneral.identificacionDirectorProyecto,
                        telefonoDirectorProyecto: doc.data().informacionGeneral.telefonoDirectorProyecto,
                        correoInstitucional: doc.data().informacionGeneral.correoInstitucional,

                        status: doc.data().informacionGeneral.status,

                        // Áreas del Conocimiento 
                        actividadCientifica: doc.data().areasConocimiento.actividadCientifica,
                        objetivoSocioEconomico: doc.data().areasConocimiento.objetivoSocioEconomico,
                        areaTematicaID: doc.data().areasConocimiento.areaTematicaID,

                        objetivosPlanCreacionOportunidades: doc.data().areasConocimiento.objetivosPlanCreacionOportunidades,

                        campoAmplio: doc.data().areasConocimiento.campoAmplio,
                        campoEspecifico: doc.data().areasConocimiento.campoEspecifico,
                        campoDetallado: doc.data().areasConocimiento.campoDetallado,

                        objetivosDesarrolloSostenible: doc.data().areasConocimiento.objetivosDesarrolloSostenible,


                        //Tipo de proyecto
                        tipoProyecto: doc.data().tipoProyecto.tipoProyecto,
                        tipoInvestigacion: doc.data().tipoProyecto.tipoInvestigacion,
                        tipoFinanciamiento: doc.data().tipoProyecto.tipoFinanciamiento,

                        organismoEntidadFinanciador: doc.data().tipoProyecto.organismoEntidadFinanciador,

                        presupuestoTotal: doc.data().tipoProyecto.presupuestoTotal,
                        aporteUTPL: doc.data().tipoProyecto.aporteUTPL,
                        aporteContraparte: doc.data().tipoProyecto.aporteContraparte,

                        //Equipo del Proyecto - Personal Interno 

                        //Personal Externo Cooperante

                        //Personal Externo a Contratar

                        //Información Técnica del Proyecto.
                        introduccionAntecedentes: doc.data().informacionTecnicaProyecto.introduccionAntecedentes,
                        introduccionJustificacion: doc.data().informacionTecnicaProyecto.introduccionJustificacion,
                        objetivoEspecifico1: doc.data().informacionTecnicaProyecto.objetivoEspecifico1,
                        objetivoEspecifico2: doc.data().informacionTecnicaProyecto.objetivoEspecifico2,
                        objetivoEspecifico3: doc.data().informacionTecnicaProyecto.objetivoEspecifico3,
                        objetivoEspecifico4: doc.data().informacionTecnicaProyecto.objetivoEspecifico4,
                        objetivoEspecifico5: doc.data().informacionTecnicaProyecto.objetivoEspecifico5,

                        objetivoGeneral: doc.data().informacionTecnicaProyecto.objetivoGeneral,
                        palabraClave1: doc.data().informacionTecnicaProyecto.palabraClave1,
                        palabraClave2: doc.data().informacionTecnicaProyecto.palabraClave2,
                        palabraClave3: doc.data().informacionTecnicaProyecto.palabraClave3,
                        palabraClave4: doc.data().informacionTecnicaProyecto.palabraClave4,
                        resumenProyecto: doc.data().informacionTecnicaProyecto.resumenProyecto,

                        //Metodología del Proyecto

                        //Cronograma de Actividades del Proyecto

                        //Resumen del Presupuesto
                        viaticosSubsistenciasMovilizacion: doc.data().resumenPresupuesto.viaticosSubsistenciasMovilizacion,
                        honorarios: doc.data().resumenPresupuesto.honorarios,
                        materialesSuministrosReactivos: doc.data().resumenPresupuesto.materialesSuministrosReactivos,
                        equipos: doc.data().resumenPresupuesto.equipos,
                        capacitacion: doc.data().resumenPresupuesto.capacitacion,
                        totalGastosDirectos: doc.data().resumenPresupuesto.totalGastosDirectos,
                        bibliografia: doc.data().resumenPresupuesto.bibliografia,

                        observaciones: doc.data().resumenPresupuesto.observaciones,

                    })
                }
                catch (e) {

                    console.log(e);
                }
            }
        });
        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 113 ~ docSnap.forEach ~ doc", doc)
        //console.log(rows);
        return rows;
    }

    useEffect(() => {
        getAllNodes();
    }, []);

    const getAllNodes = () => {
        getData().then((response) => {
            setNodes(response);
            setLoading(false);
        });
    };
    if (isLoading) {
        return <div className="App">Cargando...</div>;
    }
    return (

        <div className="Container">
            <div
                className="table-responsive"
            >
                <TableContainer component={Paper} className="tableListadoProyectos">

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Correo de Investigador.</TableCell>
                                <TableCell className="tableCell">Título del Proyecto.</TableCell>
                                <TableCell className="tableCell">Facultad.</TableCell>
                                <TableCell className="tableCell">Departamento.</TableCell>
                                <TableCell className="tableCell">Grupo de Investigación.</TableCell>
                                <TableCell className="tableCell">Status</TableCell>
                                <TableCell className="tableCell">Acciones</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>

                                    <TableCell name="titulo" className="tableCell">{row.titulo}</TableCell>
                                    <TableCell className="tableCell">{row.facultad}</TableCell>
                                    <TableCell className="tableCell">{row.departamento}</TableCell>
                                    <TableCell className="tableCell">{row.grupoInvestigacion}</TableCell>

                                    <TableCell className="tableCell">
                                        <span className={`status ${row.status}`}>{row.status}</span>
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {/* <Button variant="contained" color="primary" onClick={ () => cambiarStatus(row, "Status") }> */}
                                        <Button variant="contained" color="primary" onClick={() => handleGlobalChange(row)}>

                                            Editar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default List;

