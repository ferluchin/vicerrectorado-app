import React, {
    useEffect,
    useState,
    useRef,
    useContext
} from "react";

import TitleBar from "../../components/TitleBar";

import Autosuggest from 'react-autosuggest';

import Moment from 'react-moment';

import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss'
import './support.scss'

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import Split from "react-split";
import Sidebar from "../../components/Sidebar";
import { AuthContext } from "../../context/AuthContext";

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

import { app, auth } from "../../firebase";
import { setGlobalState, useGlobalState } from "../../Helper/Context";
import { Button } from "reactstrap";


const firestore = getFirestore(app);

const data = [
    {
        //"id": "1",
        "nombre": "Luis Fernando Granda Morales",
        "identificacion": "1104435092",
        "telefono": "0961769500",
        "correo": "lfgranda3@utpl.edu.ec"
    },
    {
        //"id": "2",
        "nombre": "Monica Elizabeth Abendaño Ramirez",
        "identificacion": "11025879365",
        "telefono": "2418",
        "correo": "mabendano@utpl.edu.ec"
    },
    {
        //"id": "3",
        "nombre": "Boris Antonio Galarza Aguirre",
        "identificacion": "1104435092",
        "telefono": "073701444",
        "correo": "bagalarza1@utpl.edu.ec"
    },
    {
        //"id": "4",
        "nombre": "Rocio del Cisne Uchuari Uchuari",
        "identificacion": "1104435092",
        "telefono": "2346",
        "correo": "ruchuari@utpl.edu.ec"
    },
    {
        //"id": "5",
        "nombre": "Gloria del Carmen Palacio Valdivieso",
        "identificacion": "1104435092",
        "telefono": "07370144",
        "correo": "gpalacio@utpl.edu.ec"
    }
]

