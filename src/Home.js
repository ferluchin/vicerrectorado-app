import React from "react";
import NavBar from "./NavBar";

import InformacionGeneral from "./Componentes/C1InformacionGeneral";
import FechasProyecto from "./Componentes/C2FechasProyecto";
import DirectorProyecto from "./Componentes/C3DirectorProyecto";
import AreasConocimiento from "./Componentes/C4AreasConocimiento";


export default function Home() {

    const [formData, setFormData] = React.useState(
        {
            titulo: "",
            facultad: "",
            departamento: "",
            grupoInvestigacion: "",
            dominioAcademico: "",
            lineaInvestigacion: "",
            programaInvestigacion: ""
        }
    )

    /*
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""

    */

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (

        <form
            className="form"
            onSubmit={handleSubmit}
        >

            <h2>
                Vicerrectorado de Investigación
            </h2>
            <h3>
                Gerencia de Proyectos
            </h3>

            <section>

                {/* <form
                className="form"
                onSubmit={handleSubmit}
            > */}
                {/* <div> */}

                {/* <NavBar /> */}
                <h3>1.  Información General.</h3> {<br />}
                <label>
                    Título.
                </label>
                {<br />}

                <input
                    type="text"
                    placeholder="Ingresar Texto"
                    className="form--input"
                    name="titulo"
                    onChange={handleChange}
                    value={formData.titulo}
                />

                {<br />}

                {/*             
            <input
                type="text"
                placeholder="Facultad"
                className="form--input"
                name="facultad"
                onChange={handleChange}
                value={formData.facultad}
            />
     */}
                <label htmlFor="facultad">Facultad</label>
                <br />
                <select
                    id="facultad"
                    value={formData.facultad}
                    onChange={handleChange}
                    name="facultad"
                    className="select-css"
                >
                    {/* <option value="">-- Elija un Elemento --</option> */}
                    <option value="Ciencias Económicas y Empresariales">Ciencias Económicas y Empresariales</option>
                    <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                    <option value="Ciencias Exactas y Naturales">Ciencias Exactas y Naturales</option>
                    <option value="Ingenierías y Arquitectura">Ingenierías y Arquitectura</option>
                    <option value="Ciencias Sociales, Educación y Humanidades">Ciencias Sociales, Educación y Humanidades</option>

                </select>
                {<br />}

                <label htmlFor="departamento">Departamento</label>
                <br />
                <select
                    id="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    name="departamento"
                    className="select-css"
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

                <br />
                <label htmlFor="grupoInvestigacion">
                    Grupo de Investigación al que pertenece el Proyecto.
                </label>

                <br />
                <select
                    id="grupoInvestigacion"
                    value={formData.grupoInvestigacion}
                    onChange={handleChange}
                    name="grupoInvestigacion"
                    className="select-css"
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

                    <option value="">Microbial Systems Ecology and Evolution. </option>
                    <option value="">Psicología Clínica y de la Salud. </option>
                    <option value="">Aceites Esenciales del Ecuador. </option>
                    <option value="">Arte y Entorno. </option>
                    <option value="">Biomedicina y  Ambiente. </option>
                    <option value="">Ciencia y Tecnología de Materiales. </option>
                    <option value="">Ciencia y Tradición Ancestral. </option>
                    <option value="">Comunicación, poder y ciudadanía en red. </option>
                    <option value="">Conservación sustentable del patrimonio cultural y natural. </option>
                    <option value="">Cuidado Humanizado en Enfermería. </option>
                    <option value="">Economía de Recursos Naturales, Agricultura y Medio Ambiente. </option>
                    <option value="">Educación Inclusiva </option>
                    <option value="">Educación y Familia </option>
                    <option value="">EFL Learning, Teaching and Technology. </option>
                    <option value="">Enfoques sociales del desarrollo: Género e interculturalidad. </option>
                    <option value="">Estudios de Lingüística, Literatura, Educación y Cultura. </option>
                    <option value="">Ética y Sociedad. </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>
                    <option value=""> -- Elija un Elemento -- </option>


                </select>

                <br />



                <label htmlFor="dominioAcademico">
                    Dominio Académico.
                </label>

                <br />
                <select
                    id="dominioAcademico"
                    value={formData.dominioAcademico}
                    onChange={handleChange}
                    name="dominioAcademico"
                    className="select-css"
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

            </section>
            {/* <InformacionGeneral /> */}
            <FechasProyecto />
            <DirectorProyecto />
            <AreasConocimiento />

            <button>Enviar Información</button>
        </form>

    )
} 