import "./adminsidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { getAuth, signOut } from 'firebase/auth'
import { app, auth } from '../../firebase'
import { AuthContext } from "../../context/AuthContext";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'






const AdminSidebar = () => {

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };


    const handleLogout = (e) => {
        //e.preventDefault();
        
        // Signed OUT
        
        currentUser({ type: "LOGOUT", payload: null })
        navigate("/login");
        
            
    };

    const usuarioActual = () => {
        console.log(currentUser.email)
    }
    const cerrarSesion = () => {
        signOut(auth).then(() => {

            console.log("Sesión cerrada", currentUser.email)
            currentUser = null

        }).catch((error) => {
            // An error happened.
            console.log("An error happened.")
        });


        // <Link to="/login" >
        //     Administrador
        // </Link >
        //navigate("/login")

    }

    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="admin-sidebar">

            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Administrador Docente</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">PRINCIPAL</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Usuarios</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li> */}

                    {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}

                    <p className="title">PROYECTOS</p>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Continuar Formulario</span>
                        </li>
                    </Link>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notificationes</span>
                    </li>
                    <p className="title">SERVICIOS</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>Salud del sistema</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Ajustes</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Perfil</span>
                    </li>
                    <li
                        onClick={() => signOut(auth)}
                    >
                        <ExitToAppIcon className="icon" />
                        <span>Cerrar Sesión</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
            <button
                onClick={() => usuarioActual()}
                type="button"
            >
                usuario actual consola
            </button>

            <button
                onClick={() => handleLogout()}
            >
                cerrar sesión
            </button>
        </div>

    );
};

export default AdminSidebar;