export default function Home() {

    // Codigo autocomplete docentes
    const [docentes, setDocentes] = useState(data);
    const [value, setValue] = useState("");
    const [docenteSeleccionado, setDocenteSeleccionado] = useState({});

    const onSuggestionsFetchRequested = ({ value }) => {
        setDocentes(filtrarDocentes(value));
    }

    const filtrarDocentes = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        var filtrado = data.filter((docente) => {
            var textoCompleto = docente.nombre +
                " - " + docente.identificacion +
                " - " + docente.telefono + " - "
                + docente.correo;

            if (textoCompleto.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputValue)) {
                return docente;
            }
        });

        return inputLength === 0 ? [] : filtrado;
    }

    const onSuggestionsClearRequested = () => {

        setDocentes([]);
    }

    const getSuggestionValue = (suggestion) => {
        return `${suggestion.nombre} - ${suggestion.identificacion} - ${suggestion.telefono} - ${suggestion.correo}`;
    }

    const renderSuggestion = (suggestion) => (
        <div
            className='sugerencia'
            onClick={() => seleccionarDocente(suggestion)}
        >
            {`${suggestion.nombre} - ${suggestion.identificacion} - ${suggestion.telefono} - ${suggestion.correo}`}
        </div>
    );

    const seleccionarDocente = (docente) => {
        setDocenteSeleccionado(docente);
    }

    const onChange = (e, { newValue }) => {
        setValue(newValue);
    }


    const inputProps = {
        placeholder: "Nombre del docente",
        value,
        //className: "form--input",
        onChange

    };

    const eventEnter = (e) => {
        if (e.key == "Enter") {
            var split = e.target.value.split('-');
            var docente = {
                nombre: split[0].trim(),
                identificacion: split[1].trim(),
                telefono: split[2].trim(),
                correo: split[3].trim(),

            };
            seleccionarDocente(docente);
        }
    }
    //end código autocomplete docentes
    const [globalInformacionGeneral, setGlobalInformacionGeneral] = useGlobalState("informacionGeneral");
    const [globalAuxiliar, setGlobalAuxiliar] = useGlobalState("auxiliar");


    const { currentUser } = useContext(AuthContext)
    //console.log("🚀 ~ file: Home.js ~ line 40 ~ Home ~ currentUser", currentUser.email)
    const correoUsuario = currentUser.email

    const baseDocRef = doc(firestore, "proyectos-investigacion", `${correoUsuario}`);

    setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });
    //setDoc(baseDocRef, { informacionGeneral: {} } );

    function logeoDatos(event) {
        console.log(globalInformacionGeneral)

        console.log("SET FORM DATA", formData)
    }

    //const correoUsuario = "lgrandab@gmail.com"

    let navigate = useNavigate();

    const routeChange = () => {
        window.scrollTo(0, 0)
        let path = `/areas-conocimiento`;
        //let path = `/tipo-proyecto`;
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

        //status
        status: "Borrador",
    }


    const [formData, setFormData] = React.useState({ ...globalInformacionGeneral } ? { ...globalInformacionGeneral } : { ...formInicial })

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
        event.preventDefault();

        try {
            formData.nombreDirectorProyecto = docenteSeleccionado.nombre
            formData.identificacionDirectorProyecto = docenteSeleccionado.identificacion
            formData.telefonoDirectorProyecto = docenteSeleccionado.telefono
            formData.correoInstitucional = docenteSeleccionado.correo

            formData.fechaInicio = (formData.fechaInicio).toISOString().split('T')
            formData.fechaFin = (formData.fechaFin).toISOString().split('T')

            //toISOString().split('T')
            // const docuRef = collection(firestore, `proyectos-investigacion/${correoUsuario}`, "proyectos")
            //const docuRef = collection(firestore, `proyectos-investigacion/`, `${correoUsuario}/ `, `proyectos` )
            //const docuRef = collection(firestore, `proyectos-investigacion/`, `${correoUsuario}/`, `proyectos`)
            ////const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`, `proyectos`)
            //updateDoc(docuRef, { proyectos: { ...formData } })
            ////await updateDoc(docuRef,  { ...formData } )

            const docuRef = doc(firestore, `proyectos-investigacion/${correoUsuario}`)

            console.log(globalAuxiliar)
            //setDoc(baseDocRef, { informacionGeneral: { status: "Borrador" } }, { merge: true });

            updateDoc(docuRef, {
                ["informacionGeneral"+globalAuxiliar]: {
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
        setGlobalInformacionGeneral({ ...formData }) //guardar en el global state

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
                    />
                    <section>
                        <form
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <TitleBar />

                            <br />

                            <Button
                                type="button"
                                onClick={logeoDatos}
                                className="btn btn-primary">
                                Consola
                            </Button>

                            <div className="container">
                                <h4>1.  Información General.</h4> {<br />}
                                <div className="mb-3 row">

                                    <h5 className="col-sm-2">
                                        Titulo
                                    </h5>

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

                                            <select
                                                id="facultad"
                                                value={formData.facultad}
                                                onChange={handleChange}
                                                name="facultad"
                                                className="form-select"
                                            >
                                                <option value="">-- Elija un Elemento --</option>
                                                <option value="Ciencias Económicas y Empresariales">Ciencias Económicas y Empresariales</option>
                                                <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                                <option value="Ciencias Exactas y Naturales">Ciencias Exactas y Naturales</option>
                                                <option value="Ingenierías y Arquitectura">Ingenierías y Arquitectura</option>
                                                <option value="Ciencias Sociales, Educación y Humanidades">Ciencias Sociales, Educación y Humanidades</option>

                                            </select>
                                        </div>

                                        <div className="col-4">

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

                            <div className="container">

                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Fecha de inicio
                                        </h5>

                                    </div>

                                    <div className="col-4">
                                        <h5>
                                            Fecha de Finalización
                                        </h5>
                                    </div>

                                    <div className="col-4">
                                        <h5>
                                            Duración del proyecto (Semanas)
                                        </h5>
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
                                                    fechaFin: date
                                                })}
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
                                            //onMouseEnter={calculateDaysLeft}
                                            onChange={handleChange}
                                            min={"1"}
                                            value={formData.duracionProyectoSemanas}
                                        />
                                    </div>

                                </div>
                                {<br />}

                                <div className="row">
                                    <div className="col-4">
                                        <h5>

                                            Alcance Territorial. (Cobertura del Proyecto)
                                        </h5>

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


                            {/* <AutocompleteDocente /> */}
                            {/* <div className="support"> */}

                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            Datos del Director del Proyecto.
                                        </h5>
                                    </div>
                                    <div className="col-8">
                                        <div className="support">

                                            <Autosuggest
                                                suggestions={docentes}
                                                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                                                onSuggestionsClearRequested={onSuggestionsClearRequested}
                                                getSuggestionValue={getSuggestionValue}
                                                renderSuggestion={renderSuggestion}
                                                inputProps={inputProps}
                                                onSuggestionSelected={eventEnter}

                                            />
                                            <br />
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="col-12"> */}


                                {/* BOTON SELECCIONAR DOCENTE  */}
                                {/* <div className="col-6">
                                            <button
                                                className='btn btn-primary'
                                                onClick={() => console.log(docenteSeleccionado)}
                                                type="button"
                                            >
                                                Seleccionar Docente
                                            </button>
                                            
                                        </div> */}

                                {/* </div> */}
                            </div>
                            {/* </div> */}
                            {/* <AutocompleteDocente /> */}

                            <button
                                className="btn btn-primary btn-block"
                            >
                                Guardar y Continuar
                            </button>
                            <br />
                        </form>
                    </section>
                </Split>
            </div>
        </div>
    )
} 