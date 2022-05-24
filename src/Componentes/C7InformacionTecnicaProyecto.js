import React from "react";
// import NavBar from "../NavBar";
import "../style.css"

export default function InformacionTecnicaProyecto() {


    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                {/* <NavBar /> */}

                <h2> 2.  Información Técnica del Proyecto</h2>
                <h3> 2.1 Resúmen del Proyecto</h3>

                <textarea
                    //value={formData.comments}
                    placeholder="Realizar una síntesis clara y concisa del proyecto (maximo 150 palabras)"
                    //onChange={handleChange}
                    name="comments"
                />

                <h3> 2.2 PALABRAS CLAVE</h3>



                <input
                    type="text"
                    placeholder="Máximo cuatro"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />


                <h3> 2.3 Introducción </h3>


                <h4> a. Antecedentes </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Máximo 500 palabras"
                    //onChange={handleChange}
                    name="comments"
                />

                <h4> b. Justificación </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Máximo 500 palabras"
                    //onChange={handleChange}
                    name="comments"
                />
                <h3> 2.5 OBJETIVOS DEL PROYECTO</h3>
                <h4> Objetivo General: </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Detallar"
                    //onChange={handleChange}
                    name="comments"
                />

                <h4> Objetivos Específicos: </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Se recomienda máximo 3"
                    //onChange={handleChange}
                    name="comments"
                />

            </form>

        </section>
    )
}