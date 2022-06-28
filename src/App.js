import './App.css';

import TipoProyecto from './pages/TipoProyecto/C5TipoProyecto';
import EquipoProyecto from './pages/PersonalInterno/PersonalInterno';
import InformacionTecnicaProyecto from './pages/InformacionTecnicaProyecto/C7InformacionTecnicaProyecto';
import MetodologiaProyecto from './pages/MetodologiaProyecto/C8MetodologiaProyecto';
import CronogramaActividades from './pages/CronogramaActividades/C9CronogramaActividades';
import ResumenPresupuesto from './pages/ResumenPresupuesto/C10ResumenPresupuesto';
import C11Pruebas from './pages/ZonaPruebas/C11Pruebas';

import PersonalExternoContratar from './pages/PersonalExternoContratar/PersonalExternoContratar';
import PersonalExternoCooperante from './pages/PersonalExternoCooperante/PersonalExternoCooperante';


import EtapaInformacionGeneral from './pages/EtapaInformacionGeneral/EtapaInformacionGeneral';
import EtapaTipoProyecto from './pages/EtapaTipoProyecto/EtapaTipoProyecto';
import EtapaResumenPresupuesto from './pages/EtapaResumenPresupuesto/EtapaResumenPresupuesto';
import EtapaCronogramaActividades from './pages/EtapaCronogramaActividades/EtapaCronogramaActividaddes';

import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';

import { Routes, Route, Navigate } from "react-router-dom";

import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {

    const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <>

            <div className="App">

                <Routes>

                    <Route path="login" element={<Login />} />
                    <Route path="/" exact element={
                        <RequireAuth>
                            <Admin />
                        </RequireAuth>
                    } />

                    <Route path="/home" element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    } />

                    {/* <Route path="/fechas-proyecto" element={<FechasProyecto />} /> */}
                    
                    {/* <Route path="/areas-conocimiento" element={<AreasConocimiento />} /> */}
                    <Route path="/tipo-proyecto" element={
                        <RequireAuth>
                            <TipoProyecto />
                        </RequireAuth>
                    } />
                    {/* <Route path="/equipo-proyecto" element={<EquipoProyecto />} /> */}
                    <Route path="/personal-interno" element={
                        <RequireAuth>
                            <EquipoProyecto />
                        </RequireAuth>
                    } />

                    <Route path="/personal-externo-cooperante" element={
                        <RequireAuth>
                            <PersonalExternoCooperante />
                        </RequireAuth>
                    } />

                    <Route path="/personal-externo-contratar" element={
                        <RequireAuth>
                            <PersonalExternoContratar />
                        </RequireAuth>
                    } />
                    <Route path="/informacion-tecnica-proyecto" element={
                        <RequireAuth>
                            <InformacionTecnicaProyecto />
                        </RequireAuth>
                    } />

                    <Route path="/metodologia-proyecto" element={
                        <RequireAuth>
                            <MetodologiaProyecto />
                        </RequireAuth>
                    } />
                    <Route path="/cronograma-actividades" element={
                        <RequireAuth>
                            <CronogramaActividades />
                        </RequireAuth>
                    } />

                    <Route path="/resumen-presupuesto" element={
                        <RequireAuth>
                            <ResumenPresupuesto />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-informacion-general" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-tipo-proyecto" element={
                        <RequireAuth>
                            <EtapaTipoProyecto />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-personal-interno" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />


                    <Route path="/etapa-personal-externo-cooperante" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-personal-externo-contratar" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-informacion-tecnica-proyecto" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />


                    <Route path="/etapa-metodologia-proyecto" element={
                        <RequireAuth>
                            <EtapaInformacionGeneral />
                        </RequireAuth>
                    } />

                    <Route path="/etapa-cronograma-actividades" element={
                        <RequireAuth>
                            <EtapaCronogramaActividades />
                        </RequireAuth>
                    } />
                    

                    <Route path="/etapa-resumen-presupuesto" element={
                        <RequireAuth>
                            <EtapaResumenPresupuesto />
                        </RequireAuth>
                    } />

                    <Route path="/pruebas" element={<C11Pruebas />} />

                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>

            </div>

        </>
    );
}

export default App;
