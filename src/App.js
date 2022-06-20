import './App.css';

import Home from './Home';

import { Routes, Link, Route } from "react-router-dom";

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


import Split from 'react-split';
import Sidebar from './Componentes/Sidebar';
import PersonalExternoCooperante from './Componentes/PersonalExternoCooperante';
import PersonalExternoContratar from './Componentes/PersonalExternoContratar';
function App() {
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
            <Route path="/" element={<Home />} />
            {/* <Route path="/fechas-proyecto" element={<FechasProyecto />} /> */}
            <Route path="/director-proyecto" element={<DirectorProyecto />} />
            {/* <Route path="/areas-conocimiento" element={<AreasConocimiento />} /> */}
            <Route path="/tipo-proyecto" element={<TipoProyecto />} />
            {/* <Route path="/equipo-proyecto" element={<EquipoProyecto />} /> */}
            <Route path="/personal-interno" element={<EquipoProyecto />} />
            <Route path="/personal-externo-cooperante" element={<PersonalExternoCooperante />} />
            <Route path="/personal-externo-contratar" element={<PersonalExternoContratar />} />
            <Route path="/informacion-tecnica-proyecto" element={<InformacionTecnicaProyecto />} />
            <Route path="/metodologia-proyecto" element={<MetodologiaProyecto />} />
            <Route path="/cronograma-actividades" element={<CronogramaActividades />} />
            <Route path="/resumen-presupuesto" element={<ResumenPresupuesto />} />
            <Route path="/pruebas" element={<C11Pruebas />} />
          </Routes>

        </div>

      </Split>

    </main>
  );
}

export default App;

