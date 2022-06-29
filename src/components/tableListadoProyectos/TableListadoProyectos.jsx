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

                        titulo: doc.data().informacionGeneral.titulo,
                        facultad: doc.data().informacionGeneral.facultad,
                        departamento: doc.data().informacionGeneral.departamento,
                        grupoInvestigacion: doc.data().informacionGeneral.grupoInvestigacion,
                        dominioAcademico: doc.data().informacionGeneral.dominioAcademico,
                        lineaInvestigacion: doc.data().informacionGeneral.lineaInvestigacion,
                        programaInvestigacion: doc.data().informacionGeneral.programaInvestigacion,
                        
                        status: doc.data().informacionGeneral.status,
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

                                    <TableCell className="tableCell">{row.titulo}</TableCell>
                                    <TableCell className="tableCell">{row.facultad}</TableCell>
                                    <TableCell className="tableCell">{row.departamento}</TableCell>
                                    <TableCell className="tableCell">{row.grupoInvestigacion}</TableCell>

                                    <TableCell className="tableCell">
                                        <span className={`status ${row.status}`}>{row.status}</span>
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        <Button variant="contained" color="primary" onClick={ () => cambiarStatus(row, "Status") }>
                                            Confirmar
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

