import "./tableTipoProyecto.scss";
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
                    resumenProyecto: doc.data().informacionTecnicaProyecto.resumenProyecto,
                    palabraClave1: doc.data().informacionTecnicaProyecto.palabraClave1,
                    palabraClave2: doc.data().informacionTecnicaProyecto.palabraClave2,
                    palabraClave3: doc.data().informacionTecnicaProyecto.palabraClave3,
                    palabraClave4: doc.data().informacionTecnicaProyecto.palabraClave4,
                    antecedentes: doc.data().informacionTecnicaProyecto.antecedentes,
                    justificacion: doc.data().informacionTecnicaProyecto.justificacion,
                    objetivoGeneral: doc.data().informacionTecnicaProyecto.objetivoGeneral,
                    objetivoEspecifico1: doc.data().informacionTecnicaProyecto.objetivoEspecifico1,
                    objetivoEspecifico2: doc.data().informacionTecnicaProyecto.objetivoEspecifico2,
                    objetivoEspecifico3: doc.data().informacionTecnicaProyecto.objetivoEspecifico3,
                    objetivoEspecifico4: doc.data().informacionTecnicaProyecto.objetivoEspecifico4,
                    objetivoEspecifico5: doc.data().informacionTecnicaProyecto.objetivoEspecifico5,

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
                <TableContainer component={Paper} className="tableTipoProyecto">

                    <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell">Correo de Investigador.</TableCell>
                                <TableCell className="tableCell">Tipo de Proyecto.</TableCell>
                                <TableCell className="tableCell">Tipo de Investigación.</TableCell>
                                <TableCell className="tableCell">Tipo de Financiamiento.</TableCell>
                                <TableCell className="tableCell">Organismo / Entidiad Financiador.</TableCell>
                                <TableCell className="tableCell">Presupuesto Total.</TableCell>
                                <TableCell className="tableCell">Aporte UTPL.</TableCell>
                                <TableCell className="tableCell">Aporte Contraparte.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>

                                    <TableCell className="tableCell">{row.tipoProyecto}</TableCell>
                                    <TableCell className="tableCell">{row.tipoInvestigacion}</TableCell>
                                    <TableCell className="tableCell">{row.tipoFinanciamiento}</TableCell>
                                    <TableCell className="tableCell">{row.organismoEntidadFinanciador}</TableCell>
                                    <TableCell className="tableCell">{row.presupuestoTotal}</TableCell>
                                    <TableCell className="tableCell">{row.aporteUTPL}</TableCell>
                                    <TableCell className="tableCell">{row.aporteContraparte}</TableCell>

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

