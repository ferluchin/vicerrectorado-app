import React, {
    useState,
    useEffect,
    useRef,
    useContext,
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
import { useNavigate } from "react-router-dom";

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import "./personalExternoContratar.scss";
import TitleBar from "../../components/TitleBar";

import { app, auth } from "../../firebase"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    setDoc,
} from "firebase/firestore";

import Split from "react-split";
import Sidebar from "../../components/Sidebar";
import { Button } from "reactstrap";

import { setGlobalState, useGlobalState } from "../../Helper/Context";


import { AuthContext } from "../../context/AuthContext";
const db = getFirestore();

const firestore = getFirestore(app)


function PersonalExternoContratar() {
    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email

    const formInicial = {

        //PERSONAL EXTERNO CONTRATAR
        perfilRequerido1: "",
        perfilRequerido2: "",
        perfilRequerido3: "",
        perfilRequerido4: "",
        perfilRequerido5: "",

        funcion1: "",
        funcion2: "",
        funcion3: "",
        funcion4: "",
        funcion5: "",

        actividadesDesarrollar1: "",
        actividadesDesarrollar2: "",
        actividadesDesarrollar3: "",
        actividadesDesarrollar4: "",
        actividadesDesarrollar5: "",

        tiempoContratacion1: "",
        tiempoContratacion2: "",
        tiempoContratacion3: "",
        tiempoContratacion4: "",
        tiempoContratacion5: "",

        personasContratar1: "",
        personasContratar2: "",
        personasContratar3: "",
        personasContratar4: "",
        personasContratar5: "",
    }

    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/informacion-tecnica-proyecto`;
        navigate(path);
    }

    const [globalPersonalExternoContratar, setGlobalPersonalExternoContratar] = useGlobalState("personalExternoContratar");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const [formData, setFormData] = useState({ ...globalPersonalExternoContratar } ? { ...globalPersonalExternoContratar } : { ...formInicial })
    //const [formData, setFormData] = useState({ ...formInicial })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    async function  getAux(){
        var docRef = doc(db, `proyectos-investigacion/${correoUsuario}`);
        //var docRef = collection(db, "proyectos-investigacion", `${correoUsuario}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().contador);
            setGlobalAuxiliar(docSnap.data().contador)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
            updateDoc(docuRef, {
                ["personalExternoContratar"+globalAuxiliar]: {
                    ...formData
                }
            }
                //, { merge: true }
            )


        } catch (error) {
            console.log(error)
        }
        //console.log(formData)
        console.log({ ...formData })
        //setFormData({ ...formInicial })
        setGlobalPersonalExternoContratar({ ...formData })

        routeChange()
    }
    useEffect(() => {
        getAllNodes();
    }, []);

    const getAllNodes = () => {
        getAux().then((response) => {
            setNodes(response);
            setLoading(false);
        });
    };
    if (isLoading) {
        return <div className="App">Cargando...</div>;
    }
    return (
        <div className="personal-externo-contratar">
            <div className="main-body">

                <Split
                    sizes={[20, 80]}
                    direction="horizontal"
                    className="split"
                    minSize={100}
                    expandToMin={false}
                    dragInterval={1}
                    cursor="col-resize"
                >
                    <Sidebar
                    //notes={notes}
                    //currentNote={findCurrentNote()}
                    //setCurrentNoteId={setCurrentNoteId}
                    //newNote={createNewNote}
                    />
                    <section>
                        <form
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <TitleBar />
                            <div className="col-12">
                                <h4>
                                    Personal Externo A Contratar
                                </h4>
                                <br />


                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                Nro.
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Perfil Requerido.
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <label>
                                                Función.
                                            </label>
                                        </div>

                                        <div className="col-3">
                                            <label>
                                                Actividades a desarrollar.
                                            </label>
                                        </div>
                                        <div className="col-2">
                                            <label>
                                                Tiempo de Contratacion Meses.
                                            </label>
                                        </div>
                                        <div className="col-2">
                                            <label>
                                                Número de personas a contratar.
                                            </label>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                01
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="perfilRequerido1"
                                                onChange={handleChange}
                                                value={formData.perfilRequerido1}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <select
                                                id="funcion1"
                                                value={formData.funcion1}
                                                onChange={handleChange}
                                                name="funcion1"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="ASISTENTE">ASISTENTE</option>
                                                <option value="TÉCNICO">TÉCNICO</option>
                                                <option value="ANALISTA">ANALISTA</option>
                                                <option value="CONSULTOR / ESPECIALISTA">CONSULTOR / ESPECIALISTA</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadesDesarrollar1"
                                                onChange={handleChange}
                                                value={formData.actividadesDesarrollar1}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="tiempoContratacion1"
                                                onChange={handleChange}
                                                value={formData.tiempoContratacion1}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="personasContratar1"
                                                onChange={handleChange}
                                                value={formData.personasContratar1}
                                            />
                                        </div>
                                    </div>

                                    <br />
                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                02
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="perfilRequerido2"
                                                onChange={handleChange}
                                                value={formData.perfilRequerido2}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <select
                                                id="funcion2"
                                                value={formData.funcion2}
                                                onChange={handleChange}
                                                name="funcion2"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="ASISTENTE">ASISTENTE</option>
                                                <option value="TÉCNICO">TÉCNICO</option>
                                                <option value="ANALISTA">ANALISTA</option>
                                                <option value="CONSULTOR / ESPECIALISTA">CONSULTOR / ESPECIALISTA</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadesDesarrollar2"
                                                onChange={handleChange}
                                                value={formData.actividadesDesarrollar2}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="tiempoContratacion2"
                                                onChange={handleChange}
                                                value={formData.tiempoContratacion2}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="personasContratar2"
                                                onChange={handleChange}
                                                value={formData.personasContratar2}
                                            />
                                        </div>
                                    </div>

                                    <br />

                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                03
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="perfilRequerido3"
                                                onChange={handleChange}
                                                value={formData.perfilRequerido3}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <select
                                                id="funcion3"
                                                value={formData.funcion3}
                                                onChange={handleChange}
                                                name="funcion3"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="ASISTENTE">ASISTENTE</option>
                                                <option value="TÉCNICO">TÉCNICO</option>
                                                <option value="ANALISTA">ANALISTA</option>
                                                <option value="CONSULTOR / ESPECIALISTA">CONSULTOR / ESPECIALISTA</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadesDesarrollar3"
                                                onChange={handleChange}
                                                value={formData.actividadesDesarrollar3}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="tiempoContratacion3"
                                                onChange={handleChange}
                                                value={formData.tiempoContratacion3}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="personasContratar3"
                                                onChange={handleChange}
                                                value={formData.personasContratar3}
                                            />
                                        </div>
                                    </div>

                                    <br />

                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                04
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="perfilRequerido4"
                                                onChange={handleChange}
                                                value={formData.perfilRequerido4}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <select
                                                id="funcion4"
                                                value={formData.funcion4}
                                                onChange={handleChange}
                                                name="funcion4"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="ASISTENTE">ASISTENTE</option>
                                                <option value="TÉCNICO">TÉCNICO</option>
                                                <option value="ANALISTA">ANALISTA</option>
                                                <option value="CONSULTOR / ESPECIALISTA">CONSULTOR / ESPECIALISTA</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadesDesarrollar4"
                                                onChange={handleChange}
                                                value={formData.actividadesDesarrollar4}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="tiempoContratacion4"
                                                onChange={handleChange}
                                                value={formData.tiempoContratacion4}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="personasContratar4"
                                                onChange={handleChange}
                                                value={formData.personasContratar4}
                                            />
                                        </div>
                                    </div>

                                    <br />

                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                05
                                            </label>
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="perfilRequerido5"
                                                onChange={handleChange}
                                                value={formData.perfilRequerido5}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <select
                                                id="funcion5"
                                                value={formData.funcion5}
                                                onChange={handleChange}
                                                name="funcion5"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="ASISTENTE">ASISTENTE</option>
                                                <option value="TÉCNICO">TÉCNICO</option>
                                                <option value="ANALISTA">ANALISTA</option>
                                                <option value="CONSULTOR / ESPECIALISTA">CONSULTOR / ESPECIALISTA</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="actividadesDesarrollar5"
                                                onChange={handleChange}
                                                value={formData.actividadesDesarrollar5}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="tiempoContratacion5"
                                                onChange={handleChange}
                                                value={formData.tiempoContratacion5}
                                            />
                                        </div>

                                        <div className="col-2">
                                            <input
                                                type="number"
                                                placeholder="00"
                                                min="0"
                                                className="form-control"
                                                name="personasContratar5"
                                                onChange={handleChange}
                                                value={formData.personasContratar5}
                                            />
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                            <br />

                            <button
                                className="btn btn-primary"
                            //onClick={() => console.log(docenteSeleccionado)}
                            //type="button"
                            >
                                Enviar Información
                            </button>
                        </form>
                    </section>
                </Split>
            </div>
        </div>
    )
}

export default PersonalExternoContratar