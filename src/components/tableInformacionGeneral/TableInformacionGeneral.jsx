import "./tableInformacionGeneral.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";

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


const db = getFirestore();

const List = () => {


    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);

    const correoUsuario = "lgrandab@gmail.com"

    const [arrayProyectos, setArrayProyectos] = useState(null);


    //Recuperar el contenido de un solo documento
    async function getData() {
        var rows = [];
        var docRef = collection(db, "proyectos-investigacion");
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data().proyectos.equipos);
            try {
                rows.push({
                    id: doc.id,

                    titulo: doc.data().informacionGeneral.titulo,
                    facultad: doc.data().informacionGeneral.facultad,
                    departamento: doc.data().informacionGeneral.departamento,
                    grupoInvestigacion: doc.data().informacionGeneral.grupoInvestigacion,
                    dominioAcademico: doc.data().informacionGeneral.dominioAcademico,
                    lineaInvestigacion: doc.data().informacionGeneral.lineaInvestigacion,
                    programaInvestigacion: doc.data().informacionGeneral.programaInvestigacion,

                    // fechaInicio: doc.data().informacionGeneral.fechaInicio,
                    // fechaFin: doc.data().informacionGeneral.fechaFin,
                    //fechaInicio: "hoy",
                    temp : doc.data().informacionGeneral.fechaInicio,
                    fechaInicio: "YYYY-MM-DD",
                    fechaFin: "YYYY-MM-DD",

                    duracionProyectoSemanas: doc.data().informacionGeneral.duracionProyectoSemanas,
                    alcanceTerritorial: doc.data().informacionGeneral.alcanceTerritorial,

                    actividadCientifica: doc.data().informacionGeneral.actividadCientifica,
                    objetivoSocioeconomico: doc.data().informacionGeneral.objetivoSocioeconomico,
                    areaTematicaID: doc.data().informacionGeneral.areaTematicaID,
                    objetivosPlanCreacionOportunidades: doc.data().informacionGeneral.objetivosPlanCreacionOportunidades,

                    camploAmplio: doc.data().informacionGeneral.camploAmplio,
                    campoEspecifico: doc.data().informacionGeneral.campoEspecifico,
                    camploDetallado: doc.data().informacionGeneral.camploDetallado,
                    objetivosDesarrolloSostenible: doc.data().informacionGeneral.objetivosDesarrolloSostenible,
                    //status: "Pending",

                    
                })
            }
            catch (e) {

                console.log(e);
            }
        });
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
                <TableContainer component={Paper} className="tableInformacion">

                    <Table sx={{ minWidth: 650, maxWidth: 800} } aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Correo de Investigador.</TableCell>
                                <TableCell className="tableCell">T??tulo.</TableCell>
                                <TableCell className="tableCell">Facultad.</TableCell>
                                <TableCell className="tableCell">Departamento.</TableCell>
                                <TableCell className="tableCell">Grupo de Investigaci??n.</TableCell>
                                <TableCell className="tableCell">Dominio Acad??mico.</TableCell>
                                <TableCell className="tableCell">L??nea de Investigaci??n.</TableCell>
                                <TableCell className="tableCell">Programa de Investigaci??n.</TableCell>

                                <TableCell className="tableCell">Fecha de Inicio.</TableCell>
                                <TableCell className="tableCell">Fecha de Finalizaci??n</TableCell>

                                <TableCell className="tableCell">Duraci??n del Proyecto (en Semanas)</TableCell>
                                <TableCell className="tableCell">Alcance Territorial</TableCell>


                                <TableCell className="tableCell">Actividad Cient??fica</TableCell>
                                <TableCell className="tableCell">Objetivo Socioecon??mico</TableCell>
                                <TableCell className="tableCell">??rea tem??tica de I+D</TableCell>
                                <TableCell className="tableCell">Objetivos del Plan de creaci??n de Oportunidades</TableCell>

                                {/* Clasificaci??n Internacional Normalizada de la Educaci??n */}


                                <TableCell className="tableCell">Campo Amplio</TableCell>
                                <TableCell className="tableCell">Campo Espec??fico</TableCell>
                                <TableCell className="tableCell">Campo Detallado</TableCell>
                                <TableCell className="tableCell">Objetivos del Desarrollo Sostenible</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>

                                    <TableCell className="tableCell">{row.titulo}</TableCell>
                                    <TableCell className="tableCell">{row.facultad}</TableCell>
                                    <TableCell className="tableCell">{row.departamento}</TableCell>
                                    <TableCell className="tableCell">{row.grupoInvestigacion}</TableCell>
                                    <TableCell className="tableCell">{row.dominioAcademico}</TableCell>
                                    <TableCell className="tableCell">{row.lineaInvestigacion}</TableCell>
                                    <TableCell className="tableCell">{row.programaInvestigacion}</TableCell>
                                    <TableCell className="tableCell">{row.fechaInicio}</TableCell>
                                    <TableCell className="tableCell">{row.fechaFin}</TableCell>
                                    <TableCell className="tableCell">{row.duracionProyectoSemanas}</TableCell>
                                    <TableCell className="tableCell">{row.alcanceTerritorial}</TableCell>

                                    <TableCell className="tableCell">{row.actividadCientifica}</TableCell>
                                    <TableCell className="tableCell">{row.objetivoSocioeconomico}</TableCell>
                                    <TableCell className="tableCell">{row.areaTematicaID}</TableCell>
                                    <TableCell className="tableCell">{row.objetivosPlanCreacionOportunidades}</TableCell>
                                    <TableCell className="tableCell">{row.camploAmplio}</TableCell>
                                    <TableCell className="tableCell">{row.campoEspecifico}</TableCell>
                                    <TableCell className="tableCell">{row.camploDetallado}</TableCell>

                                    <TableCell className="tableCell">{row.objetivosDesarrolloSostenible}</TableCell>


                                    {/*                             
                                <TableCell className="tableCell">
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell> */}
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

