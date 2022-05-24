import React from "react";
// import NavBar from "../NavBar";

import "../style.css"


export default function DirectorProyecto() {

    return (
        <section>

            {/* <form
                className="form"
            //onSubmit={handleSubmit}
            > */}
                {/* <NavBar /> */}

                <label>
                    Datos del Director del Proyecto.
                </label>


                <input
                    type="text"
                    placeholder="NOMBRES Y APELLIDOS DEL DIRECTOR"
                    className="form--input"
                    name="programaInvestigacion"
                //onChange={handleChange}
                //value={formData.programaInvestigacion}
                />

                <input
                    type="text"
                    placeholder="IDENTIFICACION"
                    className="form--input"
                    name="programaInvestigacion"
                //onChange={handleChange}
                //value={formData.programaInvestigacion}
                />

                <input
                    type="text"
                    placeholder="TELEFONO"
                    className="form--input"
                    name="programaInvestigacion"
                //onChange={handleChange}
                //value={formData.programaInvestigacion}
                />

                <input
                    type="text"
                    placeholder="CORREO ELECTRONICO INSTITUCIONAL"
                    className="form--input"
                    name="programaInvestigacion"
                //onChange={handleChange}
                //value={formData.programaInvestigacion}
                />

            {/* </form> */}
        </section>
    )
}
