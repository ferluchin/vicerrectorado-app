import React, {
    useState,
    useEffect,
    useRef,
    useContext,
} from "react";

import TitleBar from "../../components/TitleBar";

import { useNavigate } from "react-router-dom";

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import Split from "react-split";
import Sidebar from "../../components/Sidebar";

import { app } from "../../firebase";

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

import { AuthContext } from "../../context/AuthContext";
import { setGlobalState, useGlobalState } from "../../Helper/Context"
import { Button } from "reactstrap";


import "./personalInterno.scss"
import 'bootstrap/dist/css/bootstrap.css';

const db = getFirestore();

// const db = getFirestore();

// import NavBar from "../NavBar";

const firestore = getFirestore(app);

export default function PersonalInterno() {
    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext)

    const correoUsuario = currentUser.email;

    //const correoUsuario = "lgrandab@gmail.com";

    let navigate = useNavigate();

    const dataPersonalInicial = {

        //PERSONAL INTERNO
        rolPersonalInterno1: "",
        rolPersonalInterno2: "",
        rolPersonalInterno3: "",
        rolPersonalInterno4: "",
        rolPersonalInterno5: "",

        tipoPersonalInterno1: "",
        tipoPersonalInterno2: "",
        tipoPersonalInterno3: "",
        tipoPersonalInterno4: "",
        tipoPersonalInterno5: "",

        senescyt1: "",
        senescyt2: "",
        senescyt3: "",
        senescyt4: "",
        senescyt5: "",

        identificacionPersonalInterno1: "",
        identificacionPersonalInterno2: "",
        identificacionPersonalInterno3: "",
        identificacionPersonalInterno4: "",
        identificacionPersonalInterno5: "",

        nombrePersonalInterno1: "",
        nombrePersonalInterno2: "",
        nombrePersonalInterno3: "",
        nombrePersonalInterno4: "",
        nombrePersonalInterno5: "",

        horasSemanalesPersonalInterno1: "",
        horasSemanalesPersonalInterno2: "",
        horasSemanalesPersonalInterno3: "",
        horasSemanalesPersonalInterno4: "",
        horasSemanalesPersonalInterno5: "",

        horasTotalesPersonalInterno1: "",
        horasTotalesPersonalInterno2: "",
        horasTotalesPersonalInterno3: "",
        horasTotalesPersonalInterno4: "",
        horasTotalesPersonalInterno5: "",
    }

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/personal-externo-cooperante`;
        navigate(path);
    }
    async function getAux() {
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
    const [globalPersonalInterno, setGlobalPersonalInterno] = useGlobalState("personalInterno");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    console.log("globalPersonalInterno", globalPersonalInterno);

    //let dataFirebase = Object.values(globalPersonalInterno.idPersonalInterno)


    //const [data, setData] = useState(dataPersonalInicial);
    //const [data, setData] = React.useState({ ...[globalPersonalInterno.idPersonalInterno] } ? { ...[globalPersonalInterno.idPersonalInterno] } : { ...dataPersonalInicial })
    //const [data, setData] = useState([{ ...dataFirebase }] ? [{ ...dataFirebase }] : { ...dataPersonalInicial })

    const [formData, setFormData] = useState({ ...globalPersonalInterno } ? { ...globalPersonalInterno } : { ...dataPersonalInicial })

    //const [data, setData] = useState([...dataFirebase] ? [...dataFirebase] : { ...dataPersonalInicial })









    function logeoDatos(event) {
        console.log(globalPersonalInterno);


        let result = Object.values(globalPersonalInterno.idPersonalInterno)
        //result = result.horasSemanales
        console.log("RESULT", result)

        //console.log("🚀 ~ file: PersonalInterno.js ~ line 87 ~ PersonalInterno ~ dataFirebase", dataFirebase)
        //console.log("SET FORM DATA", ...data)

        console.log("🚀 ~ file: PersonalInterno.js ~ line 78 ~ PersonalInterno ~ dataPersonalInicial", dataPersonalInicial)

    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)

            updateDoc(docuRef, {
                ["personalInterno" + globalAuxiliar]: {
                    ...formData
                }
            }
            )
        } catch (error) {
            console.log(error)
        }
        //consolaPersonalInterno();
        console.log("🚀 ~ file: PersonalInterno.js ~ line 193 ~ handleSubmit ~ formData", formData)
        setGlobalPersonalInterno(...formData);
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
        <div className="personal-interno">
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
                    />
                    <section>
                        <form
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <TitleBar />

                            <div

                                className="col-12"
                            >
                                <h2>
                                    Equipo del Proyecto - Personal Interno
                                </h2>
                                <br />

                                <br />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <label>
                                            ROL
                                        </label>
                                    </div>

                                    <div className="col-2">
                                        <label>
                                            Tipo
                                        </label>
                                    </div>
                                    <div className="col-2">
                                        <label>
                                            Investigadores Acreditados Senescyt
                                        </label>
                                    </div>

                                    <div className="col-2">
                                        <label>
                                            Identificación
                                        </label>
                                    </div>

                                    <div className="col-2">
                                        <label>
                                            Nombres y Apellidos
                                        </label>
                                    </div>

                                    <div className="col-1">
                                        <label>
                                            Horas semanales de Participación
                                        </label>
                                    </div>

                                    <div className="col-1">
                                        <label>
                                            Total horas Participación
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <select
                                            id="rolPersonalInterno1"
                                            value={formData.rolPersonalInterno1}
                                            onChange={handleChange}
                                            name="rolPersonalInterno1"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <select
                                            id="tipoPersonalInterno1"
                                            value={formData.tipoPersonalInterno1}
                                            onChange={handleChange}
                                            name="tipoPersonalInterno1"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Docente a tiempo completo">Docente a tiempo completo</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <select
                                            id="senescyt1"
                                            value={formData.senescyt1}
                                            onChange={handleChange}
                                            name="senescyt1"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="number"
                                            placeholder="0000000000"
                                            className="form-control"
                                            name="identificacionPersonalInterno1"
                                            onChange={handleChange}
                                            value={formData.identificacionPersonalInterno1}
                                        />
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="text"
                                            placeholder="Ingresar Texto"
                                            className="form-control"
                                            name="nombrePersonalInterno1"
                                            onChange={handleChange}
                                            value={formData.nombrePersonalInterno1}
                                        />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasSemanalesPersonalInterno1"
                                            onChange={handleChange}
                                            value={formData.horasSemanalesPersonalInterno1} />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasTotalesPersonalInterno1"
                                            onChange={handleChange}
                                            value={formData.horasTotalesPersonalInterno1}
                                        />
                                    </div>
                                </div>



                                <br />

                                <div className="row">
                                    <div className="col-2">
                                        <select
                                            id="rolPersonalInterno2"
                                            value={formData.rolPersonalInterno2}
                                            onChange={handleChange}
                                            name="rolPersonalInterno2"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <select
                                            id="tipoPersonalInterno2"
                                            value={formData.tipoPersonalInterno2}
                                            onChange={handleChange}
                                            name="tipoPersonalInterno2"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Docente a tiempo completo">Docente a tiempo completo</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <select
                                            id="senescyt2"
                                            value={formData.senescyt2}
                                            onChange={handleChange}
                                            name="senescyt2"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="number"
                                            placeholder="0000000000"
                                            className="form-control"
                                            name="identificacionPersonalInterno2"
                                            onChange={handleChange}
                                            value={formData.identificacionPersonalInterno2}
                                        />
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="text"
                                            placeholder="Ingresar Texto"
                                            className="form-control"
                                            name="nombrePersonalInterno2"
                                            onChange={handleChange}
                                            value={formData.nombrePersonalInterno2}
                                        />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasSemanalesPersonalInterno2"
                                            onChange={handleChange}
                                            value={formData.horasSemanalesPersonalInterno2} />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasTotalesPersonalInterno2"
                                            onChange={handleChange}
                                            value={formData.horasTotalesPersonalInterno2}
                                        />
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-2">
                                        <select
                                            id="rolPersonalInterno3"
                                            value={formData.rolPersonalInterno3}
                                            onChange={handleChange}
                                            name="rolPersonalInterno3"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <select
                                            id="tipoPersonalInterno3"
                                            value={formData.tipoPersonalInterno3}
                                            onChange={handleChange}
                                            name="tipoPersonalInterno3"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Docente a tiempo completo">Docente a tiempo completo</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <select
                                            id="senescyt3"
                                            value={formData.senescyt3}
                                            onChange={handleChange}
                                            name="senescyt3"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="number"
                                            placeholder="0000000000"
                                            className="form-control"
                                            name="identificacionPersonalInterno3"
                                            onChange={handleChange}
                                            value={formData.identificacionPersonalInterno3}
                                        />
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="text"
                                            placeholder="Ingresar Texto"
                                            className="form-control"
                                            name="nombrePersonalInterno3"
                                            onChange={handleChange}
                                            value={formData.nombrePersonalInterno3}
                                        />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasSemanalesPersonalInterno3"
                                            onChange={handleChange}
                                            value={formData.horasSemanalesPersonalInterno3} />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasTotalesPersonalInterno3"
                                            onChange={handleChange}
                                            value={formData.horasTotalesPersonalInterno3}
                                        />
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-2">
                                        <select
                                            id="rolPersonalInterno4"
                                            value={formData.rolPersonalInterno4}
                                            onChange={handleChange}
                                            name="rolPersonalInterno4"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <select
                                            id="tipoPersonalInterno4"
                                            value={formData.tipoPersonalInterno4}
                                            onChange={handleChange}
                                            name="tipoPersonalInterno4"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Docente a tiempo completo">Docente a tiempo completo</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <select
                                            id="senescyt4"
                                            value={formData.senescyt4}
                                            onChange={handleChange}
                                            name="senescyt4"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="number"
                                            placeholder="0000000000"
                                            className="form-control"
                                            name="identificacionPersonalInterno4"
                                            onChange={handleChange}
                                            value={formData.identificacionPersonalInterno4}
                                        />
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="text"
                                            placeholder="Ingresar Texto"
                                            className="form-control"
                                            name="nombrePersonalInterno4"
                                            onChange={handleChange}
                                            value={formData.nombrePersonalInterno4}
                                        />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasSemanalesPersonalInterno4"
                                            onChange={handleChange}
                                            value={formData.horasSemanalesPersonalInterno4} />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasTotalesPersonalInterno4"
                                            onChange={handleChange}
                                            value={formData.horasTotalesPersonalInterno4}
                                        />
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-2">
                                        <select
                                            id="rolPersonalInterno5"
                                            value={formData.rolPersonalInterno5}
                                            onChange={handleChange}
                                            name="rolPersonalInterno5"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <select
                                            id="tipoPersonalInterno5"
                                            value={formData.tipoPersonalInterno5}
                                            onChange={handleChange}
                                            name="tipoPersonalInterno5"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Docente a tiempo completo">Docente a tiempo completo</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <select
                                            id="senescyt5"
                                            value={formData.senescyt5}
                                            onChange={handleChange}
                                            name="senescyt5"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="number"
                                            placeholder="0000000000"
                                            className="form-control"
                                            name="identificacionPersonalInterno5"
                                            onChange={handleChange}
                                            value={formData.identificacionPersonalInterno5}
                                        />
                                    </div>

                                    <div className="col-2">
                                        <input
                                            type="text"
                                            placeholder="Ingresar Texto"
                                            className="form-control"
                                            name="nombrePersonalInterno5"
                                            onChange={handleChange}
                                            value={formData.nombrePersonalInterno5}
                                        />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasSemanalesPersonalInterno5"
                                            onChange={handleChange}
                                            value={formData.horasSemanalesPersonalInterno5} />
                                    </div>

                                    <div className="col-1">
                                        <input
                                            type="number"
                                            placeholder="00"
                                            min={0}
                                            className="form-control"
                                            name="horasTotalesPersonalInterno5"
                                            onChange={handleChange}
                                            value={formData.horasTotalesPersonalInterno5}
                                        />
                                    </div>
                                </div>

                            </div>

                            <br />
                            <button
                                className="btn btn-primary"
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