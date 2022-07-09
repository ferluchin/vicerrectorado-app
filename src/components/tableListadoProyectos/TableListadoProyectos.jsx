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
    updateDoc,
    query,
    where,
    getFirestore
} from "firebase/firestore";
//import { async } from "@firebase/util";
import { app } from "../../firebase";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { ConstructionTwoTone, DockOutlined } from "@mui/icons-material";

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
    //const [globalCronogramaActividades, setGlobalCronogramaActividades] = useGlobalState("cronogramaActividades");
    const [globalCronogramaEspA, setGlobalCronogramaEspA] = useGlobalState("cronogramaEspA");
    const [globalCronogramaEspB, setGlobBlCronogramaEspB] = useGlobalState("cronogramaEspB");
    const [globalCronogramaEspC, setGlobalCronogramaEspC] = useGlobalState("cronogramaEspC");
    const [globalCronogramaEspD, setGlobalCronogramaEspD] = useGlobalState("cronogramaEspD");
    const [globalCronogramaEspE, setGlobalCronogramaEspE] = useGlobalState("cronogramaEspE");
    const [globalResumenPresupuesto, setGlobalResumenPresupuesto] = useGlobalState("resumenPresupuesto");

    const handleGlobalChange = (row) => {
        //setGlobalState("isLoggedIn", true);
        //() => update(() => true);

        const {
            id,

            auxiliar,
            //INFORMACION GENERAL
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

            //PERSONAL INTERNO
            //idPersonalInterno,
            rolPersonalInterno1,
            rolPersonalInterno2,
            rolPersonalInterno3,
            rolPersonalInterno4,
            rolPersonalInterno5,

            tipoPersonalInterno1,
            tipoPersonalInterno2,
            tipoPersonalInterno3,
            tipoPersonalInterno4,
            tipoPersonalInterno5,

            senescyt1,
            senescyt2,
            senescyt3,
            senescyt4,
            senescyt5,

            identificacionPersonalInterno1,
            identificacionPersonalInterno2,
            identificacionPersonalInterno3,
            identificacionPersonalInterno4,
            identificacionPersonalInterno5,

            nombrePersonalInterno1,
            nombrePersonalInterno2,
            nombrePersonalInterno3,
            nombrePersonalInterno4,
            nombrePersonalInterno5,

            horasSemanalesPersonalInterno1,
            horasSemanalesPersonalInterno2,
            horasSemanalesPersonalInterno3,
            horasSemanalesPersonalInterno4,
            horasSemanalesPersonalInterno5,

            horasTotalesPersonalInterno1,
            horasTotalesPersonalInterno2,
            horasTotalesPersonalInterno3,
            horasTotalesPersonalInterno4,
            horasTotalesPersonalInterno5,

            //PERSONAL EXTERNO COOPERANTE
            //idPersonalExternoCooperante,
            rolPersonalCooperante1,
            rolPersonalCooperante2,
            rolPersonalCooperante3,
            rolPersonalCooperante4,
            rolPersonalCooperante5,

            nombrePersonalCooperante1,
            nombrePersonalCooperante2,
            nombrePersonalCooperante3,
            nombrePersonalCooperante4,
            nombrePersonalCooperante5,

            entidadPersonalCooperante1,
            entidadPersonalCooperante2,
            entidadPersonalCooperante3,
            entidadPersonalCooperante4,
            entidadPersonalCooperante5,

            //PERSONAL EXTERNO CONTRATAR
            //idPersonalExternoContratar,

            perfilRequerido1,
            perfilRequerido2,
            perfilRequerido3,
            perfilRequerido4,
            perfilRequerido5,

            funcion1,
            funcion2,
            funcion3,
            funcion4,
            funcion5,

            actividadesDesarrollar1,
            actividadesDesarrollar2,
            actividadesDesarrollar3,
            actividadesDesarrollar4,
            actividadesDesarrollar5,

            tiempoContratacion1,
            tiempoContratacion2,
            tiempoContratacion3,
            tiempoContratacion4,
            tiempoContratacion5,

            personasContratar1,
            personasContratar2,
            personasContratar3,
            personasContratar4,
            personasContratar5,

            //INFORMACION TECNICA DEL PROYECTO - 13
            introduccionAntecedentes,
            introduccionJustificacion,


            // PRINCIPALES EQUIPOS
            equipoProyecto1,
            equipoProyecto2,
            equipoProyecto3,

            ubicacionEquipo1,
            ubicacionEquipo2,
            ubicacionEquipo3,
            //
            //

            objetivoGeneral,
            palabraClave1,
            palabraClave2,
            palabraClave3,
            palabraClave4,
            resumenProyecto,

            //METODOLOGIA DEL PROYECTO - 12 - DESTRUCTURING
            articuloCientifico,
            aspectosBioeticos,
            descripcionActividadID,
            impactoCientifico,
            impactoEconomico,
            impactoPolitico,
            impactoSocial,
            metodologia,
            otroImpacto,
            otrosTransferenciaConocimiento,
            prototipo,
            registroPropiedadIndustrial,

            //CRONOGRAMA DE ACTIVIDADES A - 
            actividadEspecifica1,
            actividadEspecifica2,
            actividadEspecifica3,
            actividadEspecifica4,
            actividadEspecifica5,

            fechaInicio1,
            fechaInicio2,
            fechaInicio3,
            fechaInicio4,
            fechaInicio5,

            fechaFin1,
            fechaFin2,
            fechaFin3,
            fechaFin4,
            fechaFin5,

            itemPresupuesto1,
            itemPresupuesto2,
            itemPresupuesto3,
            itemPresupuesto4,
            itemPresupuesto5,

            nombreEvidencia1,
            nombreEvidencia2,
            nombreEvidencia3,
            nombreEvidencia4,
            nombreEvidencia5,

            nombreResponsableActividad1,
            nombreResponsableActividad2,
            nombreResponsableActividad3,
            nombreResponsableActividad4,
            nombreResponsableActividad5,

            objetivoEspecificoCronograma1,

            valorPresupuesto1,
            valorPresupuesto2,
            valorPresupuesto3,
            valorPresupuesto4,
            valorPresupuesto5,

            //RESUMEN DEL PRESUPUESTO - 8 - DESTRUCTURING
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
        saveAux();
        console.log("AUXILIAR ", auxiliar)
        


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

        async function saveAux() {
            try {

                const docuRef5 = doc(db, `proyectos-investigacion/${correoUsuario}`)

                //console.log(globalAuxiliar)
                //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });


                updateDoc(docuRef5, {
                    //["informacionGeneral"+globalAuxiliar]: {
                    auxiliar:
                        auxiliar

                }
                    //, { merge: true }
                )

            } catch (error) {
                console.log(error)
            }

        }
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

        //Personal Interno
        setGlobalPersonalInterno(prevFormDataPersonalInterno => {
            return {
                ...prevFormDataPersonalInterno,
                //idPersonalInterno: idPersonalInterno,
                rolPersonalInterno1: rolPersonalInterno1,
                rolPersonalInterno2: rolPersonalInterno2,
                rolPersonalInterno3: rolPersonalInterno3,
                rolPersonalInterno4: rolPersonalInterno4,
                rolPersonalInterno5: rolPersonalInterno5,

                tipoPersonalInterno1: tipoPersonalInterno1,
                tipoPersonalInterno2: tipoPersonalInterno2,
                tipoPersonalInterno3: tipoPersonalInterno3,
                tipoPersonalInterno4: tipoPersonalInterno4,
                tipoPersonalInterno5: tipoPersonalInterno5,

                senescyt1: senescyt1,
                senescyt2: senescyt2,
                senescyt3: senescyt3,
                senescyt4: senescyt4,
                senescyt5: senescyt5,

                identificacionPersonalInterno1: identificacionPersonalInterno1,
                identificacionPersonalInterno2: identificacionPersonalInterno2,
                identificacionPersonalInterno3: identificacionPersonalInterno3,
                identificacionPersonalInterno4: identificacionPersonalInterno4,
                identificacionPersonalInterno5: identificacionPersonalInterno5,

                nombrePersonalInterno1: nombrePersonalInterno1,
                nombrePersonalInterno2: nombrePersonalInterno2,
                nombrePersonalInterno3: nombrePersonalInterno3,
                nombrePersonalInterno4: nombrePersonalInterno4,
                nombrePersonalInterno5: nombrePersonalInterno5,

                horasSemanalesPersonalInterno1: horasSemanalesPersonalInterno1,
                horasSemanalesPersonalInterno2: horasSemanalesPersonalInterno2,
                horasSemanalesPersonalInterno3: horasSemanalesPersonalInterno3,
                horasSemanalesPersonalInterno4: horasSemanalesPersonalInterno4,
                horasSemanalesPersonalInterno5: horasSemanalesPersonalInterno5,

                horasTotalesPersonalInterno1: horasTotalesPersonalInterno1,
                horasTotalesPersonalInterno2: horasTotalesPersonalInterno2,
                horasTotalesPersonalInterno3: horasTotalesPersonalInterno3,
                horasTotalesPersonalInterno4: horasTotalesPersonalInterno4,
                horasTotalesPersonalInterno5: horasTotalesPersonalInterno5,
            }
        })

        //Personal Externo Cooperante
        setGlobalPersonalExternoCooperante(prevFormDataPersonalExternoCooperante => {
            return {
                ...prevFormDataPersonalExternoCooperante,
                //idPersonalExternoCooperante: idPersonalExternoCooperante,
                rolPersonalCooperante1: rolPersonalCooperante1,
                rolPersonalCooperante2: rolPersonalCooperante2,
                rolPersonalCooperante3: rolPersonalCooperante3,
                rolPersonalCooperante4: rolPersonalCooperante4,
                rolPersonalCooperante5: rolPersonalCooperante5,

                nombrePersonalCooperante1: nombrePersonalCooperante1,
                nombrePersonalCooperante2: nombrePersonalCooperante2,
                nombrePersonalCooperante3: nombrePersonalCooperante3,
                nombrePersonalCooperante4: nombrePersonalCooperante4,
                nombrePersonalCooperante5: nombrePersonalCooperante5,

                entidadPersonalCooperante1: entidadPersonalCooperante1,
                entidadPersonalCooperante2: entidadPersonalCooperante2,
                entidadPersonalCooperante3: entidadPersonalCooperante3,
                entidadPersonalCooperante4: entidadPersonalCooperante4,
                entidadPersonalCooperante5: entidadPersonalCooperante5,
            }
        })
        //Personal Externo Contratar   
        setGlobalPersonalExternoContratar(prevFormDataPersonalExternoContratar => {
            return {
                ...prevFormDataPersonalExternoContratar,
                //idPersonalExternoContratar: idPersonalExternoContratar,
                //PERSONAL EXTERNO CONTRATAR
                perfilRequerido1: perfilRequerido1,
                perfilRequerido2: perfilRequerido2,
                perfilRequerido3: perfilRequerido3,
                perfilRequerido4: perfilRequerido4,
                perfilRequerido5: perfilRequerido5,

                funcion1: funcion1,
                funcion2: funcion2,
                funcion3: funcion3,
                funcion4: funcion4,
                funcion5: funcion5,

                actividadesDesarrollar1: actividadesDesarrollar1,
                actividadesDesarrollar2: actividadesDesarrollar2,
                actividadesDesarrollar3: actividadesDesarrollar3,
                actividadesDesarrollar4: actividadesDesarrollar4,
                actividadesDesarrollar5: actividadesDesarrollar5,

                tiempoContratacion1: tiempoContratacion1,
                tiempoContratacion2: tiempoContratacion2,
                tiempoContratacion3: tiempoContratacion3,
                tiempoContratacion4: tiempoContratacion4,
                tiempoContratacion5: tiempoContratacion5,

                personasContratar1: personasContratar1,
                personasContratar2: personasContratar2,
                personasContratar3: personasContratar3,
                personasContratar4: personasContratar4,
                personasContratar5: personasContratar5,
            }
        })

        //Informacion Tecnica del Proyecto
        setGlobalInformacionTecnicaProyecto(prevFormDataInformacionTecnicaProyecto => {
            return {
                ...prevFormDataInformacionTecnicaProyecto,

                introduccionAntecedentes: introduccionAntecedentes,
                introduccionJustificacion: introduccionJustificacion,
                // PRINCIPALES EQUIPOS
                equipoProyecto1: equipoProyecto1,
                equipoProyecto2: equipoProyecto2,
                equipoProyecto3: equipoProyecto3,

                ubicacionEquipo1: ubicacionEquipo1,
                ubicacionEquipo2: ubicacionEquipo2,
                ubicacionEquipo3: ubicacionEquipo3,

                objetivoGeneral: objetivoGeneral,
                palabraClave1: palabraClave1,
                palabraClave2: palabraClave2,
                palabraClave3: palabraClave3,
                palabraClave4: palabraClave4,
                resumenProyecto: resumenProyecto,

            }
        })

        //CronogramaEspA

        setGlobalCronogramaEspA(prevFormDataCronogramaEspA => {
            return {
                ...prevFormDataCronogramaEspA,

                actividadEspecifica1: actividadEspecifica1,
                actividadEspecifica2: actividadEspecifica2,
                actividadEspecifica3: actividadEspecifica3,
                actividadEspecifica4: actividadEspecifica4,
                actividadEspecifica5: actividadEspecifica5,

                fechaInicio1: fechaInicio1,
                fechaInicio2: fechaInicio2,
                fechaInicio3: fechaInicio3,
                fechaInicio4: fechaInicio4,
                fechaInicio5: fechaInicio5,

                fechaFin1: fechaFin1,
                fechaFin2: fechaFin2,
                fechaFin3: fechaFin3,
                fechaFin4: fechaFin4,
                fechaFin5: fechaFin5,

                itemPresupuesto1: itemPresupuesto1,
                itemPresupuesto2: itemPresupuesto2,
                itemPresupuesto3: itemPresupuesto3,
                itemPresupuesto4: itemPresupuesto4,
                itemPresupuesto5: itemPresupuesto5,

                nombreEvidencia1: nombreEvidencia1,
                nombreEvidencia2: nombreEvidencia2,
                nombreEvidencia3: nombreEvidencia3,
                nombreEvidencia4: nombreEvidencia4,
                nombreEvidencia5: nombreEvidencia5,

                nombreResponsableActividad1: nombreResponsableActividad1,
                nombreResponsableActividad2: nombreResponsableActividad2,
                nombreResponsableActividad3: nombreResponsableActividad3,
                nombreResponsableActividad4: nombreResponsableActividad4,
                nombreResponsableActividad5: nombreResponsableActividad5,

                objetivoEspecificoCronograma1: objetivoEspecificoCronograma1,

                valorPresupuesto1: valorPresupuesto1,
                valorPresupuesto2: valorPresupuesto2,
                valorPresupuesto3: valorPresupuesto3,
                valorPresupuesto4: valorPresupuesto4,
                valorPresupuesto5: valorPresupuesto5,
            }
        })

        setGlobalMetodologiaProyecto(prevFormDataMetodologiaProyecto => {
            return {
                ...prevFormDataMetodologiaProyecto,
                articuloCientifico: articuloCientifico,
                aspectosBioeticos: aspectosBioeticos,
                descripcionActividadID: descripcionActividadID,
                impactoCientifico: impactoCientifico,
                impactoEconomico: impactoEconomico,
                impactoPolitico: impactoPolitico,
                impactoSocial: impactoSocial,
                metodologia: metodologia,
                otroImpacto: otroImpacto,
                otrosTransferenciaConocimiento: otrosTransferenciaConocimiento,
                prototipo: prototipo,
                registroPropiedadIndustrial: registroPropiedadIndustrial,
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
            "🚀 ~ file: TableListadoProyectos.jsx ~ line 257 ~ handleGlobalChange ~ globalInformacionTecnicaProyecto",
            (globalInformacionTecnicaProyecto))


        //console.log(value);
        console.log(auxiliar)
        console.log(row)
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

        let aux2 = "informacionGenral7"
        var rows = [];
        var docRef = collection(db, `proyectos-investigacion/`);
        //var docRef = collection(db, "proyectos-investigacion", `${correoUsuario}`);

        const docSnap = await getDocs(docRef);
        //console.log(" ~ file: TableListadoProyectos.jsx ~ line 66 ~ getData ~ docSnap", docSnap)

        docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data().proyectos.equipos);
            //console.log(doc.id + " 🚀🚀🚀")
            console.log(doc.data())
            if (doc.id === correoUsuario) {
                try {
                    var aux3 = "7"
                    for (var i = 0; i <= 10; i++) {
                        try {
                            rows.push({
                                id: doc.id,

                                auxiliar: [i],
                                //Información General del Proyecto
                                titulo: doc.data()["informacionGeneral" + i].titulo,
                                facultad: doc.data()["informacionGeneral" + i].facultad,
                                departamento: doc.data()["informacionGeneral" + i].departamento,
                                grupoInvestigacion: doc.data()["informacionGeneral" + i].grupoInvestigacion,

                                dominioAcademico: doc.data()["informacionGeneral" + i].dominioAcademico,
                                lineaInvestigacion: doc.data()["informacionGeneral" + i].lineaInvestigacion,
                                programaInvestigacion: doc.data()["informacionGeneral" + i].programaInvestigacion,

                                fechaInicio: doc.data()["informacionGeneral" + i].fechaInicio,
                                fechaFin: doc.data()["informacionGeneral" + i].fechaFin,
                                duracionProyectoSemanas: doc.data()["informacionGeneral" + i].duracionProyectoSemanas,

                                alcanceTerritorial: doc.data()["informacionGeneral" + i].alcanceTerritorial,

                                nombreDirectorProyecto: doc.data()["informacionGeneral" + i].nombreDirectorProyecto,
                                identificacionDirectorProyecto: doc.data()["informacionGeneral" + i].identificacionDirectorProyecto,
                                telefonoDirectorProyecto: doc.data()["informacionGeneral" + i].telefonoDirectorProyecto,
                                correoInstitucional: doc.data()["informacionGeneral" + i].correoInstitucional,

                                status: doc.data()["informacionGeneral" + i].status,

                                // Áreas del Conocimiento 
                                actividadCientifica: doc.data()["areasConocimiento" + i].actividadCientifica,
                                objetivoSocioEconomico: doc.data()["areasConocimiento" + i].objetivoSocioEconomico,
                                areaTematicaID: doc.data()["areasConocimiento" + i].areaTematicaID,

                                objetivosPlanCreacionOportunidades: doc.data()["areasConocimiento" + i].objetivosPlanCreacionOportunidades,

                                campoAmplio: doc.data()["areasConocimiento" + i].campoAmplio,
                                campoEspecifico: doc.data()["areasConocimiento" + i].campoEspecifico,
                                campoDetallado: doc.data()["areasConocimiento" + i].campoDetallado,

                                objetivosDesarrolloSostenible: doc.data()["areasConocimiento" + i].objetivosDesarrolloSostenible,


                                //Tipo de proyecto
                                tipoProyecto: doc.data()["tipoProyecto" + i]["tipoProyecto" + i],
                                tipoInvestigacion: doc.data()["tipoProyecto" + i].tipoInvestigacion,
                                tipoFinanciamiento: doc.data()["tipoProyecto" + i].tipoFinanciamiento,

                                organismoEntidadFinanciador: doc.data()["tipoProyecto" + i].organismoEntidadFinanciador,

                                presupuestoTotal: doc.data()["tipoProyecto" + i].presupuestoTotal,
                                aporteUTPL: doc.data()["tipoProyecto" + i].aporteUTPL,
                                aporteContraparte: doc.data()["tipoProyecto" + i].aporteContraparte,

                                //Equipo del Proyecto - Personal Interno 
                                //idPersonalInterno: doc.data().personalInterno.id,
                                //idPersonalInterno: doc.data().personalInterno,
                                rolPersonalInterno1: doc.data()["personalInterno" + i].rolPersonalInterno1,
                                rolPersonalInterno2: doc.data()["personalInterno" + i].rolPersonalInterno2,
                                rolPersonalInterno3: doc.data()["personalInterno" + i].rolPersonalInterno3,
                                rolPersonalInterno4: doc.data()["personalInterno" + i].rolPersonalInterno4,
                                rolPersonalInterno5: doc.data()["personalInterno" + i].rolPersonalInterno5,

                                tipoPersonalInterno1: doc.data()["personalInterno" + i].tipoPersonalInterno1,
                                tipoPersonalInterno2: doc.data()["personalInterno" + i].tipoPersonalInterno2,
                                tipoPersonalInterno3: doc.data()["personalInterno" + i].tipoPersonalInterno3,
                                tipoPersonalInterno4: doc.data()["personalInterno" + i].tipoPersonalInterno4,
                                tipoPersonalInterno5: doc.data()["personalInterno" + i].tipoPersonalInterno5,

                                senescyt1: doc.data()["personalInterno" + i].senescyt1,
                                senescyt2: doc.data()["personalInterno" + i].senescyt2,
                                senescyt3: doc.data()["personalInterno" + i].senescyt3,
                                senescyt4: doc.data()["personalInterno" + i].senescyt4,
                                senescyt5: doc.data()["personalInterno" + i].senescyt5,

                                identificacionPersonalInterno1: doc.data()["personalInterno" + i].identificacionPersonalInterno1,
                                identificacionPersonalInterno2: doc.data()["personalInterno" + i].identificacionPersonalInterno2,
                                identificacionPersonalInterno3: doc.data()["personalInterno" + i].identificacionPersonalInterno3,
                                identificacionPersonalInterno4: doc.data()["personalInterno" + i].identificacionPersonalInterno4,
                                identificacionPersonalInterno5: doc.data()["personalInterno" + i].identificacionPersonalInterno5,

                                nombrePersonalInterno1: doc.data()["personalInterno" + i].nombrePersonalInterno1,
                                nombrePersonalInterno2: doc.data()["personalInterno" + i].nombrePersonalInterno2,
                                nombrePersonalInterno3: doc.data()["personalInterno" + i].nombrePersonalInterno3,
                                nombrePersonalInterno4: doc.data()["personalInterno" + i].nombrePersonalInterno4,
                                nombrePersonalInterno5: doc.data()["personalInterno" + i].nombrePersonalInterno5,

                                horasSemanalesPersonalInterno1: doc.data()["personalInterno" + i].horasSemanalesPersonalInterno1,
                                horasSemanalesPersonalInterno2: doc.data()["personalInterno" + i].horasSemanalesPersonalInterno2,
                                horasSemanalesPersonalInterno3: doc.data()["personalInterno" + i].horasSemanalesPersonalInterno3,
                                horasSemanalesPersonalInterno4: doc.data()["personalInterno" + i].horasSemanalesPersonalInterno4,
                                horasSemanalesPersonalInterno5: doc.data()["personalInterno" + i].horasSemanalesPersonalInterno5,

                                horasTotalesPersonalInterno1: doc.data()["personalInterno" + i].horasTotalesPersonalInterno1,
                                horasTotalesPersonalInterno2: doc.data()["personalInterno" + i].horasTotalesPersonalInterno2,
                                horasTotalesPersonalInterno3: doc.data()["personalInterno" + i].horasTotalesPersonalInterno3,
                                horasTotalesPersonalInterno4: doc.data()["personalInterno" + i].horasTotalesPersonalInterno4,
                                horasTotalesPersonalInterno5: doc.data()["personalInterno" + i].horasTotalesPersonalInterno5,


                                //Personal Externo Cooperante
                                //idPersonalExternoCooperante: doc.data().personalExternoCooperante,
                                rolPersonalCooperante1: doc.data()["personalExternoCooperante" + i].rolPersonalCooperante1,
                                rolPersonalCooperante2: doc.data()["personalExternoCooperante" + i].rolPersonalCooperante2,
                                rolPersonalCooperante3: doc.data()["personalExternoCooperante" + i].rolPersonalCooperante3,
                                rolPersonalCooperante4: doc.data()["personalExternoCooperante" + i].rolPersonalCooperante4,
                                rolPersonalCooperante5: doc.data()["personalExternoCooperante" + i].rolPersonalCooperante5,

                                nombrePersonalCooperante1: doc.data()["personalExternoCooperante" + i].nombrePersonalCooperante1,
                                nombrePersonalCooperante2: doc.data()["personalExternoCooperante" + i].nombrePersonalCooperante2,
                                nombrePersonalCooperante3: doc.data()["personalExternoCooperante" + i].nombrePersonalCooperante3,
                                nombrePersonalCooperante4: doc.data()["personalExternoCooperante" + i].nombrePersonalCooperante4,
                                nombrePersonalCooperante5: doc.data()["personalExternoCooperante" + i].nombrePersonalCooperante5,

                                entidadPersonalCooperante1: doc.data()["personalExternoCooperante" + i].entidadPersonalCooperante1,
                                entidadPersonalCooperante2: doc.data()["personalExternoCooperante" + i].entidadPersonalCooperante2,
                                entidadPersonalCooperante3: doc.data()["personalExternoCooperante" + i].entidadPersonalCooperante3,
                                entidadPersonalCooperante4: doc.data()["personalExternoCooperante" + i].entidadPersonalCooperante4,
                                entidadPersonalCooperante5: doc.data()["personalExternoCooperante" + i].entidadPersonalCooperante5,

                                //Personal Externo a Contratar
                                //idPersonalExternoContratar: doc.data()["personalExternoContratar"+i],

                                perfilRequerido1: doc.data()["personalExternoContratar" + i].perfilRequerido1,
                                perfilRequerido2: doc.data()["personalExternoContratar" + i].perfilRequerido2,
                                perfilRequerido3: doc.data()["personalExternoContratar" + i].perfilRequerido3,
                                perfilRequerido4: doc.data()["personalExternoContratar" + i].perfilRequerido4,
                                perfilRequerido5: doc.data()["personalExternoContratar" + i].perfilRequerido5,

                                funcion1: doc.data()["personalExternoContratar" + i].funcion1,
                                funcion2: doc.data()["personalExternoContratar" + i].funcion2,
                                funcion3: doc.data()["personalExternoContratar" + i].funcion3,
                                funcion4: doc.data()["personalExternoContratar" + i].funcion4,
                                funcion5: doc.data()["personalExternoContratar" + i].funcion5,

                                actividadesDesarrollar1: doc.data()["personalExternoContratar" + i].actividadesDesarrollar1,
                                actividadesDesarrollar2: doc.data()["personalExternoContratar" + i].actividadesDesarrollar2,
                                actividadesDesarrollar3: doc.data()["personalExternoContratar" + i].actividadesDesarrollar3,
                                actividadesDesarrollar4: doc.data()["personalExternoContratar" + i].actividadesDesarrollar4,
                                actividadesDesarrollar5: doc.data()["personalExternoContratar" + i].actividadesDesarrollar5,

                                tiempoContratacion1: doc.data()["personalExternoContratar" + i].tiempoContratacion1,
                                tiempoContratacion2: doc.data()["personalExternoContratar" + i].tiempoContratacion2,
                                tiempoContratacion3: doc.data()["personalExternoContratar" + i].tiempoContratacion3,
                                tiempoContratacion4: doc.data()["personalExternoContratar" + i].tiempoContratacion4,
                                tiempoContratacion5: doc.data()["personalExternoContratar" + i].tiempoContratacion5,

                                personasContratar1: doc.data()["personalExternoContratar" + i].personasContratar1,
                                personasContratar2: doc.data()["personalExternoContratar" + i].personasContratar2,
                                personasContratar3: doc.data()["personalExternoContratar" + i].personasContratar3,
                                personasContratar4: doc.data()["personalExternoContratar" + i].personasContratar4,
                                personasContratar5: doc.data()["personalExternoContratar" + i].personasContratar5,


                                //Información Técnica del Proyecto.
                                introduccionAntecedentes: doc.data()["informacionTecnicaProyecto" + i].introduccionAntecedentes,
                                introduccionJustificacion: doc.data()["informacionTecnicaProyecto" + i].introduccionJustificacion,
                                // PRINCIPALES EQUIPOS
                                equipoProyecto1: doc.data()["informacionTecnicaProyecto" + i].equipoProyecto1,
                                equipoProyecto2: doc.data()["informacionTecnicaProyecto" + i].equipoProyecto2,
                                equipoProyecto3: doc.data()["informacionTecnicaProyecto" + i].equipoProyecto3,

                                ubicacionEquipo1: doc.data()["informacionTecnicaProyecto" + i].ubicacionEquipo1,
                                ubicacionEquipo2: doc.data()["informacionTecnicaProyecto" + i].ubicacionEquipo2,
                                ubicacionEquipo3: doc.data()["informacionTecnicaProyecto" + i].ubicacionEquipo3,

                                // objetivoEspecifico1: doc.data()["informacionTecnicaProyecto"+i].objetivoEspecifico1,
                                // objetivoEspecifico2: doc.data()["informacionTecnicaProyecto"+i].objetivoEspecifico2,
                                // objetivoEspecifico3: doc.data()["informacionTecnicaProyecto"+i].objetivoEspecifico3,
                                // objetivoEspecifico4: doc.data()["informacionTecnicaProyecto"+i].objetivoEspecifico4,
                                // objetivoEspecifico5: doc.data()["informacionTecnicaProyecto"+i].objetivoEspecifico5,

                                objetivoGeneral: doc.data()["informacionTecnicaProyecto" + i].objetivoGeneral,
                                palabraClave1: doc.data()["informacionTecnicaProyecto" + i].palabraClave1,
                                palabraClave2: doc.data()["informacionTecnicaProyecto" + i].palabraClave2,
                                palabraClave3: doc.data()["informacionTecnicaProyecto" + i].palabraClave3,
                                palabraClave4: doc.data()["informacionTecnicaProyecto" + i].palabraClave4,
                                resumenProyecto: doc.data()["informacionTecnicaProyecto" + i].resumenProyecto,

                                //Metodología del Proyecto
                                articuloCientifico: doc.data()["metodologiaProyecto" + i].articuloCientifico,
                                aspectosBioeticos: doc.data()["metodologiaProyecto" + i].aspectosBioeticos,
                                descripcionActividadID: doc.data()["metodologiaProyecto" + i].descripcionActividadID,
                                impactoCientifico: doc.data()["metodologiaProyecto" + i].impactoCientifico,
                                impactoEconomico: doc.data()["metodologiaProyecto" + i].impactoEconomico,
                                impactoPolitico: doc.data()["metodologiaProyecto" + i].impactoPolitico,
                                impactoSocial: doc.data()["metodologiaProyecto" + i].impactoSocial,
                                metodologia: doc.data()["metodologiaProyecto" + i].metodologia,
                                otroImpacto: doc.data()["metodologiaProyecto" + i].otroImpacto,
                                otrosTransferenciaConocimiento: doc.data()["metodologiaProyecto" + i].otrosTransferenciaConocimiento,
                                prototipo: doc.data()["metodologiaProyecto" + i].prototipo,
                                registroPropiedadIndustrial: doc.data()["metodologiaProyecto" + i].registroPropiedadIndustrial,

                                //Cronograma de Actividades del Proyecto
                                //Cronograma Actividades A
                                //CRONOGRAMA DE ACTIVIDADES A - 
                                actividadEspecifica1: doc.data()["cronogramaEspA" + i].actividadEspecifica1,
                                actividadEspecifica2: doc.data()["cronogramaEspA" + i].actividadEspecifica2,
                                actividadEspecifica3: doc.data()["cronogramaEspA" + i].actividadEspecifica3,
                                actividadEspecifica4: doc.data()["cronogramaEspA" + i].actividadEspecifica4,
                                actividadEspecifica5: doc.data()["cronogramaEspA" + i].actividadEspecifica5,

                                fechaInicio1: doc.data()["cronogramaEspA" + i].fechaInicio1,
                                fechaInicio2: doc.data()["cronogramaEspA" + i].fechaInicio2,
                                fechaInicio3: doc.data()["cronogramaEspA" + i].fechaInicio3,
                                fechaInicio4: doc.data()["cronogramaEspA" + i].fechaInicio4,
                                fechaInicio5: doc.data()["cronogramaEspA" + i].fechaInicio5,

                                fechaFin1: doc.data()["cronogramaEspA" + i].fechaFin1,
                                fechaFin2: doc.data()["cronogramaEspA" + i].fechaFin2,
                                fechaFin3: doc.data()["cronogramaEspA" + i].fechaFin3,
                                fechaFin4: doc.data()["cronogramaEspA" + i].fechaFin4,
                                fechaFin5: doc.data()["cronogramaEspA" + i].fechaFin5,

                                itemPresupuesto1: doc.data()["cronogramaEspA" + i].itemPresupuesto1,
                                itemPresupuesto2: doc.data()["cronogramaEspA" + i].itemPresupuesto2,
                                itemPresupuesto3: doc.data()["cronogramaEspA" + i].itemPresupuesto3,
                                itemPresupuesto4: doc.data()["cronogramaEspA" + i].itemPresupuesto4,
                                itemPresupuesto5: doc.data()["cronogramaEspA" + i].itemPresupuesto5,

                                nombreEvidencia1: doc.data()["cronogramaEspA" + i].nombreEvidencia1,
                                nombreEvidencia2: doc.data()["cronogramaEspA" + i].nombreEvidencia2,
                                nombreEvidencia3: doc.data()["cronogramaEspA" + i].nombreEvidencia3,
                                nombreEvidencia4: doc.data()["cronogramaEspA" + i].nombreEvidencia4,
                                nombreEvidencia5: doc.data()["cronogramaEspA" + i].nombreEvidencia5,

                                nombreResponsableActividad1: doc.data()["cronogramaEspA" + i].nombreResponsableActividad1,
                                nombreResponsableActividad2: doc.data()["cronogramaEspA" + i].nombreResponsableActividad2,
                                nombreResponsableActividad3: doc.data()["cronogramaEspA" + i].nombreResponsableActividad3,
                                nombreResponsableActividad4: doc.data()["cronogramaEspA" + i].nombreResponsableActividad4,
                                nombreResponsableActividad5: doc.data()["cronogramaEspA" + i].nombreResponsableActividad5,

                                objetivoEspecificoCronograma1: doc.data()["cronogramaEspA" + i].objetivoEspecificoCronograma1,

                                valorPresupuesto1: doc.data()["cronogramaEspA" + i].valorPresupuesto1,
                                valorPresupuesto2: doc.data()["cronogramaEspA" + i].valorPresupuesto2,
                                valorPresupuesto3: doc.data()["cronogramaEspA" + i].valorPresupuesto3,
                                valorPresupuesto4: doc.data()["cronogramaEspA" + i].valorPresupuesto4,
                                valorPresupuesto5: doc.data()["cronogramaEspA" + i].valorPresupuesto5,

                                //Resumen del Presupuesto
                                viaticosSubsistenciasMovilizacion: doc.data()["resumenPresupuesto" + i].viaticosSubsistenciasMovilizacion,
                                honorarios: doc.data()["resumenPresupuesto" + i].honorarios,
                                materialesSuministrosReactivos: doc.data()["resumenPresupuesto" + i].materialesSuministrosReactivos,
                                equipos: doc.data()["resumenPresupuesto" + i].equipos,
                                capacitacion: doc.data()["resumenPresupuesto" + i].capacitacion,
                                totalGastosDirectos: doc.data()["resumenPresupuesto" + i].totalGastosDirectos,
                                bibliografia: doc.data()["resumenPresupuesto" + i].bibliografia,

                                observaciones: doc.data()["resumenPresupuesto" + i].observaciones,

                            })
                        } catch (error) {

                        }
                    }

                }
                catch (e) {

                    console.log(e);
                }
            }
        });
        //console.log("🚀 ~ file: TableListadoProyectos.jsx ~ line 113 ~ docSnap.forEach ~ doc", doc)
        console.log(rows);
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

