import "./tableMetodologiaProyecto.scss";
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
                    //id: doc.id,

                    //metodologia articuloCientifico prototipo registroPr
                    metodologia: doc.data().metodologiaProyecto.metodologia,
                    articuloCientifico: doc.data().metodologiaProyecto.articuloCientifico,
                    prototipo: doc.data().metodologiaProyecto.prototipo,
                    registroPropiedadIndustrial: doc.data().metodologiaProyecto.registroPropiedadIndustrial,
                    otrosTransferenciaConocimiento: doc.data().metodologiaProyecto.otrosTransferenciaConocimiento,
                    impactoSocial: doc.data().metodologiaProyecto.impactoSocial,
                    impactoCientifico: doc.data().metodologiaProyecto.impactoCientifico,
                    impactoEconomico: doc.data().metodologiaProyecto.impactoEconomico,
                    impactoPolitico: doc.data().metodologiaProyecto.impactoPolitico,
                    otroImpacto: doc.data().metodologiaProyecto.otroImpacto,
                    descripcionActividadID: doc.data().metodologiaProyecto.descripcionActividadID,
                    aspectosBioeticos: doc.data().metodologiaProyecto.aspectosBioeticos,
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
                <TableContainer component={Paper} className="tableMetodologiaProyecto">

                    <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                
                                <TableCell className="tableCell">Metodología.</TableCell>
                                <TableCell className="tableCell">Artículo Científico.</TableCell>
                                <TableCell className="tableCell">Prototipo.</TableCell>
                                <TableCell className="tableCell">Registro de Propiedad Industrial.</TableCell>
                                <TableCell className="tableCell">Otros.</TableCell>
                                <TableCell className="tableCell">Impacto Social.</TableCell>
                                <TableCell className="tableCell">Impacto Científico.</TableCell>
                                <TableCell className="tableCell">Impacto Económico.</TableCell>
                                <TableCell className="tableCell">Impacto Político.</TableCell>
                                <TableCell className="tableCell">Otro Impacto.</TableCell>
                                <TableCell className="tableCell">Descripción de Actividad I+D.</TableCell>
                                <TableCell className="tableCell">Aspectos Bioéticos.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.metodologia}</TableCell>

                                    <TableCell className="tableCell">{row.articuloCientifico}</TableCell>
                                    <TableCell className="tableCell">{row.prototipo}</TableCell>
                                    <TableCell className="tableCell">{row.registroPropiedadIndustrial}</TableCell>
                                    <TableCell className="tableCell">{row.otrosTransferenciaConocimiento}</TableCell>
                                    <TableCell className="tableCell">{row.impactoSocial}</TableCell>
                                    <TableCell className="tableCell">{row.impactoCientifico}</TableCell>
                                    <TableCell className="tableCell">{row.impactoEconomico}</TableCell>
                                    <TableCell className="tableCell">{row.impactoPolitico}</TableCell>
                                    <TableCell className="tableCell">{row.otroImpacto}</TableCell>
                                    <TableCell className="tableCell">{row.descripcionActividadID}</TableCell>
                                    <TableCell className="tableCell">{row.aspectosBioeticos}</TableCell>

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

