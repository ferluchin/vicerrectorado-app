
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


//import "../style.css"

export default function TablaCronograma() {
    const dataPersonalCronogramaActividades = [
        {
            id: 1,
            actividades: "Perfil de asistente",
            fechaInicio: "Asistente",
            fechaFin: "Asistencia en actividades de investigacion",
            nombreEvidencia: "6",
            valorPresupuesto: "3",
            itemPresupuesto: "3",
            nombreResponsableActividad: "Lopez Lopez"

        },



    ];

    // id: 1,
    //     actividades: "Perfil de asistente",
    //         fechaInicio: "Asistente",
    //             fechaFin: "Asistencia en actividades de investigacion",
    //                 nombreEvidencia: "6",
    //                     valorPresupuesto: "3",
    //                         itemPresupuesto: "3",
    //                             nombreResponsableActividad: "Lopez Lopez"


    const [data, setData] = useState(dataPersonalCronogramaActividades);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);



    const [personalCronogramaActividadesSeleccionado, setPersonalCronogramaActividadesSeleccionado] = useState({
        id: '',
        actividades: '',
        fechaInicio: '',
        fechaFin: '',
        nombreEvidencia: '',
        valorPresupuesto: '',
        itemPresupuesto: '',
        nombreResponsableActividad: ''
    });

    const seleccionarPersonal = (elemento, caso) => {
        setPersonalCronogramaActividadesSeleccionado(elemento);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPersonalCronogramaActividadesSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(personalCronogramaActividadesSeleccionado);
    }

    // id: 1,
    // actividades: "Perfil de asistente",
    // fechaInicio: "Asistente",
    // fechaFin: "Asistencia en actividades de investigacion",
    // nombreEvidencia: "6",
    // valorPresupuesto: "3",
    // itemPresupuesto: "3",
    // nombreResponsableActividad: "Lopez Lopez"

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(personal => {
            if (personal.id === personalCronogramaActividadesSeleccionado.id) {
                personal.actividades = personalCronogramaActividadesSeleccionado.actividades;
                personal.fechaInicio = personalCronogramaActividadesSeleccionado.fechaInicio;
                personal.fechaFin = personalCronogramaActividadesSeleccionado.fechaFin;
                personal.nombreEvidencia = personalCronogramaActividadesSeleccionado.nombreEvidencia;
                personal.valorPresupuesto = personalCronogramaActividadesSeleccionado.valorPresupuesto;
                personal.itemPresupuesto = personalCronogramaActividadesSeleccionado.itemPresupuesto;
                personal.nombreResponsableActividad = personalCronogramaActividadesSeleccionado.nombreResponsableActividad;
            }
        })
        setData(dataNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setData(data.filter(personal => personal.id !== personalCronogramaActividadesSeleccionado.id));
        setModalEliminar(false);
    }

    const abrirModalInsertar = () => {
        setPersonalCronogramaActividadesSeleccionado(null);
        setModalInsertar(true);

    }

    const insertar = () => {
        var valorInsertar = personalCronogramaActividadesSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    return (
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
                            <th>Actividades</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Nombre Evidencia <br /> Medio de verificación</th>
                            <th>Valor de Presupuesto</th>
                            <th>Item de Presupuesto</th>
                            <th>Nombre responsable actividad.</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    {/* // id: 1,
                        // actividades: "Perfil de asistente",
                        // fechaInicio: "Asistente",
                        // fechaFin: "Asistencia en actividades de investigacion",
                        // nombreEvidencia: "6",
                        // valorPresupuesto: "3",
                        // itemPresupuesto: "3",
                        // nombreResponsableActividad: "Lopez Lopez" */}
                    <tbody>
                        {data.map(elemento => (
                            <tr key={elemento.id}>
                                <td key={elemento.id}>{elemento.id}</td>
                                <td >{elemento.actividades}</td>
                                <td >{elemento.fechaInicio}</td>
                                <td >{elemento.fechaFin}</td>
                                <td >{elemento.nombreEvidencia}</td>
                                <td >{elemento.valorPresupuesto}</td>
                                <td >{elemento.itemPresupuesto}</td>
                                <td >{elemento.nombreResponsableActividad}</td>
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

            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h4>
                            Editar Cronograma <br />
                            de Actividades
                        </h4>
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
                            name='id'
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.id}
                        />
                        <br />


                        <label htmlFor="actividades">
                            Actividades
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            name="actividades"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.actividades}
                            onChange={handleChange}
                        />
                        < br />

                        <label htmlFor="fechaInicio">Fecha de Inicio</label>
                        <br />
                        <input
                            className='form-control'
                            type="date"
                            name="fechaInicio"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.fechaInicio}
                            onChange={handleChange}
                        />
                        <br />
                        <label >
                            Fecha de Finalización
                        </label>

                        <input
                            className='form-control'
                            type="date"
                            name="fechaFin"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.fechaFin}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Nombre Evidencia <br />
                            Medio de verificación
                        </label>

                        <input
                            className='form-control'
                            type="text"
                            name="nombreEvidencia"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.nombreEvidencia}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Valor de Presupuesto
                        </label>

                        <input
                            className='form-control'
                            type="number"
                            min={0}
                            name="valorPresupuesto"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.valorPresupuesto}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Item de Presupuesto
                        </label>

                        <input
                            className='form-control'
                            type="text"
                            name="itemPresupuesto"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.itemPresupuesto}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Nombre responsable de la actividad <br />
                            (debe ser parte del equipo de proyecto)
                        </label>

                        <input
                            className='form-control'
                            type="text"
                            name="nombreResponsableActividad"
                            value={personalCronogramaActividadesSeleccionado
                                && personalCronogramaActividadesSeleccionado.nombreResponsableActividad}
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
                    {personalCronogramaActividadesSeleccionado && personalCronogramaActividadesSeleccionado.perfilRequerido}
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
                            Insertar nuevo registro <br /> Cronograma Actividades
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
                            Actividades
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            name="actividades"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.actividades : ''}
                            onChange={handleChange}
                        />

                        < br />

                        <label htmlFor="fechaInicio">
                            Fecha Inicio
                        </label>

                        <input
                            className='form-control'
                            type="date"
                            name="fechaInicio"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.fechaInicio : ''}
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="fechaFin">
                            Fecha de Finalización
                        </label>
                        <input
                            className='form-control'
                            type="date"
                            name="principalesActividades"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.principalesActividades : ''}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            Nombre Evidencia <br />
                            Medio de Verificación
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            name="nombreEvidencia"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.nombreEvidencia : ''}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Valor Presupuesto
                        </label>
                        <input
                            className='form-control'
                            type="number"
                            min={0}
                            name="valorPresupuesto"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.valorPresupuesto : ''}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Item Presupuesto
                        </label>
                        <input
                            className='form-control'
                            type="number"
                            min={0}
                            name="itemPresupuesto"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.itemPresupuesto : ''}
                            onChange={handleChange}
                        />
                        <br />

                        <label>
                            Nombre responsable de la actividad
                        </label>
                        <input
                            className='form-control'
                            type="text"
                            min={0}
                            name="nombreResponsableActividad"
                            value={personalCronogramaActividadesSeleccionado ?
                                personalCronogramaActividadesSeleccionado.nombreResponsableActividad : ''}
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
