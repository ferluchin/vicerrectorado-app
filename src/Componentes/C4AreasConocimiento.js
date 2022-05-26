import React from "react";
// import NavBar from "../NavBar";

import "../style.css"


export default function AreasConocimiento() {

    return (
        <section>

            {/* <form
                className="form"
            //onSubmit={handleSubmit}
            > */}
            {/* <NavBar /> */}
            {<br />}

            <label>
                Áreas del conocimiento de acuerdo a organismos internacionales.

            </label>
            {<br />}
            {<br />}
            <div className="container">

                <div className="row">
                    <div className="col-4">


                        <label htmlFor="departamento">
                            Actividad Científica.
                        </label>



                        {<br />}
                        <select
                            id="favColor"
                            //value={formData.favColor}
                            //onChange={handleChange}
                            name="al"
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

                        {/* <label>
                            Actividad Científica.
                        </label>
                        <input
                            type="text"
                            placeholder="INGRESAR UNA FECHA"
                            className="form--input"
                            name="programaInvestigacion"
                        //onChange={handleChange}
                        //value={formData.programaInvestigacion}
                        /> */}
                    </div>

                    <div className="col-4">
                        <label htmlFor="objetivoSocioeconomico">
                            Objetivo Socioeconómico.
                        </label>



                        {<br />}
                        <select
                            id="objetivoSocioeconomico"
                            //value={formData.favColor}
                            //onChange={handleChange}
                            name="objetivoSocioeconomico"
                            className="form-select"
                        >
                            <option value="">-- Elija un Elemento --</option>
                            <option value="Exporación y Explotacion de la tierra.">Exporación y Explotacion de la tierra.</option>
                            <option value="Infraestructuras y ordenación del territorio.">Infraestructuras y ordenación del territorio.</option>
                            <option value="Control y protección del medio ambiente.">Control y protección del medio ambiente.</option>
                            <option value="Protección y mejora de la salud humana.">Protección y mejora de la salud humana.</option>
                            <option value="Prod. Dist. y utilización racional de la energía.">Prod. Dist. y utilización racional de la energía.</option>
                            <option value="Producción y tecnología agrícola.">Producción y tecnología agrícola.</option>
                            <option value="Prodcción y tecnología industrial">Prodcción y tecnología industrial </option>
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
                        <label htmlFor="areaTematicaID">
                            Área tematica de I+D.
                        </label>



                        {<br />}
                        <select
                            id="areaTematicaID"
                            //value={formData.favColor}
                            //onChange={handleChange}
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


            <label htmlFor="planCreacionOportunidades">
                Objetivos del plan de Creación de Oportunidades.
            </label>



            {<br />}
            <select
                id="planCreacionOportunidades"
                //value={formData.favColor}
                //onChange={handleChange}
                name="planCreacionOportunidades"
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

            {<br />}

            <label>
                Clasificación Internacional Normalizada de la Educación
            </label>
            {<br />}
            {<br />}
            <div className="container">

                <div className="row">
                    <div className="col-4">
                        <label>
                            Campo amplio
                        </label>

                        {<br />}
                        <select
                            id="campoAmplio"
                            //value={formData.favColor}
                            //onChange={handleChange}
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
                        <label>
                            Campo específico
                        </label>
                        <select
                            id="campoEspecifico"
                            //value={formData.favColor}
                            //onChange={handleChange}
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
                        <label>
                            Campo detallado
                        </label>
                        <select
                            id="campoDetallado"
                            //value={formData.favColor}
                            //onChange={handleChange}
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

            <label>
                Objetivos del desarrollo Sostenible
            </label>

            <select
                id="objetivosDesarrolloSostenible"
                //value={formData.favColor}
                //onChange={handleChange}
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

            {/* </form> */}
        </section>
    )
}
