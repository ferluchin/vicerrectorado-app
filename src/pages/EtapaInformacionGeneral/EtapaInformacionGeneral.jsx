import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";

import "./etapaInformacionGeneral.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TableFirebase from "../../components/tableFirebase/TableFirebase";
import TableInformacionGeneral from "../../components/tableInformacionGeneral/TableInformacionGeneral";
import TableTipoProyecto from "../../components/tableTipoProyecto/TableTipoProyecto";
import TablePersonalInterno from "../../components/tablePersonalInterno/TablePersonalInterno";
import TableInformacionTecnicaProyecto from "../../components/tableInformacionTecnicaProyecto/TableInformacionTecnicaProyecto";
import TableMetodologiaProyecto from "../../components/tableMetodologiaProyecto/TableMetodologiaProyecto";
import TableResumenPresupuesto from "../../components/tableResumenPresupuesto/TableResumenPresupuesto";
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom'



const EtapaInformacionGeneral = () => {

    const navigate = useNavigate();

    const editarInformacionGeneral = () => {
        // <Link to="/home" >
        //     Informacion General
        // </Link >
        navigate("/home")
    }

    return (
        <div className="admin">
            <AdminSidebar />
            <div className="adminContainer">
                <AdminNavbar />

                <div className="listContainer">
                    <div className="listTitle">
                        Datos Información General
                    </div>
                    <TableInformacionGeneral />
                    <button
                        className="btn btn-primary"
                        onClick={() => editarInformacionGeneral()}
                    >
                        Editar Sección
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EtapaInformacionGeneral;
