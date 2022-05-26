import React from "react";
// import NavBar from "../NavBar";
import TitleBar from "./TitleBar";

import "../style.css"

export default function CronogramaActividades() {
    return (
        <section>
            <form
                className="form"
            //onSubmit={handleSubmit}
            >
                <TitleBar />
                {/* <NavBar /> */}

                <h3> 2.11 CRONOGRAMA DE ACTIVIDADES</h3>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h4> Objetivo General </h4>

                        </div>
                        <div className="col-8">
                            <textarea
                                //value={formData.comments}
                                placeholder="Escribir texto"
                                //onChange={handleChange}
                                name="comments"
                            />

                        </div>

                    </div>
                </div>


                <h4> Objetivo Específico 1 </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir texto"
                    //onChange={handleChange}
                    name="comments"
                />
                <h4> Resultado objetivo específico 1</h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir texto"
                    //onChange={handleChange}
                    name="comments"
                />
                {<br />}
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-0lax">Nro.</th>
                            <th class="tg-0lax">ACTIVIDADES</th>
                            <th class="tg-0lax">Fecha Inicio</th>
                            <th class="tg-0lax">Fecha Fin</th>
                            <th class="tg-0lax">Nombre Evidencia<br />Medio verificación<br /></th>
                            <th class="tg-0lax">Valor <br />Presupuesto<br /></th>
                            <th class="tg-0lax">Item de <br />Presupuesto<br /></th>
                            <th class="tg-0lax">Nombre responsable <br />de Actividad<br /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">Escribir Texto</td>
                            <td class="tg-0lax">DD/MM/AAAA</td>
                            <td class="tg-0lax">DD/MM/AAAA</td>
                            <td class="tg-0lax">Escribir Texto<br /></td>
                            <td class="tg-0lax">Valor</td>
                            <td class="tg-0lax">Elije Elemento</td>
                            <td class="tg-0lax">Escribe Texto</td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                    </tbody>
                </table>

                <h4> OBJETIVO ESPECÍFICO 2 </h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir texto"
                    //onChange={handleChange}
                    name="comments"
                />
                <h4> RESULTADO OBJETIVO ESPECÍFICO 2</h4>
                <textarea
                    //value={formData.comments}
                    placeholder="Escribir texto"
                    //onChange={handleChange}
                    name="comments"
                />

                {<br />}
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-0lax">Nro.</th>
                            <th class="tg-0lax">ACTIVIDADES</th>
                            <th class="tg-0lax">Fecha Inicio</th>
                            <th class="tg-0lax">Fecha Fin</th>
                            <th class="tg-0lax">Nombre Evidencia<br />Medio verificación<br /></th>
                            <th class="tg-0lax">Valor <br />Presupuesto<br /></th>
                            <th class="tg-0lax">Item de <br />Presupuesto<br /></th>
                            <th class="tg-0lax">Nombre responsable <br />de Actividad<br /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">Escribir Texto</td>
                            <td class="tg-0lax">DD/MM/AAAA</td>
                            <td class="tg-0lax">DD/MM/AAAA</td>
                            <td class="tg-0lax">Escribir Texto<br /></td>
                            <td class="tg-0lax">Valor</td>
                            <td class="tg-0lax">Elije Elemento</td>
                            <td class="tg-0lax">Escribe Texto</td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <button
                    className="btn btn-primary"
                //onClick={() => console.log(docenteSeleccionado)}
                //type="button"
                >
                    Enviar Información
                </button>
            </form>

        </section>
    )
}