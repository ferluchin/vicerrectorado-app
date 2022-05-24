import React from "react";
// import NavBar from "../NavBar";
import "../style.css"

export default function MetodologiaProyecto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                {/* <NavBar /> */}
                <h3> 2.6 Metodología</h3>
                <textarea
                    //value={formData.comments}
                    placeholder="Describir de manera sintética los métodos 
                    y técnicas necesarias para alcanzar sus objetivos"
                    //onChange={handleChange}
                    name="comments"
                />

                <h3> 2.7 Transferecia de conocimiento</h3>

                <h3> 2.8 IMPACTOS DEL PROYECTO</h3>

                <h3> 2.9 DESCRIPCION DE ACTIVIDAD I+D</h3>

                <textarea
                    //value={formData.comments}
                    placeholder="Descripción de la actividad"
                    //onChange={handleChange}
                    name="comments"
                />

                <h3> 2.10 Aspectos Bioéticos</h3>

                <textarea
                    //value={formData.comments}
                    placeholder="Su proyecto requiere aprobación de un comité de bioética"
                    //onChange={handleChange}
                    name="comments"
                />
            </form>

        </section>
    )
}