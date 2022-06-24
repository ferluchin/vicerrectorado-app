import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";

import "./admin.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TableFirebase from "../../components/tableFirebase/TableFirebase";

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
                <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros
                    </div>
                    <Table />
                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Últimos  Registros Firebase
                    </div>
                    <TableFirebase />
                </div>

            </div>
        </div>
    );
};

export default Admin;
