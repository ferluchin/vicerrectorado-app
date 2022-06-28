import "./tableListadoProyectos.scss";
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
                    temp: doc.data().informacionGeneral.fechaInicio,
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
                    status: "Borrador",
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

                                    <TableCell className="tableCell">
                                        <span className={`status ${row.status}`}>{row.status}</span>
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

