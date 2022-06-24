import AdminNavbar from "../../Componentes/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../Componentes/AdminSidebar/AdminSidebar";

import "./admin.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../Componentes/table/Table";
import TableFirebase from "../../Componentes/tableFirebase/TableFirebase";

const Admin = () => {
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
                
            </div>
        </div>
    );
};

export default Admin;
