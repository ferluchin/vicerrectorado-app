import React from "react";
import TitleBar from "../../Componentes/TitleBar";
import AutocompleteDocente from "./AutocompleteDocente";
import Moment from 'react-moment';

import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss'

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import Split from "react-split";
import Sidebar from "../../Componentes/Sidebar";


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

import { app } from "../../firebase";

const db = getFirestore();

export default function Home() {

    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/tipo-proyecto`;
        navigate(path);
    }


    const formInicial = {
        titulo: "",
        facultad: "",
        departamento: "",
        grupoInvestigacion: "",

        dominioAcademico: "",
        lineaInvestigacion: "",
        programaInvestigacion: "",

        fechaInicio: "",
        fechaFin: "",
        duracionProyectoSemanas: "",

        alcanceTerritorial: "",
        // Datos del Director del Proyecto 
        nombreDirectorProyecto: "",
        identificacionDirectorProyecto: "",
        telefonoDirectorProyecto: "",
        correoInstitucional: "",

        //Areas del conocimiento de acuerdo a organismos internacionales 
        actividadCientifica: "",
        objetivoSocioEconomico: "",
        areaTematicaID: "",
        objetivosPlanCreacionOportunidades: "",

        //Clasificacion internacional Normalizada de la educación
        campoAmplio: "",
        campoEspecifico: "",
        campoDetallado: "",
        objetivosDesarrolloSostenible: "",
    }

    const [formData, setFormData] = React.useState({ ...formInicial })

    // const [formData, setFormData] = React.useState(
    //)


    //function calculateDaysLeft() {

    function calculateDaysLeft() {
        var given = Moment("2023-03-10", "YYYY-MM-DD");
        var current = Moment().startOf('day');

        //Difference in number of days
        let amount = Moment.duration(given.diff(current)).asDays();
        //let { startDate, endDate } = this.state;
        //let fechaInicio = (formData.fechaInicio).toDate();

        /*
                let fechaInicio = Moment(formData.fechaInicio)
                let fechaFin = Moment(formData.fechaFin)
                console.log(fechaInicio);
                console.log(fechaFin);
                
                */
        //let amount = endDate.diff(startDate, 'days');
        //let amount = fechaFin.diff(fechaInicio, 'days');

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                duracionProyectoSemanas: (amount / 7)
            }


        })
        console.log("🚀 ~ file: Home.js ~ line 55 ~ calculateDaysLeft ~ duracionProyectoSemanas", formData.duracionProyectoSemanas)

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
    /*
        function handleSubmit(event) {
            event.preventDefault()
            // submitToApi(formData)
            console.log(formData)
        }
    */
    const handleSubmit = async (event) => {
        event.preventDefault()
        // submitToApi(formData)
        try {
            await addDoc(collection(db, 'proyectos-investigacion'), {
                ...formData
            })
        } catch (error) {
            console.log(error)
        }
        console.log(formData)
        setFormData({ ...formInicial })
        routeChange()
    }

    return (

        <div className="home">
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

                    <form
                        className="form"
                        onSubmit={handleSubmit}
                    >


                        <TitleBar />

                        <br />

                        <div className="container">
                            {/* <form
                className="form"
                onSubmit={handleSubmit}
            > */}
                            {/* <div> */}

                            {/* <NavBar /> */}
                            <h4>1.  Información General.</h4> {<br />}
                            <div className="mb-3 row">

                                <h5 className="col-sm-2">
                                    Titulo
                                </h5>
                                {/* <label
                        className="col-sm-2 col-form-label"
                    >
                        Título.
                    </label> */}
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        placeholder="Ingresar Texto"
                                        className="form-control"
                                        name="titulo"
                                        onChange={handleChange}
                                        value={formData.titulo}
                                    />
                                </div>
                            </div>



                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Facultad
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>
                                            Departamento
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>
                                            Grupo de Investigación
                                        </h5>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-4">

                                        {/* <label
                                htmlFor="facultad"
                            >
                                Facultad
                            </label> */}

                                        <select
                                            id="facultad"
                                            value={formData.facultad}
                                            onChange={handleChange}
                                            name="facultad"
                                            className="form-select"
                                        >
                                            {/* <option value="">-- Elija un Elemento --</option> */}
                                            <option value="Ciencias Económicas y Empresariales">Ciencias Económicas y Empresariales</option>
                                            <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                            <option value="Ciencias Exactas y Naturales">Ciencias Exactas y Naturales</option>
                                            <option value="Ingenierías y Arquitectura">Ingenierías y Arquitectura</option>
                                            <option value="Ciencias Sociales, Educación y Humanidades">Ciencias Sociales, Educación y Humanidades</option>

                                        </select>
                                    </div>

                                    <div className="col-4">


                                        {/*
                            <label htmlFor="departamento">
                                Departamento
                            </label>
                            */}
                                        <select
                                            id="departamento"
                                            value={formData.departamento}
                                            onChange={handleChange}
                                            name="departamento"
                                            className="form-select" //select-css
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Química">Química</option>
                                            <option value="Geociencias">Geociencias</option>
                                            <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                            <option value="Economía">Economía</option>
                                            <option value="Ciencias Empresariales.">Ciencias Empresariales.</option>
                                            <option value="Ingeniería Civil.">Ingeniería Civil.</option>
                                            <option value="Arquitectura y Urbanismo.">Arquitectura y Urbanismo.</option>
                                            <option value="Ciencias de la Computación y Telecomunicaciones.">Ciencias de la Computación y Telecomunicaciones.</option>
                                            <option value="Ciencias Biológicas y Agropecuarias.">Ciencias Biológicas y Agropecuarias.</option>
                                            <option value="Producción.">Producción.</option>
                                            <option value="Ciencias de la Educación">Ciencias de la Educación.</option>
                                            <option value="Ciencias de la Comunicación">Ciencias de la Comunicación.</option>
                                            <option value="Filosofía, Artes y Humanidades">Filosofía, Artes y Humanidades.</option>
                                            <option value="Psicología">Psicología.</option>
                                            <option value="Ciencias Jurídicas">Ciencias Jurídicas.</option>
                                        </select>

                                    </div>

                                    <div className="col-4">

                                        <select
                                            id="grupoInvestigacion"
                                            value={formData.grupoInvestigacion}
                                            onChange={handleChange}
                                            name="grupoInvestigacion"
                                            className="form-select"
                                        >
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value="Biodiversidad de Ecosistemas Tropicales.">Biodiversidad de Ecosistemas Tropicales.</option>
                                            <option value="Comunicación y Cultura Audiovisual.">Comunicación y Cultura Audiovisual.</option>
                                            <option value="Comunicación, Educación y Tecnología.">Comunicación, Educación y Tecnología.</option>
                                            <option value="Control, Automation and Intelligent Systems.">Control, Automation and Intelligent Systems.</option>
                                            <option value="Crecimiento y desarrollo Económico">Crecimiento y desarrollo Económico</option>
                                            <option value="Economía urbana y regional.">Economía urbana y regional.</option>
                                            <option value="Estudios sobre Constitucionalismo Latinoamericano y Derechos Humanos.">Estudios sobre Constitucionalismo Latinoamericano y Derechos Humanos.</option>
                                            <option value="Gestión de la Comunicación Estratégica.">Gestión de la Comunicación Estratégica.</option>
                                            <option value="Gestión del Conocimiento en las Organizaciones.">Gestión del Conocimiento en las Organizaciones.</option>
                                            <option value="Grupo de investigación en observación turística.">Grupo de investigación en observación turística.</option>
                                            <option value="Inclusive Human Computer Interaction.">Inclusive Human Computer Interaction.</option>
                                            <option value="Inteligencia Artificial Aplicada.">Inteligencia Artificial Aplicada.</option>
                                            <option value="Knowledge-Based Systems.">Knowledge-Based Systems.</option>
                                            <option value="Laboratorio de Ecología Tropical y servicios Ecosistémicos.">Laboratorio de Ecología Tropical y servicios Ecosistémicos.</option>

                                            <option value="Microbial Systems Ecology and Evolution.">Microbial Systems Ecology and Evolution. </option>
                                            <option value="Psicología Clínica y de la Salud.">Psicología Clínica y de la Salud. </option>
                                            <option value="Aceites Esenciales del Ecuador.">Aceites Esenciales del Ecuador. </option>
                                            <option value="Arte y Entorno.">Arte y Entorno. </option>
                                            <option value="Biomedicina y  Ambiente. ">Biomedicina y  Ambiente. </option>
                                            <option value="Ciencia y Tecnología de Materiales.">Ciencia y Tecnología de Materiales. </option>
                                            <option value="Ciencia y Tradición Ancestral.">Ciencia y Tradición Ancestral. </option>
                                            <option value="Comunicación, poder y ciudadanía en red">Comunicación, poder y ciudadanía en red. </option>
                                            <option value="Conservación sustentable del patrimonio cultural y natural.">Conservación sustentable del patrimonio cultural y natural. </option>
                                            <option value="Cuidado Humanizado en Enfermería. ">Cuidado Humanizado en Enfermería. </option>
                                            <option value="Economía de Recursos Naturales, Agricultura y Medio Ambiente. ">Economía de Recursos Naturales, Agricultura y Medio Ambiente. </option>
                                            <option value="Educación Inclusiva">Educación Inclusiva </option>
                                            <option value="Educación y Familia">Educación y Familia </option>
                                            <option value="EFL Learning, Teaching and Technology.">EFL Learning, Teaching and Technology. </option>
                                            <option value="Enfoques sociales del desarrollo: Género e interculturalidad.">Enfoques sociales del desarrollo: Género e interculturalidad. </option>
                                            <option value="Estudios de Lingüística, Literatura, Educación y Cultura. ">Estudios de Lingüística, Literatura, Educación y Cultura. </option>
                                            <option value="Ética y Sociedad.">Ética y Sociedad. </option>
                                            <option value="Filosofía, Sociedad y Cultura">Filosofía, Sociedad y Cultura. </option>
                                            <option value="Finanzas y sistemas financieros">Finanzas y sistemas financieros </option>
                                            <option value="Fisicoquimica de Materiales">Fisicoquimica de Materiales</option>
                                            <option value="Gestión Contable y Control">Gestión Contable y Control </option>
                                            <option value="Gobernanza, Biodiversidad y Áreas Protegidas">Gobernanza, Biodiversidad y Áreas Protegidas</option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                            <option value=""> -- Elija un Elemento -- </option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">

                                        <h5>
                                            Dominio Académico.

                                        </h5>
                                        {/* <label htmlFor="dominioAcademico">
                                Dominio Académico.
                            </label> 

                            <br />
                            */}
                                        <select
                                            id="dominioAcademico"
                                            value={formData.dominioAcademico}
                                            onChange={handleChange}
                                            name="dominioAcademico"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Biomedicina.">Biomedicina.</option>
                                            <option value="Protección de la Salud, del bienestar y la dignidad humana.">Protección de la Salud, del bienestar y la dignidad humana.</option>
                                            <option value="Derecho, paz e impulso a la justicia social.">Derecho, paz e impulso a la justicia social.</option>
                                            <option value="Desarrollo Socioeconómico y sostenible e innovación y nueva empresa.">Desarrollo Socioeconómico y sostenible e innovación y nueva empresa.</option>
                                            <option value="Educación de calidad e inclusiva, bienestar, compromiso social y desarrollo cultural.">Educación de calidad e inclusiva, bienestar, compromiso social y desarrollo cultural.</option>
                                            <option value="Tecnologías de la Información y Comunicación">Tecnologías de la Información y Comunicación</option>
                                            <option value="Ciencias de la Tierra: Geología, Minería, Paleontología y sus aplicaciones de servicio al ser humano para su desarrollo.">Ciencias de la Tierra: Geología, Minería, Paleontología y sus aplicaciones de servicio al ser humano para su desarrollo.</option>
                                            <option value="Hábitat construido, ingeniería civil e infraestructuras de servicios básicos, logística y transporte">Hábitat construido, ingeniería civil e infraestructuras de servicios básicos, logística y transporte </option>
                                            <option value="Producción, procesos industriales y seguridad laboral en las organizaciones">Producción, procesos industriales y seguridad laboral en las organizaciones</option>
                                            <option value="Conservación, aprovechamiento sostenible de los recursos naturales y la biodiversidad, incluyendo la agroproductividad.">Conservación, aprovechamiento sostenible de los recursos naturales y la biodiversidad, incluyendo la agroproductividad. </option>
                                            <option value="Investigación fundamental y aplicada en las Ciencias Básicas">Investigación fundamental y aplicada en las Ciencias Básicas</option>


                                        </select>

                                        <br />
                                    </div>

                                    <div className="col-4">

                                        <h5>
                                            Línea de Investigación
                                        </h5>
                                        {/* <label htmlFor="lineaInvestigacion">
                                Línea de Investigación
                            </label>

                            <br /> */}

                                        <select
                                            id="lineaInvestigacion"
                                            value={formData.lineaInvestigacion}
                                            onChange={handleChange}
                                            name="lineaInvestigacion"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Análisis genético y molecular de enfermedades.">Análisis genético y molecular de enfermedades.</option>
                                            <option value="Enfermedades no transmisibles.">Enfermedades no transmisibles.</option>
                                            <option value="Enfermedades transmisibles.">Enfermedades transmisibles.</option>

                                            <option value="Salud materno infantil.">Salud materno infantil.</option>
                                            <option value="Sistemas de organización y administración en servicios de salud .">Sistemas de organización y administración en servicios de salud .</option>
                                            <option value="Derecho Tecnología y sociedad.">Derecho Tecnología y sociedad.</option>
                                            <option value="Cultura de paz, ambiente e interculturalidad.">Cultura de paz, ambiente e interculturalidad.</option>
                                            <option value="Ciencias políticas.">Ciencias políticas.</option>
                                            <option value="Derechos Humanos y Justicia Social.">Derechos Humanos y Justicia Social.</option>
                                            <option value="Gestión y Desarrollo turístico.">Gestión y Desarrollo turístico.</option>
                                            <option value="Gestión Financiera">Gestión Financiera</option>
                                            <option value="Gestión Empresarial">Gestión Empresarial</option>
                                            <option value="Emprendimiento e innovación empresarial.">Emprendimiento e innovación empresarial.</option>
                                            <option value="Análisis empresarial.">Análisis empresarial.</option>
                                            <option value="Economía de Recursos Naturales y desarrollo sostenible.">Economía de Recursos Naturales y desarrollo sostenible.</option>
                                            <option value="Crecimiento y desarrollo económico.">Crecimiento y desarrollo económico.</option>
                                            <option value="Economía de la Educación.">Economía de la Educación.</option>
                                            <option value="Comunicación para el desarrollo.">Comunicación para el desarrollo.</option>

                                            <option value="Comunicación y cultura digital.">Comunicación y cultura digital.</option>
                                            <option value="Comunicación estratégica.">Comunicación estratégica. </option>
                                            <option value="Humanismo, ética y valores.">Humanismo, ética y valores. </option>
                                            <option value="Didáctica evaluación y metodologías aplicadas a la enseñanza y aprendizaje.">Didáctica evaluación y metodologías aplicadas a la enseñanza y aprendizaje.</option>
                                            <option value="Educación, cultura y sociedad.">Educación, cultura y sociedad.</option>
                                            <option value="Teoría y producción del arte, valoración y revitalización del Patrimonio Cultural, Gestión Cultural, Industrias creativas y Educación cultural sostenible.">Teoría y producción del arte, valoración y revitalización del Patrimonio Cultural, Gestión Cultural, Industrias creativas y Educación cultural sostenible.</option>
                                            <option value="Salud mental y conductas adictivas">Salud mental y conductas adictivas</option>
                                            <option value="Evaluación en Psicología y Salud.">Evaluación en Psicología y Salud. </option>
                                            <option value="Envejecimiento.">Envejecimiento.</option>
                                            <option value="Orientación en contextos familiares y educativos.">Orientación en contextos familiares y educativos. </option>
                                            <option value="Arquitectura.">Arquitectura. </option>
                                            <option value="Ordenamiento territorial y urbanismo.">Ordenamiento territorial y urbanismo.</option>
                                            <option value="Infraestructura civil.">Infraestructura civil. </option>
                                            <option value="Recursos hídricos.">Recursos hídricos. </option>
                                            <option value="Logística y transporte.">Logística y transporte. </option>
                                            <option value="Ingeniería de software.">Ingeniería de software. </option>
                                            <option value="Ciencias y tecnologías de la computación.">Ciencias y tecnologías de la computación. </option>
                                            <option value="Tecnologías de la comunicación.">Tecnologías de la comunicación. </option>
                                            <option value="Electrónica.">Electrónica. </option>
                                            <option value="Energía.">Energía. </option>
                                            <option value="Geología económica, minería y procesamiento de minerales.">Geología económica, minería y procesamiento de minerales. </option>
                                            <option value="Geodinámica y Geotécnica.">Geodinámica y Geotécnica. </option>
                                            <option value="Patrimonio geológico, minero y paleontológico.">Patrimonio geológico, minero y paleontológico. </option>
                                            <option value="Gestión, manejo y conservación de los recursos naturales y biodiversidad.">Gestión, manejo y conservación de los recursos naturales y biodiversidad. </option>
                                            <option value="Producción agropecuaria sostenible.">Producción agropecuaria sostenible. </option>
                                            <option value="Seguridad  y Salud Ocupacional.">Seguridad  y Salud Ocupacional. </option>
                                            <option value="Procesos para industrialización de recursos naturales, sintéticos y alimentos.">Procesos para industrialización de recursos naturales, sintéticos y alimentos. </option>
                                            <option value="Ciencia y tecnología para el manejo y protección del ambiente.">Ciencia y tecnología para el manejo y protección del ambiente. </option>
                                            <option value="Bioconocimiento para la innovación y el desarrollo.">Bioconocimiento para la innovación y el desarrollo. </option>
                                            <option value="Aplicación de modelamiento matemático en ciencias básicas y aplicadas.">Aplicación de modelamiento matemático en ciencias básicas y aplicadas. </option>
                                            <option value="Fisicoquímica computacional.">Fisicoquímica computacional. </option>
                                            <option value="Fundamentos de la educación, pedagogía y currículo.">Fundamentos de la educación, pedagogía y currículo. </option>
                                            <option value="Política educativa y organización escolar.">Política educativa y organización escolar. </option>
                                        </select>


                                        <br />
                                    </div>

                                    <div className="col-4">

                                        <h5>
                                            Programa de Investigación
                                        </h5>
                                        {/* <label htmlFor="programaInvestigacion">
                                Programa de Investigación
                            </label>

                            <br /> */}
                                        <select
                                            id="programaInvestigacion"
                                            value={formData.programaInvestigacion}
                                            onChange={handleChange}
                                            name="programaInvestigacion"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Desarrollo y Planificación Territorial.">Desarrollo y Planificación Territorial.</option>
                                            <option value="Bioeconomía y sostenibilidad.">Bioeconomía y sostenibilidad.</option>
                                            <option value="Emprendimiento e innovación para el café.">Emprendimiento e innovación para el café.</option>

                                            <option value="Gestión empresarial, financiera, contable, innovación, emprendimiento.">Gestión empresarial, financiera, contable, innovación, emprendimiento.   </option>
                                            <option value="Educomunicación, empresa y cultura digital y audiovisual.">Educomunicación, empresa y cultura digital y audiovisual.</option>
                                            <option value="Orientación de la persona a lo largo de la vida.">Orientación de la persona a lo largo de la vida.</option>
                                            <option value="Bienestar y salud.">Bienestar y salud.</option>
                                            <option value="Formación para el desarrollo profesional, docente y familiar.">Formación para el desarrollo profesional, docente y familiar. </option>
                                            <option value="Gestión y desarrollo cultural.">Gestión y desarrollo cultural.</option>
                                            <option value="Universidad, innovación educativa y social.">Universidad, innovación educativa y social.</option>
                                            <option value="Derecho, políticas públicas y gobernanza">Derecho, políticas públicas y gobernanza </option>
                                            <option value="Transformación digital.">Transformación digital.</option>
                                            <option value="Ciudades y comunidades sostenibles.">Ciudades y comunidades sostenibles.</option>
                                            <option value="Geodesarrollo.">Geodesarrollo.</option>
                                            <option value="Industria, innovación e infraestructuras.">Industria, innovación e infraestructuras.</option>
                                            <option value="Gestión y conservación de recursos naturales.">Gestión y conservación de recursos naturales.</option>
                                            <option value="Biodiversidad, ecosistemas y cambio global.">Biodiversidad, ecosistemas y cambio global.</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <InformacionGeneral /> */}
                        {/* <FechasProyecto /> */}

                        <div className="container">

                            <div className="row">
                                <div className="col-4">
                                    <h5>
                                        Fecha de inicio
                                    </h5>
                                    {/* <label htmlFor="fechaInicio">
                                Fecha de Inicio.
                            </label> */}



                                    {/* 
                                <input
                                id="fechaInicio"
                                type="date"
                                placeholder="INGRESAR UNA FECHA"
                                className="form--input"
                                name="programaInvestigacion"
                                min={"2022-01-01"}
                                onChange={handleChange}
                                value={formData.fechaInicio}
                            /> */}


                                </div>

                                <div className="col-4">
                                    <h5>
                                        Fecha de Finalización
                                    </h5>
                                    {/* <label htmlFor="fechaFin">
                                Fecha de Fin.
                            </label> */}


                                    {/* <input
                                id="fechaFin"

                                type="date"
                                placeholder="INGRESAR UNA FECHA"
                                className="form--input"
                                name="programaInvestigacion"
                                min={"2022-01-01"}
                                onChange={handleChange}
                                value={formData.fechaFin}
                            /> */}
                                </div>

                                <div className="col-4">
                                    <h5>
                                        Duración del proyecto
                                    </h5>
                                    {/* <label>
                                Duración del proyecto semanas.
                            </label> */}

                                </div>
                            </div>


                            <div className="row">
                                <div className="col-4">
                                    <DatePicker
                                        selected={formData.fechaInicio}
                                        dateFormat="yyyy/MM/dd"
                                        onChange={date => setFormData(
                                            {
                                                ...formData,
                                                fechaInicio: date
                                            })}
                                        className="form-control"

                                        minDate={new Date()}
                                    //isClearable
                                    />
                                </div>
                                <div className="col-4">
                                    <DatePicker
                                        selected={formData.fechaFin}
                                        dateFormat="yyyy/MM/dd"
                                        onChange={date => setFormData(
                                            {
                                                ...formData,
                                                fechaFin: date,
                                            }
                                        )

                                        }
                                        className="form-control"
                                        minDate={new Date()}
                                    //isClearable
                                    />
                                </div>

                                <div className="col-4">
                                    <input
                                        type="number"
                                        placeholder="ingresar valor"
                                        //placeholder={formData.duracionProyectoSemanas}
                                        className="form--input"
                                        name="duracionProyectoSemanas"
                                        onMouseEnter={calculateDaysLeft}
                                        onChange={handleChange}
                                        min={"1"}
                                        value={formData.duracionProyectoSemanas}
                                    />
                                </div>
                                {/* <button
                        onClick={() => console.log( calculateDaysLeft(formData.fechaInicio, formData.fechaFin) )}
                        //className="btn btn-primary btn-block"
                        //onClick={routeChange }
                        //onClick={() => console.log(docenteSeleccionado)}
                        type="button"
                    >
                        Calcular
                    </button> */}
                            </div>
                            {<br />}

                            <div className="row">
                                <div className="col-4">
                                    <h5>

                                        Alcance Territorial. (Cobertura del Proyecto)
                                    </h5>
                                    {/* <label htmlFor="alcanceTerritorial">
                            Alcance Territorial. (Cobertura del Proyecto)
                        </label> */}
                                </div>
                                <div className="col-8">
                                    <select
                                        id="alcanceTerritorial"
                                        value={formData.alcanceTerritorial}
                                        onChange={handleChange}
                                        name="alcanceTerritorial"
                                        className="form-select"
                                    >
                                        <option value="">-- Elija un Elemento --</option>
                                        <option value="Nacional.">Nacional.</option>
                                        <option value="Provincial.">Provincial.</option>
                                        <option value="Cantonal.">Cantonal.</option>
                                        <option value="Parroquial.">Parroquial.</option>
                                        <option value="Institucional.">Institucional.</option>
                                        <option value="Internacional.">Internacional.</option>


                                    </select>
                                </div>
                            </div>
                        </div>

                        <br />
                        {/* </form> */}

                        {/* Termina Fechas Proyecto */}
                        <label>
                            Datos del Director del Proyecto.
                        </label>
                        <AutocompleteDocente />



                        {/* <AreasConocimiento /> */}

                        <section>


                            {<br />}

                            <h4>
                                Áreas del conocimiento de acuerdo a organismos internacionales.

                            </h4>

                            {<br />}
                            <div className="container">

                                <div className="row">
                                    <div className="col-4">

                                        <h5>
                                            Actividad Científica
                                        </h5>


                                        {/*                             
                            <label htmlFor="actividadCientifica">
                                Actividad Científica.
                            </label>
                             */}



                                        <select
                                            id="actividadCientifica"
                                            value={formData.actividadCientifica}
                                            onChange={handleChange}
                                            name="actividadCientifica"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Ciencias exactas y naturales.">Ciencias exactas y naturales.</option>
                                            <option value="Ingeniería y tecnología.">Ingeniería y tecnología.</option>
                                            <option value="Ciencias médicas.">Ciencias médicas.</option>
                                            <option value="Ciencias agrícolas.">Ciencias agrícolas.</option>
                                            <option value="Ciencias Sociales.">Ciencias Sociales.</option>
                                            <option value="Humanidades.">Humanidades.</option>


                                        </select>

                                    </div>

                                    <div className="col-4">

                                        <h5>
                                            Objetivo Socioeconómico
                                        </h5>

                                        {/* <label htmlFor="objetivoSocioEconomico">
                                Objetivo Socioeconómico.
                            </label> */}



                                        <select
                                            id="objetivoSocioEconomico"
                                            value={formData.objetivoSocioEconomico}
                                            onChange={handleChange}
                                            name="objetivoSocioEconomico"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Exporación y Explotacion de la tierra.">Exporación y Explotacion de la tierra.</option>
                                            <option value="Infraestructuras y ordenación del territorio.">Infraestructuras y ordenación del territorio.</option>
                                            <option value="Control y protección del medio ambiente.">Control y protección del medio ambiente.</option>
                                            <option value="Protección y mejora de la salud humana.">Protección y mejora de la salud humana.</option>
                                            <option value="Prod. Dist. y utilización racional de la energía.">Prod. Dist. y utilización racional de la energía.</option>
                                            <option value="Producción y tecnología agrícola.">Producción y tecnología agrícola.</option>
                                            <option value="Producción y tecnología industrial">Producción y tecnología industrial </option>
                                            <option value="Estructuras y relaciones sociales.">Estructuras y relaciones sociales.</option>
                                            <option value="Exploración y explotación del espacio.">Exploración y explotación del espacio.</option>
                                            <option value="Investigaciones financiadas con los fondos generales de las universidades.">Investigaciones financiadas con los fondos generales de las universidades.</option>
                                            <option value="Investigación no orientada">Investigación no orientada</option>
                                            <option value="Otra investigación civil">Otra investigación civil</option>
                                            <option value="Defensa">Defensa</option>
                                            <option value="Otros">Otros</option>


                                        </select>
                                    </div>

                                    <div className="col-4">

                                        <h5>
                                            Área tematica de I+D.
                                        </h5>

                                        {/* <label htmlFor="areaTematicaID">
                                Área tematica de I+D.
                            </label> */}




                                        <select
                                            id="areaTematicaID"
                                            value={formData.areaTematicaID}
                                            onChange={handleChange}
                                            name="areaTematicaID"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Soberanía alimentaria y transformación agroproductiva">Soberanía alimentaria y transformación agroproductiva</option>
                                            <option value="Biodiversidad y patrimonio natural.">Biodiversidad y patrimonio natural. </option>
                                            <option value="Salud.">Salud. </option>
                                            <option value="Energía y cambio climático. ">Energía y cambio climático. </option>
                                            <option value="Transporte y movilidad">Transporte y movilidad</option>
                                            <option value="Seguridad y defensa ">Seguridad y defensa </option>
                                            <option value="Habitat humano y gestión de riesgos.">Habitat humano y gestión de riesgos. </option>
                                            <option value="Ciencias sociales y humanidades.">Ciencias sociales y humanidades.  </option>



                                        </select>

                                    </div>
                                </div>
                            </div>
                            {<br />}

                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Objetivos del plan de Creación de Oportunidades.

                                        </h5>
                                        {/* <label htmlFor="planCreacionOportunidades">
                                Objetivos del plan de Creación de Oportunidades.
                            </label> */}

                                    </div>
                                    <div className="col-8">
                                        <select
                                            id="objetivosPlanCreacionOportunidades"
                                            value={formData.objetivosPlanCreacionOportunidades}
                                            onChange={handleChange}
                                            name="objetivosPlanCreacionOportunidades"
                                            className="form-select"

                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Objetivo 1: Incrementar y fomentar, de manera inclusiva, las oportunidades de empleo y las condiciones laborales.">Objetivo 1: Incrementar y fomentar, de manera inclusiva, las oportunidades de empleo y las condiciones laborales.</option>
                                            <option value="Objetivo 2: Impulsar un sistema económico con reglas claras que fomenten el comercio exterior, turismo, atracción de inversiones y modernización del sistema financiero nacional.">Objetivo 2: Impulsar un sistema económico con reglas claras que fomenten el comercio exterior, turismo, atracción de inversiones y modernización del sistema financiero nacional.  </option>
                                            <option value="Objetivo 3: Fomentar la productividad y competitividad en los sectores agrícola, industrial, acuícula y pesquero, bajo el enfoque de economía circular. ">Objetivo 3: Fomentar la productividad y competitividad en los sectores agrícola, industrial, acuícula y pesquero, bajo el enfoque de economía circular. </option>
                                            <option value="Objetivo 4: Garantiza la gestión de las finanzas públicas de manera sostenible y transparente.">Objetivo 4: Garantiza la gestión de las finanzas públicas de manera sostenible y transparente.</option>
                                            <option value="Objetivo 5: Proteger a las familias, garantizar sus derechos y servicios, erradicar la pobreza y promover la inclusión social.">Objetivo 5: Proteger a las familias, garantizar sus derechos y servicios, erradicar la pobreza y promover la inclusión social.</option>
                                            <option value="Objetivo 6: Garantizar el derecho a la salud integral, gratuita y de calidad.">Objetivo 6: Garantizar el derecho a la salud integral, gratuita y de calidad.</option>
                                            <option value="Objetivo 7: Potenciar las capacidades de la ciudadanía y promover una educación innovadora, inclusiva y de calidad en todos los niveles.">Objetivo 7: Potenciar las capacidades de la ciudadanía y promover una educación innovadora, inclusiva y de calidad en todos los niveles.</option>
                                            <option value="Objetivo 8: Generar nuevas oportunidades y bienestar para las zonas rurales, con énfasis en pueblos y nacionalidades.">Objetivo 8: Generar nuevas oportunidades y bienestar para las zonas rurales, con énfasis en pueblos y nacionalidades.</option>
                                            <option value="Objetivo 9: Garantizar la seguridad ciudadana, orden público y gestión de riesgos.">Objetivo 9: Garantizar la seguridad ciudadana, orden público y gestión de riesgos.</option>
                                            <option value="Objetivo 10: Garantizar la soberanía nacional, integridad territorial y seguridad del Estado.">Objetivo 10: Garantizar la soberanía nacional, integridad territorial y seguridad del Estado.</option>
                                            <option value="Objetivo 11: Conservar, restaurar, proteger y hacer un uso sostenible de los recursos naturales.">Objetivo 11: Conservar, restaurar, proteger y hacer un uso sostenible de los recursos naturales.</option>
                                            <option value="Objetivo 12: Fomentar modelos de desarrollo sostenible aplicando medidas de apatación y mitigación al Cambio Climático.">Objetivo 12: Fomentar modelos de desarrollo sostenible aplicando medidas de apatación y mitigación al Cambio Climático.</option>
                                            <option value="Objetivo 13: Promover la gestión integral de los recursos hídricos.">Objetivo 13: Promover la gestión integral de los recursos hídricos.</option>
                                            <option value="Objetivo 14: Fortalecer las capacidades del Estado con énfasis en la administración de justicia y eficiencia en los procesos de regulación y control, con independencia y autonomía.">Objetivo 14: Fortalecer las capacidades del Estado con énfasis en la administración de justicia y eficiencia en los procesos de regulación y control, con independencia y autonomía.</option>
                                            <option value="Objetivo 15: Fomentar la ética pública, la transparencia y la lucha contra la corrupción.">Objetivo 15: Fomentar la ética pública, la transparencia y la lucha contra la corrupción.</option>
                                            <option value="Objetivo 16: Promover la integración regional, la inserción estratégica del país en el mundo y garantizar los derechos de las personas en situación de movilidad humana.">Objetivo 16: Promover la integración regional, la inserción estratégica del país en el mundo y garantizar los derechos de las personas en situación de movilidad humana.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {<br />}
                            <h4>
                                Clasificación Internacional Normalizada de la Educación
                            </h4>
                            {<br />}
                            {<br />}
                            <div className="container">

                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Campo amplio

                                        </h5>

                                        {/* <label>
                                Campo amplio
                            </label> */}

                                        <select
                                            id="campoAmplio"
                                            value={formData.campoAmplio}
                                            onChange={handleChange}
                                            name="campoAmplio"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>

                                            <option value="01-A Educación.">01-A Educación. </option>
                                            <option value="02-A Artes y Humanidades.">02-A Artes y Humanidades. </option>
                                            <option value="03-A  Ciencias Sociales, periodismo, información y derecho.">03-A  Ciencias Sociales, periodismo, información y derecho. </option>
                                            <option value="04-A Administración.">04-A Administración. </option>
                                            <option value="05-A Ciencias Naturales, matemáticas y estadísticas.">05-A Ciencias Naturales, matemáticas y estadísticas. </option>
                                            <option value="06-A Tecnologías de la información y la comunicación (TIC).">06-A Tecnologías de la información y la comunicación (TIC). </option>
                                            <option value="07-A Ingeniería, industria y construcción.">07-A Ingeniería, industria y construcción. </option>
                                            <option value="08-A Agricultura, silvicultura, pesca y veterinaria.">08-A Agricultura, silvicultura, pesca y veterinaria. </option>
                                            <option value="09-A Salud y Bienestar.">09-A Salud y Bienestar. </option>
                                            <option value="10-A Servicios.">10-A Servicios. </option>

                                        </select>

                                    </div>

                                    <div className="col-4">
                                        <h5>
                                            Campo específico

                                        </h5>
                                        <select
                                            id="campoEspecifico"
                                            value={formData.campoEspecifico}
                                            onChange={handleChange}
                                            name="campoEspecifico"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="1-1A Educación"> 1-1A Educación </option>
                                            <option value="1-2A Artes"> 1-2A Artes </option>
                                            <option value="2-2A Humanidades "> 2-2A Humanidades </option>
                                            <option value="3-2A Idiomas">3-2A Idiomas </option>
                                            <option value="1-3A Ciencias Sociales y del comportamiento"> 1-3A Ciencias Sociales y del comportamiento </option>
                                            <option value="2-3A Periodismo e información. "> 2-3A Periodismo e información.  </option>
                                            <option value="3-3A Derecho">3-3A Derecho</option>
                                            <option value="1-4A Educación comercial y administración "> 1-4A Educación comercial y administración  </option>
                                            <option value="1-5A Ciencias Biológicas y afines "> 1-5A Ciencias Biológicas y afines </option>
                                            <option value="2-5A Medio ambiente ">2-5A Medio ambiente  </option>
                                            <option value="3-5A Ciencias físicas  "> 3-5A Ciencias físicas  </option>
                                            <option value="4-5A Matemáticas y estadística"> 4-5A Matemáticas y estadística</option>
                                            <option value="1-6A Tecnologías de la Información y la comunicación (TIC) "> 1-6A Tecnologías de la Información y la comunicación (TIC) </option>
                                            <option value="1-7A Ingeniería y profesiones afines2-7A Industria y producción "> 1-7A Ingeniería y profesiones afines2-7A Industria y producción </option>
                                            <option value="2-7A Industria y producción "> 2-7A Industria y producción </option>
                                            <option value="3-7A Arquitectura y construcción  "> 3-7A Arquitectura y construcción  </option>
                                            <option value="1-8A Agricultura"> 1-8A Agricultura </option>
                                            <option value="2-8A Silvicultura ">2-8A Silvicultura  </option>
                                            <option value="3-8A Pesca "> 3-8A Pesca </option>
                                            <option value="4-8A Veterinaria">4-8A Veterinaria </option>
                                            <option value="1-9A Salud "> 1-9A Salud </option>
                                            <option value="2-9A Bienestar "> 2-9A Bienestar </option>
                                            <option value="1-10A Servicios personales">1-10A Servicios personales </option>
                                            <option value="2-10A Servicios de protección "> 2-10A Servicios de protección </option>
                                            <option value="3-10A Servicios de seguridad ">3-10A Servicios de seguridad  </option>
                                            <option value="4-10A Servicio de transporte">4-10A Servicio de transporte </option>

                                        </select>

                                    </div>

                                    <div className="col-4">

                                        <h5>
                                            Campo detallado
                                        </h5>

                                        {/* <label>
                                Campo detallado
                            </label> */}
                                        <select
                                            id="campoDetallado"
                                            value={formData.campoDetallado}
                                            onChange={handleChange}
                                            name="campoDetallado"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="1-11A Educación">1-11A Educación</option>
                                            <option value="81-11A Psicopedagogía ">81-11A Psicopedagogía </option>
                                            <option value="2-11A Formación para docentes de educación preprimaria">2-11A Formación para docentes de educación preprimaria </option>
                                            <option value="3-11A Formación para docentes sin asignaturas de especialización ">3-11A Formación para docentes sin asignaturas de especialización </option>
                                            <option value="4-11A Formación para docentes con asignaturas de especialización ">4-11A Formación para docentes con asignaturas de especialización </option>
                                            <option value="1-12A Técnicas y producción para medios de comunicación  ">1-12A Técnicas y producción para medios de comunicación  </option>
                                            <option value="2-12A Diseño">2-12A Diseño  </option>
                                            <option value="3-12A Artes">3-12A Artes </option>
                                            <option value="5-12A Música y artes escénicas ">5-12A Música y artes escénicas </option>
                                            <option value="1-22A Religión y Teología ">1-22A Religión y Teología </option>
                                            <option value="2-22A Historia y Arqueología ">2-22A Historia y Arqueología </option>
                                            <option value="3-22A Filosofía">3-22A Filosofía </option>
                                            <option value="1-32A Idiomas ">1-32A Idiomas </option>
                                            <option value="2-32A Literatura y lingüística ">2-32A Literatura y lingüística </option>
                                            <option value="1-13A Economía">1-13A Economía </option>
                                            <option value="81-13A Economía Matemática ">81-13A Economía Matemática </option>
                                            <option value="2-13A Ciencias políticas ">2-13A Ciencias políticas  </option>
                                            <option value="3-13A Psicología ">3-13A Psicología </option>
                                            <option value="4-13A Estudios Sociales y Culturales">4-13A Estudios Sociales y Culturales </option>
                                            <option value="82-13A Estudios de Género">82-13A Estudios de Género </option>
                                            <option value="83-13A Geografía y territorio ">83-13A Geografía y territorio </option>
                                            <option value="1-23A Periodismo y comunicación  ">1-23A Periodismo y comunicación  </option>
                                            <option value="2-23A Bibliotecología, documentación y archivología ">2-23A Bibliotecología, documentación y archivología </option>
                                            <option value="1-33A Derecho ">1-33A Derecho </option>
                                            <option value="1-14A Contabilidad y auditoría ">1-14A Contabilidad y auditoría </option>
                                            <option value="2-14A Gestión financiera ">2-14A Gestión financiera </option>
                                            <option value="3-14A Administración  ">3-14A Administración </option>
                                            <option value="4-14A Mercadotecnia y publicidad  ">4-14A Mercadotecnia y publicidad </option>
                                            <option value="6-14A Comercio  ">6-14A Comercio </option>
                                            <option value="7-14A Competencias laborales  ">7-14A Competencias laborales </option>
                                            <option value="1-15A Biología  ">1-15A Biología </option>
                                            <option value="81-15A Biofísica  ">81-15A Biofísica </option>
                                            <option value="82-15A Biofarmacéutica ">82-15A Biofarmacéutica</option>
                                            <option value="83-15A Biomedicina  ">83-15A Biomedicina </option>
                                            <option value="2-15A Bioquímica  ">2-15A Bioquímica </option>
                                            <option value="84-15A Genética  ">84-15A Genética </option>
                                            <option value="85-15A Biodiversidad  ">85-15A Biodiversidad </option>
                                            <option value="86-15A Neurociencias  ">86-15A Neurociencias </option>
                                            <option value="1-25A Medio ambiente  ">1-25A Medio ambiente </option>
                                            <option value="2-25A Recursos Naturales Renovables  ">2-25A Recursos Naturales Renovables </option>
                                            <option value="1-35A Química  ">1-35A Química </option>
                                            <option value="2-35A Ciencias de la Tierra  ">2-35A Ciencias de la Tierra </option>
                                            <option value="3-35A Física ">3-35A Física </option>
                                            <option value="1-45A Matemáticas ">1-45A Matemáticas </option>
                                            <option value="81-45A Logística y transporte ">81-45A Logística y transporte </option>
                                            <option value="1-16A Computación ">1-16A Computación </option>
                                            <option value="2-16A Diseño y administración de redes y bases de datos ">2-16A Diseño y administración de redes y bases de datos </option>
                                            <option value="3-16A Desarrollo y análisis de software y aplicaciones  ">3-16A Desarrollo y análisis de software y aplicaciones  </option>
                                            <option value="81-16A  Sistemas de Información ">81-16A  Sistemas de Información </option>
                                            <option value="1-17A  Química aplicada ">1-17A  Química aplicada </option>
                                            <option value="2-17A Tecnología de protección del medio ambiente  ">2-17A Tecnología de protección del medio ambiente  </option>
                                            <option value="3-17A Electricidad y energía ">3-17A Electricidad y energía </option>
                                            <option value="4-17A Electrónica, automatización y sonido  ">4-17A Electrónica, automatización y sonido  </option>
                                            <option value="5-17A Mecánica y profesiones afines a la metalistería ">5-17A Mecánica y profesiones afines a la metalistería </option>
                                            <option value="6-17A Diseño y construcción de vehículos, barcos y aeronaves motorizadas  ">6-17A Diseño y construcción de vehículos, barcos y aeronaves motorizadas  </option>
                                            <option value="81-17A Tecnologías Nucleares y Energéticas  ">81-17A Tecnologías Nucleares y Energéticas  </option>
                                            <option value="82-17A  Mecatrónica  ">82-17A  Mecatrónica  </option>
                                            <option value="83-17A  Hidráulica ">83-17A  Hidráulica </option>
                                            <option value="84-17A  Telecomunicaciones ">84-17A  Telecomunicaciones </option>
                                            <option value="85-17A  Nanotecnología  ">85-17A  Nanotecnología  </option>
                                            <option value="1-27A  Procesamiento de alimentos ">1-27A  Procesamiento de alimentos </option>
                                            <option value="2-27A  Materiales  ">2-27A  Materiales  </option>
                                            <option value="3-27A  Productos textiles  ">3-27A  Productos textiles  </option>
                                            <option value="4-27A  Minería y extracción  ">4-27A  Minería y extracción  </option>
                                            <option value="5-27A  Producción industrial ">5-27A  Producción industrial </option>
                                            <option value="6-27A  Seguridad industrial  ">6-27A  Seguridad industrial  </option>
                                            <option value="7-27A  Diseño industrial y de procesos ">7-27A  Diseño industrial y de procesos </option>
                                            <option value="82-7A  Mantenimiento industrial  ">82-7A  Mantenimiento industrial  </option>
                                            <option value="1-37A Arquitectura, urbanismo y restauración  ">1-37A Arquitectura, urbanismo y restauración  </option>
                                            <option value="2-37A  Construcción e ingeniería civil  ">2-37A  Construcción e ingeniería civil  </option>
                                            <option value="1-18A  Producción agrícola y ganadera ">1-18A  Producción agrícola y ganadera </option>
                                            <option value="1-28A  Silvicultura  ">1-28A  Silvicultura </option>
                                            <option value="1-38A  Pesca   ">1-38A  Pesca  </option>
                                            <option value="1-48A  Veterinaria   ">1-48A  Veterinaria  </option>
                                            <option value="1-19A  Odontología  ">1-19A  Odontología </option>
                                            <option value="2-19A  Medicina   ">2-19A  Medicina  </option>
                                            <option value="3-19A  Enfermería y obstetricia  ">3-19A  Enfermería y obstetricia </option>
                                            <option value="4-19A Tecnología de diagnóstico y tratamiento médico   ">4-19A Tecnología de diagnóstico y tratamiento médico  </option>
                                            <option value="5-19A  Terapia y rehabilitación  ">5-19A  Terapia y rehabilitación </option>
                                            <option value="6-19A  Farmacia   ">6-19A  Farmacia  </option>
                                            <option value="7-19A Terapias alternativas y complementarias   ">7-19A Terapias alternativas y complementarias  </option>
                                            <option value="8-19A  Salud Pública  ">8-19A  Salud Pública </option>
                                            <option value="1-29A Asistencia a adultos mayores y discapacitados   ">1-29A Asistencia a adultos mayores y discapacitados  </option>
                                            <option value="2-29A Asistencia a la infancia y servicios para jóvenes  ">2-29A Asistencia a la infancia y servicios para jóvenes </option>
                                            <option value="2-110A Peluquería y tratamiento de belleza   ">2-110A Peluquería y tratamiento de belleza  </option>
                                            <option value="3-110A  Hotelería y gastronomía  ">3-110A  Hotelería y gastronomía </option>
                                            <option value="4-110A  Actividad física   ">4-110A  Actividad física  </option>
                                            <option value="5-110A  Turismo   ">5-110A  Turismo  </option>
                                            <option value="1-210A  Prevención y gestión de riesgos  ">1-210A  Prevención y gestión de riesgos </option>
                                            <option value="2-210A  Salud y seguridad ocupacional   ">2-210A  Salud y seguridad ocupacional  </option>
                                            <option value="1-310A Educación policial, militar y defensa   ">1-310A Educación policial, militar y defensa  </option>
                                            <option value="2-310A  Seguridad ciudadana  ">2-310A  Seguridad ciudadana </option>
                                            <option value="1-410A  Gestión del transporte  ">1-410A  Gestión del transporte </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Objetivos del desarrollo Sostenible
                                        </h5>

                                        {/* <label>
                                Objetivos del desarrollo Sostenible
                            </label> */}
                                    </div>
                                    <div className="col-8">
                                        <select
                                            id="objetivosDesarrolloSostenible"
                                            value={formData.objetivosDesarrolloSostenible}
                                            onChange={handleChange}
                                            name="objetivosDesarrolloSostenible"
                                            className="form-select"
                                        >
                                            <option value="">-- Elija un Elemento --</option>
                                            <option value="Objetivo 1: Poner fin a la pobreza en todas sus formas en todo el mundo ">Objetivo 1: Poner fin a la pobreza en todas sus formas en todo el mundo </option>
                                            <option value="Objetivo 2: Poner fin al hambre ">Objetivo 2: Poner fin al hambre </option>
                                            <option value="Objetivo 3: Garantizar una vida sana y promover el bienestar para todos en todas las edades ">Objetivo 3: Garantizar una vida sana y promover el bienestar para todos en todas las edades </option>
                                            <option value="Objetivo 4: Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos ">Objetivo 4: Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos </option>
                                            <option value="Objetivo 5: Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas ">Objetivo 5: Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas </option>
                                            <option value="Objetivo 6: Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos ">Objetivo 6: Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos </option>
                                            <option value="Objetivo 7: Garantizar el acceso a una energía asequible, segura, sostenible y moderna ">Objetivo 7: Garantizar el acceso a una energía asequible, segura, sostenible y moderna </option>
                                            <option value="Objetivo 8: Promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos ">Objetivo 8: Promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos </option>
                                            <option value="Objetivo 9: Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación ">Objetivo 9: Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación </option>
                                            <option value="Objetivo 10: Reducir la desigualdad en y entre los países ">Objetivo 10: Reducir la desigualdad en y entre los países </option>
                                            <option value="Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles ">Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles </option>
                                            <option value="Objetivo 12: Garantizar modalidades de consumo y producción sostenibles ">Objetivo 12: Garantizar modalidades de consumo y producción sostenibles </option>
                                            <option value="Objetivo 13: Adoptar medidas urgentes para combatir el cambio climático y sus efectos ">Objetivo 13: Adoptar medidas urgentes para combatir el cambio climático y sus efectos </option>
                                            <option value="Objetivo 14: Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos ">Objetivo 14: Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos </option>
                                            <option value="Objetivo 15: Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras, detener la pérdida de biodiversidad ">Objetivo 15: Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras, detener la pérdida de biodiversidad </option>
                                            <option value="Objetivo 16: Promover sociedades justas, pacíficas e inclusivas ">Objetivo 16: Promover sociedades justas, pacíficas e inclusivas </option>
                                            <option value="Objetivo 17: Revitalizar la Alianza Mundial para el Desarrollo Sostenible ">Objetivo 17: Revitalizar la Alianza Mundial para el Desarrollo Sostenible </option>

                                        </select>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary btn-block"
                                >
                                    Enviar Información
                                </button>
                            </div>
                        </section>
                        <br />
                    </form>
                </Split>
            </div>
        </div>

    )
} 