// import React, { useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
// import PersonalExternoCooperante from './PersonalExternoCooperante';
// import PersonalExternoContratar from './PersonalExternoContratar';

// // import NavBar from "../NavBar";
// import "../style.css"

// export default function EquipoProyecto() {
//     return (
//         <section>
//             <form
//                 className="form"
//             //onSubmit={handleSubmit}
//             >
//                 {/* <NavBar /> */}

//                 <h3> Equipo del Proyecto</h3>
//                 <h4>Personal Interno</h4>


//                 <table className="tg">
//                     <thead>
//                         <tr>
//                             <th className="tg-0lax">Nro.</th>
//                             <th className="tg-0lax">ROL</th>
//                             <th className="tg-0lax">TIPO</th>
//                             <th className="tg-0lax">INVESTIGADORES</th>
//                             <th className="tg-0lax">IDENTIFICACIÓN</th>
//                             <th className="tg-0lax">NOMBRES <br />Y APELLIDOS</th>
//                             <th className="tg-0lax">HORAS SEMANALES <br />DE PARTICIPACION</th>
//                             <th className="tg-0lax">TOTAL HORAS <br />PARTICIPACIÓN <br />EN EL PROYECTO</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="tg-0lax">01</td>
//                             <td className="tg-0lax">Seleccione</td>
//                             <td className="tg-0lax">Seleccione</td>
//                             <td className="tg-0lax">Seleccione</td>
//                             <td className="tg-0lax">0000000000</td>
//                             <td className="tg-0lax">Texto</td>
//                             <td className="tg-0lax">00</td>
//                             <td className="tg-0lax">00</td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <h4>Personal Externo Cooperante</h4>

//                 <table className="tg">
//                     <thead>
//                         <tr>
//                             <th>Nro.</th>
//                             <th>ROL</th>
//                             <th>NOMBRES COMPLETOS</th>
//                             <th>ENTIDAD</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="tg-0lax">01</td>
//                             <td className="tg-0lax">Elija un elemento</td>
//                             <td className="tg-0lax">Escribir Texto</td>
//                             <td className="tg-0lax">Escribir Texto</td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax">02</td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0lax">03</td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                             <td className="tg-0lax"></td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <h4>Personal Externo a contratar</h4>
//                 <table className="tg">
//                     <thead>
//                         <tr>
//                             <th className="tg-0pky">Nro.</th>
//                             <th className="tg-0pky">PERFIL REQUERIDO</th>
//                             <th className="tg-0pky">FUNCION</th>
//                             <th className="tg-0pky">PRINCIPALES ACTIVIDADES A DESARROLLAR</th>
//                             <th className="tg-0lax">Tiempo de contratación meses</th>
//                             <th className="tg-0lax">Número de personas a contratar</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="tg-0pky">01</td>
//                             <td className="tg-0pky">Escribir Texto</td>
//                             <td className="tg-0pky">Elija un Elemento</td>
//                             <td className="tg-0pky">Escribir Texto</td>
//                             <td className="tg-0lax">00</td>
//                             <td className="tg-0lax">00</td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0pky">02</td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0lax">00</td>
//                             <td className="tg-0lax">00</td>
//                         </tr>
//                         <tr>
//                             <td className="tg-0pky">03</td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0pky"></td>
//                             <td className="tg-0lax">00</td>
//                             <td className="tg-0lax">00</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <PersonalExternoCooperante />

//                 <PersonalExternoContratar />
//             </form>

//         </section>
//     )
// }