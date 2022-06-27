import "./tableInformacionTecnicaProyecto.scss";
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
        //var docRef = collection(db, `proyectos-investigacion/personalInterno`);
        var docRef = collection(db, `proyectos-investigacion`);
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data().proyectos.equipos);
            try {
                rows.push({
                    //id: doc.id,
                    objetivoEspecifico1: doc.data().proyectos.objetivoEspecifico1,
                    numero: doc.data().personalInterno.id,
                    rol: doc.data().personalInterno.id.rol,
                    tipo: doc.data().personalInterno.id.tipo,
                    senescyt: doc.data().personalInterno.id.senescyt,
                    identificacion: doc.data().personalInterno.id.identificacion,
                    nombres: doc.data().personalInterno.id.nombres,
                    horasSemanales: doc.data().personalInterno.id.horasSemanales,
                    horasTotales: doc.data().personalInterno.id.horasTotales,


                    //rol , tipo, investigadores acreditados, identificacion, nombres y apellidos, horas semanales de participacion
                    // total horas participacion en el proyecto

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
                <TableContainer component={Paper} className="tableInformacionTecnicaProyecto">

                    <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Resúmen del Proyecto.</TableCell>
                                <TableCell className="tableCell">Palabra Clave 1.</TableCell>
                                <TableCell className="tableCell">Palabra Clave 2.</TableCell>
                                <TableCell className="tableCell">Palabra Clave 3.</TableCell>
                                <TableCell className="tableCell">Palabra Clave 4.</TableCell>
                                <TableCell className="tableCell">Antecedentes.</TableCell>
                                <TableCell className="tableCell">Justificación.</TableCell>
                                <TableCell className="tableCell">Objetivo General.</TableCell>
                                <TableCell className="tableCell">Objetivo Específico 1.</TableCell>
                                <TableCell className="tableCell">Objetivo Específico 2.</TableCell>
                                <TableCell className="tableCell">Objetivo Específico 3.</TableCell>
                                <TableCell className="tableCell">Objetivo Específico 4.</TableCell>
                                <TableCell className="tableCell">Objetivo Específico 5.</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>

                                    <TableCell className="tableCell">{row.numero}</TableCell>
                                    <TableCell className="tableCell">{row.rol}</TableCell>
                                    <TableCell className="tableCell">{row.tipo}</TableCell>
                                    <TableCell className="tableCell">{row.senescyt}</TableCell>
                                    <TableCell className="tableCell">{row.identificacion}</TableCell>
                                    <TableCell className="tableCell">{row.nombres}</TableCell>
                                    <TableCell className="tableCell">{row.horasSemanales}</TableCell>
                                    <TableCell className="tableCell">{row.horasTotales}</TableCell>
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

