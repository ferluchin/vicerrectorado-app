import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import "../style.css";

export default function PersonalExternoCooperante() {
    const dataPersonalExternoCooperante = [
        {
            id: 1,
            rol: "Tutor/Asesor",
            nombres: "Jose Hurtado",
            entidad: "Ediloja",
        },


        {
            id: 2,
            rol: "Participación",
            nombres: "David Rojas",
            entidad: "Solca Loja",
        }
    ];

    const [data, setData] = useState(dataPersonalExternoCooperante);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);



    const [personalExternoCooperanteSeleccionado, setPersonalExternoCooperanteSeleccionado] = useState({
        id: '',
        rol: '',
        nombres: '',
        entidad: ''
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
        console.log(personalExternoCooperanteSeleccionado);
    }

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(personal => {
            if (personal.id === personalExternoCooperanteSeleccionado.id) {
                personal.rol = personalExternoCooperanteSeleccionado.rol;
                personal.nombres = personalExternoCooperanteSeleccionado.nombres;
                personal.entidad = personalExternoCooperanteSeleccionado.entidad;
            }
        })
        setData(dataNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setData(data.filter(personal => personal.id !== personalExternoCooperanteSeleccionado.id));
        setModalEliminar(false);
    }

    const abrirModalInsertar = () => {
        setPersonalExternoCooperanteSeleccionado(null);
        setModalInsertar(true);

    }

    const insertar = () => {
        var valorInsertar = personalExternoCooperanteSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    return (
        <div className="col-12">
            <h4>
                Personal Externo Cooperante
            </h4>
            <br />

            <button
                className='btn btn-success'
                onClick={() => abrirModalInsertar()}
                type="button"
            >
                Insertar
            </button>
            <div
                //className="table-responsive"
                className="table-responsive"

            >

                <table
                    // className='table table-bordered'
                    className='table table-hover'

                >
                    <thead>
                        <tr>
                            <th>Nro.</th>
                            <th>ROL</th>
                            <th>Nombres Completos</th>
                            <th>Entidad</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(elemento => (
                            <tr key={elemento.id}>
                                <td className="tg-0lax">{elemento.id}</td>
                                <td className="tg-0lax">{elemento.rol}</td>
                                <td className="tg-0lax">{elemento.nombres}</td>
                                <td className="tg-0lax">{elemento.entidad}</td>
                                <td className="tg-0lax" style={{ width: "fit-content" }}>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => seleccionarPersonal(elemento, 'Editar')}
                                        type="button"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => seleccionarPersonal(elemento, 'Eliminar')}
                                        type="button"
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h4>
                            Editar Personal <br />
                            Externo Cooperante
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
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.id}
                        />
                        <br />



                        <label htmlFor="rol">ROL</label>
                        <br />
                        <select
                            id="rol"
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.rol}
                            onChange={handleChange}
                            name="rol"
                            // className="form-select"
                            className='form-control'

                        >
                            <option value="Tutor/ Asesor">Tutor/ Asesor</option>
                            <option value="Participación">Participación</option>

                        </select>
                        {/* 
                        <label>
                            ROL
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            name="rol"
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.rol}
                            onChange={handleChange}
                        />
                        < br /> */}

                        <label>
                            Nombres Completos
                        </label>

                        <input
                            className='form-control'
                            type="text"
                            name="nombres"
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.nombres}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Entidad
                        </label>

                        <input
                            className='form-control'
                            type="text"
                            name="entidad"
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.entidad}
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
                    {personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.rol}
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
                            Insertar nuevo registro <br /> Personal Externo Cooperante
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
                        <label htmlFor="rol">ROL</label>
                        <br />
                        <select
                            id="rol"
                            value={personalExternoCooperanteSeleccionado && personalExternoCooperanteSeleccionado.rol}
                            onChange={handleChange}
                            name="rol"
                            // className="form-select"
                            className='form-control'

                        >
                            <option value="Tutor/ Asesor">Tutor/ Asesor</option>
                            <option value="Participación">Participación</option>

                        </select>


                        <label>Nombres Completos</label>
                        <input
                            className='form-control'
                            type="text"
                            name="nombres"
                            value={personalExternoCooperanteSeleccionado ? personalExternoCooperanteSeleccionado.nombres : ''}
                            onChange={handleChange}

                        />
                        <br />

                        <label>
                            Entidad
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            name="entidad"
                            value={personalExternoCooperanteSeleccionado ? personalExternoCooperanteSeleccionado.entidad : ''}
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
    )
}

/*
            < br />

            <label htmlFor="funcion">Función</label>
            <br />
            <select
              id="funcion"
              value={personalExternoContratarSeleccionado && personalExternoContratarSeleccionado.funcion}
              onChange={handleChange}
              name="funcion"
              // className="form-select"
              className='form-control'

            >
              <option value="ASISTENTE">ASISTENTE</option>
              <option value="TÉCNICO">TÉCNICO</option>
              <option value="ANALISTA">ANALISTA</option>
              <option value="CONSULTOR-ESPECIALISTA">CONSULTOR-ESPECIALISTA</option>

            </select>
            */