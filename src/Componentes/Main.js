import React, { useState, useEffect} from 'react'

import { Container, Button } from "react-bootstrap"



import { getAuth, signOut } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'; import { auth, app } from '../firebase';



const firestore = getFirestore(app);

const Main = ({ correoUsuario }) => {
    const [arrayTareas, setArrayTareas] = useState(null);

    //console.log(correoUsuario);
    const [arrayProyectos, setArrayProyectos] = useState(null);


    const fakeData = [
        { id: 1, descripcion: 'Tarea 1', url: 'https://www.picsum.photos/420' },
        { id: 2, descripcion: 'Tarea 2', url: 'https://www.picsum.photos/420' },
        { id: 3, descripcion: 'Tarea 3', url: 'https://www.picsum.photos/420' },
    ]

    async function buscarDocumentoOrCrearDocumento(idDocumento) {
        //crear referencia al documento

        const docuRef = doc(firestore, `usuarios/${idDocumento}`);

        //Buscar documento
        const consulta = await getDoc(docuRef);

        //revisar si existe
        if (consulta.exists()) {
            // si sí existe 
            const infoDocu = consulta.data();
            return infoDocu.tareas;
        } else {
            // si no existe
            await setDoc(docuRef, { tareas: [...fakeData] })
            const consulta = await getDoc(docuRef);
            const infoDocu = consulta.data();
            return infoDocu.tareas;

        }
    }

    async function buscarProyectoOrCrearProyecto(idDocumento) {
        //crear referencia al documento
        const docuRef = doc(firestore, `proyectos-investigacion/${idDocumento}`);

        //Buscar documento
        const consulta = await getDoc(docuRef);

        //revisar si existe
        if (consulta.exists()) {
            // si sí existe 
            const infoDocu = consulta.data();
            return infoDocu.proyectos;
        } else {
            // si no existe
            await setDoc(docuRef, { proyectos: [...fakeData] })
            const consulta = await getDoc(docuRef);
            const infoDocu = consulta.data();
            return infoDocu.proyectos;

        }
    }

    useEffect(() => {
        async function obtenerTareas() {
            const tareasFetchadas = await buscarDocumentoOrCrearDocumento(
                correoUsuario
            );
            setArrayTareas(tareasFetchadas);
        }
        obtenerTareas();
    }, [])

    useEffect(() => {
        async function obtenerProyectos() {
            const proyectosFetchadas = await buscarProyectoOrCrearProyecto(
                correoUsuario
            );
            setArrayProyectos(proyectosFetchadas);
        }
        obtenerProyectos();
    }, [])

    return (
        <Container>
            <br />
            <h4>
                Hola Administrador, sesión iniciada
            </h4>
            
            

        </Container>
    )
}

export default Main