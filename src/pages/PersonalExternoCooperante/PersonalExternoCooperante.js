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
import "./personalExternoCooperante.scss";
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

export default function PersonalExternoCooperante(props) {

    const [nodes, setNodes] = useState({});
    const [isLoading, setLoading] = useState(true);
    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/personal-externo-contratar`;
        navigate(path);
    }


    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email

    const formInicial = {
        
        //PERSONAL EXTERNO COOPERANTE
        
        rolPersonalCooperante1: "",
        rolPersonalCooperante2: "",
        rolPersonalCooperante3: "",
        rolPersonalCooperante4: "",
        rolPersonalCooperante5: "",

        nombrePersonalCooperante1: "",
        nombrePersonalCooperante2: "",
        nombrePersonalCooperante3: "",
        nombrePersonalCooperante4: "",
        nombrePersonalCooperante5: "",

        entidadPersonalCooperante1: "",
        entidadPersonalCooperante2: "",
        entidadPersonalCooperante3: "",
        entidadPersonalCooperante4: "",
        entidadPersonalCooperante5: "",
    }

    const [globalPersonalExternoCooperante, setGlobalPersonalExternoCooperante] = useGlobalState("personalExternoCooperante");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");

    const [formData, setFormData] = useState({ ...globalPersonalExternoCooperante } ? { ...globalPersonalExternoCooperante } : { ...formInicial })
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
                ["personalExternoCooperante"+globalAuxiliar]: {
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
        setGlobalPersonalExternoCooperante({ ...formData })

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
        <div className="personal-externo-cooperante">
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
                                    Personal Externo Cooperante
                                </h4>
                                <br />


                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                            <label>
                                                Nro.
                                            </label>
                                        </div>

                                        <div className="col-3">
                                            <label>
                                                ROL.
                                            </label>
                                        </div>

                                        <div className="col-4">
                                            <label>
                                                Nombres Completos.
                                            </label>
                                        </div>

                                        <div className="col-4">
                                            <label>
                                                Entidad.
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

                                        <div className="col-3">
                                            <select
                                                id="rolPersonalCooperante1"
                                                value={formData.rolPersonalCooperante1}
                                                onChange={handleChange}
                                                name="rolPersonalCooperante1"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Tutor / Asesor.">Tutor / Asesor.</option>
                                                <option value="Participación.">Participación.</option>

                                            </select>
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombrePersonalCooperante1"
                                                onChange={handleChange}
                                                value={formData.nombrePersonalCooperante1}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="entidadPersonalCooperante1"
                                                onChange={handleChange}
                                                value={formData.entidadPersonalCooperante1}
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

                                        <div className="col-3">
                                            <select
                                                id="rolPersonalCooperante2"
                                                value={formData.rolPersonalCooperante2}
                                                onChange={handleChange}
                                                name="rolPersonalCooperante2"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Tutor / Asesor.">Tutor / Asesor.</option>
                                                <option value="Participación.">Participación.</option>

                                            </select>
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombrePersonalCooperante2"
                                                onChange={handleChange}
                                                value={formData.nombrePersonalCooperante2}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="entidadPersonalCooperante2"
                                                onChange={handleChange}
                                                value={formData.entidadPersonalCooperante2}
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

                                        <div className="col-3">
                                            <select
                                                id="rolPersonalCooperante3"
                                                value={formData.rolPersonalCooperante3}
                                                onChange={handleChange}
                                                name="rolPersonalCooperante3"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Tutor / Asesor.">Tutor / Asesor.</option>
                                                <option value="Participación.">Participación.</option>

                                            </select>
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombrePersonalCooperante3"
                                                onChange={handleChange}
                                                value={formData.nombrePersonalCooperante3}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="entidadPersonalCooperante3"
                                                onChange={handleChange}
                                                value={formData.entidadPersonalCooperante3}
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

                                        <div className="col-3">
                                            <select
                                                id="rolPersonalCooperante4"
                                                value={formData.rolPersonalCooperante4}
                                                onChange={handleChange}
                                                name="rolPersonalCooperante4"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Tutor / Asesor.">Tutor / Asesor.</option>
                                                <option value="Participación.">Participación.</option>

                                            </select>
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombrePersonalCooperante4"
                                                onChange={handleChange}
                                                value={formData.nombrePersonalCooperante4}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="entidadPersonalCooperante4"
                                                onChange={handleChange}
                                                value={formData.entidadPersonalCooperante4}
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

                                        <div className="col-3">
                                            <select
                                                id="rolPersonalCooperante5"
                                                value={formData.rolPersonalCooperante5}
                                                onChange={handleChange}
                                                name="rolPersonalCooperante5"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Tutor / Asesor.">Tutor / Asesor.</option>
                                                <option value="Participación.">Participación.</option>

                                            </select>
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="nombrePersonalCooperante5"
                                                onChange={handleChange}
                                                value={formData.nombrePersonalCooperante5}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder="Ingresar Texto"
                                                className="form-control"
                                                name="entidadPersonalCooperante5"
                                                onChange={handleChange}
                                                value={formData.entidadPersonalCooperante5}
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
