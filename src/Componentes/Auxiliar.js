
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
                <Route path="/director-proyecto" element={<DirectorProyecto />} />
                <Route path="/tipo-proyecto" element={<TipoProyecto />} />
                <Route path="/equipo-proyecto" element={<EquipoProyecto />} />
                <Route path="/informacion-tecnica-proyecto" element={<InformacionTecnicaProyecto />} />
                <Route path="/metodologia-proyecto" element={<MetodologiaProyecto />} />
                <Route path="/cronograma-actividades" element={<CronogramaActividades />} />
                <Route path="/resumen-presupuesto" element={<ResumenPresupuesto />} />
                <Route path="/pruebas" element={<C11Pruebas />} />
            </Routes>

        </div>

    </Split>

</main>