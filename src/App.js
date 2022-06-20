import './App.css';

import Home from './Home';

// import FechasProyecto from './Componentes/C2FechasProyecto';
import DirectorProyecto from './Componentes/C3DirectorProyecto';
// import AreasConocimiento from './Componentes/C4AreasConocimiento';
import TipoProyecto from './Componentes/C5TipoProyecto';
import EquipoProyecto from './Componentes/PersonalInterno';
import InformacionTecnicaProyecto from './Componentes/C7InformacionTecnicaProyecto';
import MetodologiaProyecto from './Componentes/C8MetodologiaProyecto';
import CronogramaActividades from './Componentes/C9CronogramaActividades';
import ResumenPresupuesto from './Componentes/C10ResumenPresupuesto';
import C11Pruebas from './Componentes/C11Pruebas';
import Login from './pages/login/Login';

import Split from 'react-split';
import Sidebar from './Componentes/Sidebar';
import PersonalExternoCooperante from './Componentes/PersonalExternoCooperante';
import PersonalExternoContratar from './Componentes/PersonalExternoContratar';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <main>
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

      </Split>

    </main>
  );
}

export default App;

