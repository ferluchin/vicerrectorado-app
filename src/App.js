import './App.css';


import DirectorProyecto from './Componentes/C3DirectorProyecto';
import TipoProyecto from './pages/TipoProyecto/C5TipoProyecto';
import EquipoProyecto from './pages/PersonalInterno/PersonalInterno';
import InformacionTecnicaProyecto from './pages/InformacionTecnicaProyecto/C7InformacionTecnicaProyecto';
import MetodologiaProyecto from './pages/MetodologiaProyecto/C8MetodologiaProyecto';
import CronogramaActividades from './pages/CronogramaActividades/C9CronogramaActividades';
import ResumenPresupuesto from './pages/ResumenPresupuesto/C10ResumenPresupuesto';
import C11Pruebas from './pages/ZonaPruebas/C11Pruebas';

import PersonalExternoContratar from './pages/PersonalExternoContratar/PersonalExternoContratar';
import PersonalExternoCooperante from './pages/PersonalExternoCooperante/PersonalExternoCooperante';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
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

                    <Route path="/" element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    } />


                    {/* <Route path="/fechas-proyecto" element={<FechasProyecto />} /> */}
                    <Route path="/director-proyecto" element={
                        <RequireAuth>
                            <DirectorProyecto />
                        </RequireAuth>
                    } />
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
                    <Route path="/pruebas" element={<C11Pruebas />} />
                </Routes>

            </div>

        </>
    );
}

export default App;

/*
            <Split
                sizes={[20, 80]}
                direction="horizontal"
                className="split"
                minSize={100}
                expandToMin={false}
                dragInterval={1}
                cursor="col-resize"
            >
                <Sidebar
                //notes={notes}
                //currentNote={findCurrentNote()}
                //setCurrentNoteId={setCurrentNoteId}
                //newNote={createNewNote}
                />

            </Split>
*/