
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
//import "../style.css"
import "./personalExternoContratar.scss"
import TitleBar from "../../components/TitleBar";

import { app, auth } from "../../firebase";

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
import { AuthContext } from "../../context/AuthContext";

import { setGlobalState, useGlobalState } from "../../Helper/Context"
import { Button } from "reactstrap";

const firestore = getFirestore(app)


export default function PersonalExternoContratar(props) {

  //const correoUsuario = "lgrandab@gmail.com";

  const { currentUser } = useContext(AuthContext)

  const correoUsuario = currentUser.email;

  let navigate = useNavigate();

  const routeChange = () => {
    window.scrollTo(0, 0)
    let path = `/informacion-tecnica-proyecto`;
    navigate(path);
  }

  const dataPersonalExternoContratar = [
    {
      id: 1,
      perfilRequerido: "Perfil de asistente",
      funcion: "Asistente",
      principalesActividades: "Asistencia en actividades de investigacion",
      tiempoContratacionMeses: "6",
      numeroPersonas: "3"
    },


    // {
    //   id: 2,
    //   perfilRequerido: "Participación",
    //   funcion: "David Rojas",
    //   principalesActividades: "Solca Loja",
    //   tiempoContratacionMeses: "5",
    //   numeroPersonas: "2"
    // },


    // {
    //   id: 3,
    //   perfilRequerido: "Analista de datos",
    //   funcion: "Analista",
    //   principalesActividades: "Analisis de datos UTPL",
    //   tiempoContratacionMeses: "4",
    //   numeroPersonas: "1"
    // }
  ];

  const consolaPersonalExternoContratar = () => {
    console.log(data);
  }

  const [globalPersonalExternoContratar, setGlobalPersonalExternoContratar] = useGlobalState("personalExternoContratar");

  let dataFirebase = Object.values(globalPersonalExternoContratar.idPersonalExternoContratar)
  //const [data, setData] = useState(dataPersonalExternoCooperante);
  
  const [data, setData] = useState([...dataFirebase] ? [...dataFirebase] : { ...dataPersonalExternoContratar });


  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [personalExternoContratarSeleccionado, setPersonalExternoCooperanteSeleccionado] = useState({
    id: '',
    perfilRequerido: '',
    funcion: '',
    principalesActividades: ''
  });

  const seleccionarPersonal = (elemento, caso) => {
    setPersonalExternoCooperanteSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setPersonalExternoCooperanteSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(personalExternoContratarSeleccionado);
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map(personal => {
      if (personal.id === personalExternoContratarSeleccionado.id) {
        personal.perfilRequerido = personalExternoContratarSeleccionado.perfilRequerido;
        personal.funcion = personalExternoContratarSeleccionado.funcion;
        personal.principalesActividades = personalExternoContratarSeleccionado.principalesActividades;
        personal.tiempoContratacionMeses = personalExternoContratarSeleccionado.tiempoContratacionMeses;
        personal.numeroPersonas = personalExternoContratarSeleccionado.numeroPersonas;
      }
    })
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(personal => personal.id !== personalExternoContratarSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setPersonalExternoCooperanteSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = personalExternoContratarSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)
      await updateDoc(docuRef, {
        // kira: {
        //   personalExternoContratar: {
        //     ...data
        //   }
        // }
        personalExternoContratar: {
          ...data
        }
      })
    } catch (error) {
      console.log(error)
    }
    consolaPersonalExternoContratar();
  
    setGlobalPersonalExternoContratar(data);

    routeChange()

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
          />
          <section>
            <form
              className="form"
              onSubmit={handleSubmit}
            >
              <TitleBar />
              <div>
                <h4>
                  Personal Externo A Contratar
                </h4>
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
                    className='table table-hover'
                  >
                    <thead>
                      <tr>
                        <th>Nro.</th>
                        <th>Perfil Requerido</th>
                        <th>Función</th>
                        <th>Principales Actividades <br />a Desarrollar</th>
                        <th>Tiempo Contratación <br /> Meses</th>
                        <th>Número de personas <br /> a contratar</th>
                        <th>Acciones</th>

                      </tr>
                    </thead>
                    <tbody>
                      {data.map(elemento => (
                        <tr key={elemento.id}>
                          <td key={elemento.id}>{elemento.id}</td>
                          <td >{elemento.perfilRequerido}</td>
                          <td >{elemento.funcion}</td>
                          <td >{elemento.principalesActividades}</td>
                          <td >{elemento.tiempoContratacionMeses}</td>
                          <td >{elemento.numeroPersonas}</td>

                          <td>
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
                  className='btn btn-danger'
                  onClick={() => consolaPersonalExternoContratar()}
                  type="button"

                >
                  Consola Personal Externo a Contratar
                </button> */}
                <Modal isOpen={modalEditar}>
                  <ModalHeader>
                    <div>
                      <h4>
                        Editar Personal <br />
                        Externo A Contratar
                      </h4>
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
                        value={personalExternoContratarSeleccionado &&
                          personalExternoContratarSeleccionado.id}
                      />
                      <br />


                      <label>
                        Perfil Requerido
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        name="perfilRequerido"
                        value={personalExternoContratarSeleccionado &&
                          personalExternoContratarSeleccionado.perfilRequerido}
                        onChange={handleChange}
                      />
                      < br />

                      <label htmlFor="funcion">Función</label>
                      <br />
                      <select
                        id="funcion"
                        value={personalExternoContratarSeleccionado &&
                          personalExternoContratarSeleccionado.funcion}
                        onChange={handleChange}
                        name="funcion"
                        // className="select-css"
                        className='form-control'
                      >
                        <option value="ASISTENTE">ASISTENTE</option>
                        <option value="TÉCNICO">TÉCNICO</option>
                        <option value="ANALISTA">ANALISTA</option>
                        <option value="CONSULTOR-ESPECIALISTA">CONSULTOR-ESPECIALISTA</option>
                      </select>
                      <br />

                      <label >
                        Principales actividades a desarrollar
                      </label>

                      <input
                        className='form-control'
                        type="text"
                        name="principalesActividades"
                        value={personalExternoContratarSeleccionado &&
                          personalExternoContratarSeleccionado.principalesActividades}
                        onChange={handleChange}
                      />
                      <br />

                      <label>
                        Tiempo de Contratación (Meses)
                      </label>

                      <input
                        className='form-control'
                        type="number"
                        min={0}
                        name="tiempoContratacionMeses"
                        value={personalExternoContratarSeleccionado
                          && personalExternoContratarSeleccionado.tiempoContratacionMeses}
                        onChange={handleChange}
                      />
                      <br />

                      <label>
                        Número de personas a Contratar
                      </label>

                      <input
                        className='form-control'
                        type="number"
                        min={0}
                        name="numeroPersonas"
                        value={personalExternoContratarSeleccionado
                          && personalExternoContratarSeleccionado.numeroPersonas}
                        onChange={handleChange}
                      />
                      <br />

                    </div>
                  </ModalBody>
                  <ModalFooter
                    className="modal-footer-pg">
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
                    {personalExternoContratarSeleccionado &&
                      personalExternoContratarSeleccionado.perfilRequerido}
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
                        Personal Externo a Contratar
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
                      <label>
                        Perfil Requerido
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        name="perfilRequerido"
                        value={personalExternoContratarSeleccionado ?
                          personalExternoContratarSeleccionado.perfilRequerido : ''}
                        onChange={handleChange}
                      />

                      < br />

                      <label htmlFor="funcion">Función</label>
                      <br />
                      <select
                        id="funcion"
                        value={personalExternoContratarSeleccionado ?
                          personalExternoContratarSeleccionado.funcion : ''}
                        onChange={handleChange}
                        name="funcion"
                        // className="select-css"
                        className='form-control'
                      >
                        <option value="ASISTENTE">ASISTENTE</option>
                        <option value="TÉCNICO">TÉCNICO</option>
                        <option value="ANALISTA">ANALISTA</option>
                        <option value="CONSULTOR-ESPECIALISTA">CONSULTOR-ESPECIALISTA</option>
                      </select>
                      <br />

                      <label>
                        Principales Actividades a desarrollar
                      </label>
                      <input
                        className='form-control'
                        type="text"
                        name="principalesActividades"
                        value={personalExternoContratarSeleccionado ?
                          personalExternoContratarSeleccionado.principalesActividades : ''}
                        onChange={handleChange}

                      />
                      <br />

                      <label>
                        Tiempo de Contratación (Meses)
                      </label>
                      <input
                        className='form-control'
                        type="number"
                        min={0}
                        name="tiempoContratacionMeses"
                        value={personalExternoContratarSeleccionado ?
                          personalExternoContratarSeleccionado.tiempoContratacionMeses : ''}
                        onChange={handleChange}

                      />
                      <br />

                      <label>
                        Número de Personas a Contratar
                      </label>
                      <input
                        className='form-control'
                        type="number"
                        min={0}
                        name="numeroPersonas"
                        value={personalExternoContratarSeleccionado ?
                          personalExternoContratarSeleccionado.numeroPersonas : ''}
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
                  </ModalFooter>
                </Modal>
              </div>
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
