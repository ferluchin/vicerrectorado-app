import React from "react";
import NavBar from "../NavBar";

import "../style.css"
// import FechasProyecto from "./C2FechasProyecto";

export default function InformacionGeneral() {
    const [formData, setFormData] = React.useState({
        titulo: "",
        facultad: "",
        departamento: "",
        grupoInvestigacion: "",
        dominioAcademico: "",
        lineaInvestigacion: "",
        programaInvestigacion: ""
    })



    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        /*
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if (formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
        */
    }


    return (
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
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="cienciasEconomicasEmpresariales">Ciencias Económicas y Empresariales</option>
                <option value="orange">Ciencias de la Salud</option>
                <option value="yellow">Ciencias Exactas y Naturales</option>
                <option value="green">Ingenierías y Arquitectura</option>
                <option value="blue">Ciencias Sociales, Educación y Humanidades</option>

            </select>
            {<br />}

            <label htmlFor="departamento">Departamento</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="sdsa">Química</option>
                <option value="orange">Geociencias</option>
                <option value="yellow">Ciencias de la Salud</option>
                <option value="green">Economía</option>
                <option value="blue">Ciencias Empresariales.</option>
                <option value="blue">Ingeniería Civil.</option>
                <option value="blue">Arquitectura y Urbanismo.</option>
                <option value="blue">Ciencias de la Computación y Telecomunicaciones.</option>
                <option value="blue">Ciencias Biológicas y Agropecuarias.</option>
                <option value="blue">Producción.</option>
                <option value="blue">Ciencias de la Educación.</option>
                <option value="blue">Ciencias de la Comunicación.</option>
                <option value="blue">Filosofía, Artes y Humanidades.</option>
                <option value="blue">Psicología.</option>
                <option value="blue">Ciencias Jurídicas.</option>
            </select>

            <br />
            <label htmlFor="departamento">
                Grupo de Investigación al que pertenece el Proyecto.
            </label>

            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value=""> -- Elija un Elemento -- </option>
                <option value="sdsa">Biodiversidad de Ecosistemas Tropicales.</option>
                <option value="sdsa">Comunicación y Cultura Audiovisual.</option>
                <option value="sdsa">Comunicación, Educación y Tecnología.</option>
                <option value="sdsa">Control, Automation and Intelligent Systems.</option>
                <option value="sdsa">Crecimiento y desarrollo Económico</option>
                <option value="sdsa">Economía urbana y regional.</option>
                <option value="sdsa">Estudios sobre Constitucionalismo Latinoamericano y Derechos Humanos.</option>
                <option value="sdsa">Gestión de la Comunicación Estratégica.</option>
                <option value="sdsa">Gestión del Conocimiento en las Organizaciones.</option>
                <option value="sdsa">Grupo de investigación en observación turística.</option>
                <option value="sdsa">Inclusive Human Computer Interaction.</option>
                <option value="sdsa">Inteligencia Artificial Aplicada.</option>
                <option value="sdsa">Knowledge-Based Systems.</option>
                <option value="sdsa">Laboratorio de Ecología Tropical y servicios Ecosistémicos.</option>

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



            <label htmlFor="departamento">
                Dominio Académico.
            </label>

            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="sdsa">Biomedicina.</option>
                <option value="sdsa">Protección de la Salud, del bienestar y la dignidad humana.</option>
                <option value="sdsa">Derecho, paz e impulso a la justicia social.</option>
                <option value="sdsa">Desarrollo Socioeconómico y sostenible e innovación y nueva empresa.</option>
                <option value="sdsa">Educación de calidad e inclusiva, bienestar, compromiso social y desarrollo cultural.</option>
                <option value="sdsa">Tecnologías de la Información y Comunicación</option>
                <option value="sdsa">Ciencias de la Tierra: Geología, Minería, Paleontología y sus aplicaciones de servicio al ser humano para su desarrollo.</option>
                <option value="sdsa">Hábitat construido, ingeniería civil e infraestructuras de servicios básicos, logística y transporte </option>
                <option value="sdsa">Producción, procesos industriales y seguridad laboral en las organizaciones</option>
                <option value="sdsa">Conservación, aprovechamiento sostenible de los recursos naturales y la biodiversidad, incluyendo la agroproductividad. </option>
                <option value="sdsa">Investigación fundamental y aplicada en las Ciencias Básicas</option>


            </select>


            <br />

            <label htmlFor="departamento">
                Línea de Investigación
            </label>

            {<br />}
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="sdsa">Análisis genético y molecular de enfermedades.</option>
                <option value="sdsa">Enfermedades no transmisibles.</option>
                <option value="sdsa">Enfermedades transmisibles.</option>

                <option value="sdsa">Salud materno infantil.</option>
                <option value="sdsa">Sistemas de organización y administración en servicios de salud .</option>
                <option value="sdsa">Derecho Tecnología y sociedad.</option>
                <option value="sdsa">Cultura de paz, ambiente e interculturalidad.</option>
                <option value="sdsa">Ciencias políticas.</option>
                <option value="sdsa">Derechos Humanos y Justicia Social.</option>
                <option value="sdsa">Gestión y Desarrollo turístico.</option>
                <option value="sdsa">Gestión Financiera</option>
                <option value="sdsa">Gestión Empresarial</option>
                <option value="sdsa">Emprendimiento e innovación empresarial.</option>
                <option value="sdsa">Análisis empresarial.</option>
                <option value="sdsa">Economía de Recursos Naturales y desarrollo sostenible.</option>
                <option value="sdsa">Crecimiento y desarrollo económico.</option>
                <option value="sdsa">Economía de la Educación.</option>
                <option value="sdsa">Comunicación para el desarrollo.</option>

                <option value="sdsa">Comunicación y cultura digital.</option>
                <option value="sdsa">Comunicación estratégica. </option>
                <option value="sdsa">Humanismo, ética y valores. </option>
                <option value="sdsa">Didáctica evaluación y metodologías aplicadas a la enseñanza y aprendizaje.</option>
                <option value="sdsa">Educación, cultura y sociedad.</option>
                <option value="sdsa">Teoría y producción del arte, valoración y revitalización del Patrimonio Cultural, Gestión Cultural, Industrias creativas y Educación cultural sostenible.</option>
                <option value="sdsa">Salud mental y conductas adictivas</option>
                <option value="sdsa">Evaluación en Psicología y Salud. </option>
                <option value="sdsa">Envejecimiento.</option>
                <option value="sdsa">Orientación en contextos familiares y educativos. </option>
                <option value="sdsa">Arquitectura. </option>
                <option value="sdsa">Ordenamiento territorial y urbanismo.</option>
                <option value="sdsa">Infraestructura civil. </option>
                <option value="sdsa">Recursos hídricos. </option>
                <option value="sdsa">Logística y transporte. </option>
                <option value="sdsa">Ingenieria de software. </option>
                <option value="sdsa">Ciencias y tecnologías de la computación. </option>
                <option value="sdsa">Tecnologías de la comunicación. </option>
                <option value="sdsa">Electrónica. </option>
                <option value="sdsa">Energía. </option>
                <option value="sdsa">Geología económica, minería y procesamiento de minerales. </option>
                <option value="sdsa">Geodinámica y Geotécnica. </option>
                <option value="sdsa">Patrimonio geológico, minero y paleontológico. </option>
                <option value="sdsa">Gestión, manejo y conservación de los recursos naturales y biodiversidad. </option>
                <option value="sdsa">Producción agropecuaria sostenible. </option>
                <option value="sdsa">Seguridad  y Salud Ocupacional. </option>
                <option value="sdsa">Procesos para industrialización de recursos naturales, sintéticos y alimentos. </option>
                <option value="sdsa">Ciencia y tecnología para el manejo y protección del ambiente. </option>
                <option value="sdsa">Bioconocimiento para la innovación y el desarrollo. </option>
                <option value="sdsa">Aplicación de modelamiento matemático en ciencias básicas y aplicadas. </option>
                <option value="sdsa">Fisicoquímica computacional. </option>
                <option value="sdsa">Fundamentos de la educación, pedagogía y currículo. </option>
                <option value="sdsa">Política educativa y organización escolar. </option>
            </select>


            <br />

            <label htmlFor="departamento">
                Programa de Investigación
            </label>

            {<br />}
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="facultad"
                className="select-css"
            >
                <option value="">-- Elija un Elemento --</option>
                <option value="sdsa">Desarrollo y Planificación Territorial.</option>
                <option value="sdsa">Bioeconomía y sostenibilidad.</option>
                <option value="sdsa">Emprendimiento e innovación para el café.</option>

                <option value="sdsa">Gestión empresarial, financiera, contable, innovación, emprendimiento.   </option>
                <option value="sdsa">Educomunicación, empresa y cultura digital y audiovisual.</option>
                <option value="sdsa">Orientación de la persona a lo largo de la vida.</option>
                <option value="sdsa">Bienestar y salud.</option>
                <option value="sdsa">Formación para el desarrollo profesional, docente y familiar. </option>
                <option value="sdsa">Gestión y desarrollo cultural.</option>
                <option value="sdsa">Universidad, innovación educativa y social.</option>
                <option value="sdsa">Derecho, políticas públicas y gobernanza </option>
                <option value="sdsa">Transformación digital.</option>
                <option value="sdsa">Ciudades y comunidades sostenibles.</option>
                <option value="sdsa">Geodesarrollo.</option>
                <option value="sdsa">Industria, innovación e infraestructuras.</option>
                <option value="sdsa">Gestión y conservación de recursos naturales.</option>
                <option value="sdsa">Biodiversidad, ecosistemas y cambio global.</option>
              
            </select>

 
            {/* </div> */}
            {/* </form> */}


        </section >
    )
}

/*
            Departamento
            
            Química.
            Geociencias.
            Ciencias de la Salud.
            Economía.
            Ciencias Empresariales.
            Ingeniería Civil.
            Arquitectura y Urbanismo.
            Ciencias de la Computación y Telecomunicaciones.
            Ciencias Biológicas y Agropecuarias.
            Producción.
            Ciencias de la Educación.
            Ciencias de la Comunicación.
            Filosofía, Artes y Humanidades.
            Psicología.
            Ciencias Jurídicas.
*/