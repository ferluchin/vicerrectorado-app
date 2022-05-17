import React from "react";
import NavBar from "../NavBar";
import "../style.css"

export default function ResumenPresupuesto() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                {/* <NavBar /> */}
                <h3> 2.12 Resumen Presupuestos </h3>

                <h4> Items</h4>
                <label>
                    Viáticos, subsistencias y movilización. 
                </label>

                <input
                    type="text"
                    placeholder="ingresar Valor"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <label>
                    Honorarios.
                </label>

                <input
                    type="text"
                    placeholder="Ingresar Valor"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <label>
                    Materiales, suministros y reactivos.
                </label>

                <input
                    type="text"
                    placeholder="Ingresar Valor"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <label>
                    EQUIPOS
                </label>

                <input
                    type="text"
                    placeholder="Ingresar Valor"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <label>
                    Capacitación.
                </label>

                <input
                    type="text"
                    placeholder="Ingresar Valor"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <label>
                    Total de gastos directos.
                </label>

                <input
                    type="text"
                    placeholder="$"
                    className="form--input"
                    name="titulo"
                //onChange={handleChange}
                //value={formData.titulo}
                />

                <h3> 2.13 Bibliografía.</h3>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir Texto "
                    //onChange={handleChange}
                    name="comments"
                />

                <h3> 2.14 Observaciones.</h3>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir Texto "
                    //onChange={handleChange}
                    name="comments"
                />

            </form>

        </section>
    )
}