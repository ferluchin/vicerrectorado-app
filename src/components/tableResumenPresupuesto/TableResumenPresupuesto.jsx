import "./tableResumenPresupuesto.scss";
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
                    tipoProyecto: doc.data().tipoProyecto.tipoProyecto,
                    viaticosSubsistenciasMovilizacion: doc.data().resumenPresupuesto.viaticosSubsistenciasMovilizacion,
                    honorarios: doc.data().resumenPresupuesto.honorarios,
                    materialesSuministrosReactivos: doc.data().resumenPresupuesto.materialesSuministrosReactivos,
                    equipos: doc.data().resumenPresupuesto.equipos,
                    capacitacion: doc.data().resumenPresupuesto.capacitacion,
                    totalGastosDirectos: doc.data().resumenPresupuesto.totalGastosDirectos,
                    bibliografia: doc.data().resumenPresupuesto.bibliografia,
                    observaciones: doc.data().resumenPresupuesto.observaciones,

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
                <TableContainer component={Paper} className="tableResumenPresupuesto">

                    <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Viáticos</TableCell>
                                <TableCell className="tableCell">Honorarios.</TableCell>
                                <TableCell className="tableCell">Materiales Suministros Reactivos.</TableCell>
                                <TableCell className="tableCell">Equipos.</TableCell>
                                <TableCell className="tableCell">Capacitacion.</TableCell>
                                <TableCell className="tableCell">Total de gastos Directos.</TableCell>
                                <TableCell className="tableCell">Bibliografía.</TableCell>
                                <TableCell className="tableCell">Observaciones.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    

                                    <TableCell className="tableCell">{row.viaticosSubsistenciasMovilizacion}</TableCell>
                                    <TableCell className="tableCell">{row.honorarios}</TableCell>
                                    <TableCell className="tableCell">{row.materialesSuministrosReactivos}</TableCell>
                                    <TableCell className="tableCell">{row.equipos}</TableCell>
                                    <TableCell className="tableCell">{row.capacitacion}</TableCell>
                                    <TableCell className="tableCell">{row.totalGastosDirectos}</TableCell>
                                    <TableCell className="tableCell">{row.bibliografia}</TableCell>
                                    <TableCell className="tableCell">{row.observaciones}</TableCell>

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

