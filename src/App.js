import React, { useState, useEffect} from 'react';

import './App.css';

import Home from './Home';
import Login from './Componentes/Login';

import {
  Routes,
  Link,
  Route,
} from "react-router-dom";


import DirectorProyecto from './Componentes/C3DirectorProyecto';
import TipoProyecto from './Componentes/C5TipoProyecto';
import EquipoProyecto from './Componentes/C6EquipoProyecto';
import InformacionTecnicaProyecto from './Componentes/C7InformacionTecnicaProyecto';
import MetodologiaProyecto from './Componentes/C8MetodologiaProyecto';
import CronogramaActividades from './Componentes/C9CronogramaActividades';
import ResumenPresupuesto from './Componentes/C10ResumenPresupuesto';
import C11Pruebas from './Componentes/C11Pruebas';

import { getAuth, onAuthStateChanged } from "firebase/auth";


import Split from 'react-split';
import Sidebar from './Componentes/Sidebar';

import { app, auth} from './firebase';
import Main from './Componentes/Main';

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //codigo en caso de que se haya iniciado sesión
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //código en caso de que no se haya iniciado sesión
      setUsuarioGlobal(null);
    }
  });

  return (
    <>
      {usuarioGlobal ?
        <Main correoUsuario={usuarioGlobal.email} />
        :
        <Login />
      }
    </>

  );
}

export default App;

