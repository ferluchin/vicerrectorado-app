import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";

import "./admin.scss";
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



const Admin = () => {

    const navigate = useNavigate();

    const editarInformacionGeneral = () => {
        // <Link to="/home" >
        //     Informacion General
        // </Link >
        navigate("/home")
    }

    const editarTipoProyecto = () => {
        navigate("/tipo-proyecto")
    }

    const editarPersonalInterno = () => {
        navigate("/personal-interno")

    }

    const editarPersonalExternoContratar = () => {
        navigate("/personal-externo-contratar")

    }

    const editarPersonalExternoCooperante = () => {
        navigate("/personal-externo-cooperante")
    }

    //const 


    return (
        <div className="admin">
            <AdminSidebar />
            <div className="adminContainer">
                <AdminNavbar />


                {/*         
        <div className="widgets">
            <Widget type="user" />
            <Widget type="product" />
            <Widget type="order" />
            <Widget type="earning" />
        </div>
 */}

                {/* 
        <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> 
        */}

                {/* <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros
                    </div>
                    <Table />
                </div> */}




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

                <div className="listContainer">
                    <div className="listTitle">
                        Tipo de Proyecto
                    </div>
                    <TableTipoProyecto />
                    <button
                        className="btn btn-primary"
                        onClick={() => editarTipoProyecto()}
                    >
                        Editar Sección
                    </button>

                </div>
                {/*                 
                
                
                */}

                <div className="listContainer">
                    <div className="listTitle">
                        Personal Interno
                    </div>
                    <TablePersonalInterno />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                {/* 
                <div className="listContainer">
                    <div className="listTitle">
                        Personal Externo Cooperante
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Personal Externo a Contratar
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>
            */}
                <div className="listContainer">
                    <div className="listTitle">
                        Información Técnica del Proyecto
                    </div>
                    <TableInformacionTecnicaProyecto />
                    <button className="btn btn-primary">Editar Sección</button>


                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Metodología del Proyecto
                    </div>
                    <TableMetodologiaProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Resumen del Presupuesto
                    </div>
                    <TableResumenPresupuesto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>
                {/*


                <div className="listContainer">
                    <div className="listTitle">
                        Cronograma de Actividades
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Resumen del Presupuesto
                    </div>
                    <TableTipoProyecto />
                    <button className="btn btn-primary">Editar Sección</button>

                </div>
                
                */}
                {/*                 
                <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros Firebase
                    </div>
                    <TableFirebase />
                </div> */}

            </div>
        </div>
    );
};

export default Admin;
