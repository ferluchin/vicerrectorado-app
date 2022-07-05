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


// const db = getFirestore();

// import NavBar from "../NavBar";

const firestore = getFirestore(app);

export default function PersonalInterno() {

    const { currentUser } = useContext(AuthContext)

    const correoUsuario = currentUser.email;

    //const correoUsuario = "lgrandab@gmail.com";

    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/personal-externo-cooperante`;
        navigate(path);
    }

    const dataPersonalInicial = [
        {
            id: 1,
            rol: "Dirección",
            tipo: "Docente a tiempo completo",
            senescyt: "SI",
            identificacion: 1102365993,
            nombres: "Luis Granda",
            horasSemanales: "00",
            horasTotales: "00"
        },
        //{ id: 2, rol: "Co-Dirección", tipo: "Docente a tiempo completo", senescyt: "SI", identificacion: 1499332590, nombres: "Charlie Cárdemas", horasSemanales: "00", horasTotales: "00" },
        // { id: 3, rol: "Participación", tipo: "Técnico Docente", senescyt: "SI", identificacion: 1121354698, nombres: "Maximo Décimo", horasSemanales: "00", horasTotales: "00" },
        // { id: 4, rol: "Participación", tipo: "Estudiante", senescyt: "NO", identificacion: 1101258746, nombres: "Marie Curie", horasSemanales: "00", horasTotales: "00" },

    ];
    const [globalPersonalInterno, setGlobalPersonalInterno] = useGlobalState("personalInterno");
    //const [globalPersonalInterno, setGlobalPersonalInterno] = useGlobalState("personalInterno");

    console.log("globalPersonalInterno", globalPersonalInterno);

    let dataFirebase = Object.values(globalPersonalInterno.idPersonalInterno)


    //const [data, setData] = useState(dataPersonalInicial);
    //const [data, setData] = React.useState({ ...[globalPersonalInterno.idPersonalInterno] } ? { ...[globalPersonalInterno.idPersonalInterno] } : { ...dataPersonalInicial })
    //const [data, setData] = useState([{ ...dataFirebase }] ? [{ ...dataFirebase }] : { ...dataPersonalInicial })
    const [data, setData] = useState([...dataFirebase] ? [...dataFirebase] : { ...dataPersonalInicial })



    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);



    const [personalSeleccionado, setPersonalSeleccionado] = useState({
        id: '',
        rol: '',
        tipo: '',
        senescyt: '',
        identificacion: '',
        nombres: '',
        horasSemanales: '',
        horasTotales: ''
    });


    function logeoDatos(event) {
        console.log(globalPersonalInterno);


        let result = Object.values(globalPersonalInterno.idPersonalInterno)
        //result = result.horasSemanales
        console.log("RESULT", result)

        console.log("🚀 ~ file: PersonalInterno.js ~ line 87 ~ PersonalInterno ~ dataFirebase", dataFirebase)

        // Object.keys(globalPersonalInterno).map((key, i) => {
        //     key = { i }
        //     //{ key } : { val }
        //     console.log(key);
        //     console.log("globalPersonalInterno[key]", globalPersonalInterno[key]);

        // })



        //console.log("SET FORM DATA", ...data)

        console.log("🚀 ~ file: PersonalInterno.js ~ line 78 ~ PersonalInterno ~ dataPersonalInicial", dataPersonalInicial)

    }

    const seleccionarPersonal = (elemento, caso) => {
        setPersonalSeleccionado(elemento);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPersonalSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(personalSeleccionado);
    }

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(personal => {
            if (personal.id === personalSeleccionado.id) {
                personal.rol = personalSeleccionado.rol;
                personal.tipo = personalSeleccionado.tipo;
                personal.senescyt = personalSeleccionado.senescyt;
                personal.identificacion = personalSeleccionado.identificacion;
                personal.nombres = personalSeleccionado.nombres;
                personal.horasSemanales = personalSeleccionado.horasSemanales;
                personal.horasTotales = personalSeleccionado.horasTotales;

            }
        })
        setData(dataNueva);
        setModalEditar(false);
    }

    const consolaPersonalInterno = () => {
        console.log(data)
    }

    const eliminar = () => {
        setData(data.filter(personal => personal.id !== personalSeleccionado.id));
        setModalEliminar(false);
    }

    const abrirModalInsertar = () => {
        setPersonalSeleccionado(null);
        setModalInsertar(true);

    }

    const insertar = () => {
        var valorInsertar = personalSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
            await updateDoc(docuRef, {
                personalInterno: {
                    ...data
                }
            })
        } catch (error) {
            console.log(error)
        }
        consolaPersonalInterno();

        // setGlobalPersonalInterno(
        //     [...data]
        // );

        console.log("globalPersonalInterno", globalPersonalInterno);

        // let dataFirebaseFinal = Object.values(...data)

        // setGlobalPersonalInterno({
        //     ...dataFirebaseFinal
        // })


        routeChange()
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
                        {/* <NavBar /> */}

                        <div
                            //className="App"
                            className="col-12"

                        >
                            <h2>
                                Equipo del Proyecto - Personal Interno
                            </h2>
                            <br />
                            <button
                                className='btn btn-success'
                                onClick={() => abrirModalInsertar()}
                                type="button"
                            >
                                Insertar
                            </button>
                            <br />
                            <br />
                            <div
                                className="table-responsive"
                            >

                                <table
                                    //className='table table-bordered'
                                    className="table table-hover"
                                >
                                    <thead
                                        className="thead-dark"
                                    >
                                        <tr>
                                            <th>Nro.</th>
                                            <th>ROL</th>
                                            <th>TIPO</th>
                                            <th>Investigadores Acreditados <br />
                                                SENESCYT</th>
                                            <th>Identificación</th>
                                            <th>Nombres y Apellidos</th>
                                            <th>Horas Semanales <br />de Participación</th>
                                            <th>Total Horas <br />
                                                Participación  <br />
                                                en el Proyecto</th>
                                            <th>Acciones Eliminar / Editar</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(elemento => (
                                            <tr key={elemento.id}>
                                                <td style={{ whiteSpace: "nowrap" }}>{elemento.id}</td>
                                                <td>{elemento.rol}</td>
                                                <td>{elemento.tipo}</td>
                                                <td>{elemento.senescyt}</td>
                                                <td>{elemento.identificacion}</td>
                                                <td>{elemento.nombres}</td>
                                                <td>{elemento.horasSemanales}</td>
                                                <td>{elemento.horasTotales}</td>

                                                <td style={{ width: "100%" }}>
                                                    <button
                                                        className='btn btn-primary'
                                                        onClick={() => seleccionarPersonal(elemento, 'Editar')}
                                                        type="button"
                                                    >
                                                        ✍️
                                                    </button>

                                                    <button
                                                        className='btn btn-warning'
                                                        onClick={() => seleccionarPersonal(elemento, 'Eliminar')}
                                                        type="button"
                                                    >
                                                        ❌
                                                    </button>

                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <button
                                    className='btn btn-primary'
                                    //onClick={() => editar()}
                                    onClick={() => consolaPersonalInterno()}
                                    type="button"
                                >
                                    Consolear los datos tabla
                                </button> */}
                            <Modal isOpen={modalEditar}>
                                <ModalHeader>
                                    <div>
                                        <h3>
                                            Editar Personal
                                        </h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className='form-group'>
                                        <label>ID</label>
                                        <input
                                            className='form-control'
                                            readOnly
                                            type="text"
                                            name='id'
                                            value={personalSeleccionado &&
                                                personalSeleccionado.id}
                                        />
                                        <br />

                                        <label htmlFor='rol'>
                                            ROL
                                        </label>

                                        <select
                                            id="rol"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.rol : ''}
                                            onChange={handleChange}
                                            name="rol"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                        < br />

                                        <label htmlFor='tipo'>
                                            TIPO
                                        </label>

                                        <select
                                            id="tipo"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.tipo : ''}
                                            onChange={handleChange}
                                            name="tipo"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="Docente a tiempo Completo">Docente a tiempo Completo</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                            <option value="Estudiante">Estudiante</option>
                                        </select>
                                        <br />

                                        <label htmlFor='senescyt'>
                                            Investigadores Acreditados <br />
                                            SENESCYT
                                        </label>

                                        <select
                                            id="senescyt"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.senescyt : ''}
                                            onChange={handleChange}
                                            name="senescyt"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>

                                        <br />

                                        <label>
                                            Identificación
                                        </label>

                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="identificacion"
                                            value={personalSeleccionado &&
                                                personalSeleccionado.identificacion}
                                            onChange={handleChange}
                                        />
                                        <br />

                                        <label>
                                            Nombres y Apellidos
                                        </label>

                                        <input
                                            className='form-control'
                                            type="text"
                                            name="nombres"
                                            value={personalSeleccionado &&
                                                personalSeleccionado.nombres}
                                            onChange={handleChange}
                                        />
                                        <br />

                                        <label>
                                            Horas Semanales <br />
                                            de Participación
                                        </label>

                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="horasSemanales"
                                            value={personalSeleccionado &&
                                                personalSeleccionado.horasSemanales}
                                            onChange={handleChange}
                                        />
                                        <br />

                                        <label>
                                            Total Horas <br />
                                            Participación <br />
                                            en el Proyecto.
                                        </label>

                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="horasTotales"
                                            value={personalSeleccionado &&
                                                personalSeleccionado.horasTotales}
                                            onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                </ModalBody>
                                <ModalFooter
                                    className="modal-footer-pg"
                                >
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => editar()}
                                        type="button"
                                    >
                                        Actualizar
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => setModalEditar(false)}
                                        type="button"
                                    >
                                        Cancelar
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalEliminar}>
                                <ModalBody >
                                    ¿Estás seguro que deseas eliminar el registro seleccionado?
                                    {personalSeleccionado &&
                                        personalSeleccionado.rol}
                                </ModalBody>
                                <ModalFooter
                                    className="modal-footer-pg"
                                >
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => eliminar()}
                                        type="button"
                                    >
                                        Sí
                                    </button>
                                    <button
                                        className='btn btn-secondary'
                                        onClick={() => setModalEliminar(false)}
                                        type="button"
                                    >
                                        No
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalInsertar}>
                                <ModalHeader>
                                    <div>
                                        <h3>
                                            Insertar nuevo registro <br />
                                            Personal Interno
                                        </h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className='form-group'>
                                        <label>
                                            ID
                                        </label>
                                        <input
                                            className='form-control'
                                            readOnly
                                            type="text"
                                            name="id"
                                            value={data[data.length - 1].id + 1}
                                        />

                                        <br />
                                        <label htmlFor='rol'>
                                            ROL
                                        </label>

                                        <select
                                            id="rol"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.rol : ''}
                                            onChange={handleChange}
                                            name="rol"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="Dirección">Dirección</option>
                                            <option value="Co-Dirección">Co-Dirección</option>
                                            <option value="Participación">Participación</option>
                                        </select>
                                        <br />

                                        <label htmlFor='tipo'>
                                            TIPO
                                        </label>

                                        <select
                                            id="tipo"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.tipo : ''}
                                            onChange={handleChange}
                                            name="tipo"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="Docente a tiempo Completo">Docente a tiempo Completo</option>
                                            <option value="Técnico Docente">Técnico Docente</option>
                                            <option value="Estudiante">Estudiante</option>
                                        </select>

                                        <br />

                                        <label htmlFor='senescyt'>
                                            Investigadores Acreditados <br />
                                            SENESCYT
                                        </label>

                                        <select
                                            id="senescyt"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.senescyt : ''}
                                            onChange={handleChange}
                                            name="senescyt"
                                            className="form-control"
                                        >
                                            <option value=""> Selecciona una opción </option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>


                                        <br />
                                        <label>Identificación</label>
                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="identificacion"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.identificacion : ''}
                                            onChange={handleChange}

                                        />
                                        <br />

                                        <label>Nombres y Apellidos</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            name="nombres"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.nombres : ''}
                                            onChange={handleChange}

                                        />
                                        <br />

                                        <label>
                                            Horas Semanales <br />
                                            de Participación
                                        </label>
                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="horasSemanales"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.horasSemanales : ''}
                                            onChange={handleChange}

                                        />
                                        <br />

                                        <label>
                                            Total Horas <br />
                                            Participación <br />
                                            en el Proyecto.
                                        </label>
                                        <input
                                            className='form-control'
                                            type="number"
                                            min={0}
                                            name="horasTotales"
                                            value={personalSeleccionado ?
                                                personalSeleccionado.horasTotales : ''}
                                            onChange={handleChange}

                                        />
                                        <br />

                                    </div>
                                </ModalBody>
                                <ModalFooter
                                    className="modal-footer-pg"
                                >
                                    {/* <div > */}

                                    <button
                                        className='btn btn-primary'
                                        onClick={() => insertar()}
                                        type="button"
                                    >
                                        Insertar
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => setModalInsertar(false)}
                                        type="button"
                                    >
                                        Cancelar
                                    </button>
                                    {/* </div> */}
                                </ModalFooter>
                            </Modal>
                            <br />
                        </div>

                        <Button
                            className="btn btn-primary"
                            type="button"
                            onClick={logeoDatos}

                        >
                            Consoleo datos
                        </Button>
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