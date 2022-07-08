import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    currentUser: null,
    currentProject: null,
    isLoggedIn: false,

    auxiliar: "",
    contador: "",

    informacionGeneral: {
        actividadCientifica: '',
        alcanceTerritorial: '',
        status: '',
        titulo: '',
    },
    areasConocimiento: {
        actividadCientifica: '',
        objetivoSocioEconomico: '',
        areaTematicaID: '',
        objetivosPlanCreacionOportunidades: '',

        //Clasifiación internacional normalizada de la educacion
        campoAmplio: '',
        campoEspecifico: '',
        campoDetallado: '',
        objetivosDesarrolloSostenible: '',

    },

    tipoProyecto: {
        tipoProyecto: "",
        tipoInvestigacion: "",
        tipoFinanciamiento: "",

        organismoEntidadFinanciador: "",

        presupuestoTotal: "",
        aporteUTPL: "",
        aporteContraparte: "",
    },

    personalInterno: {
        idPersonalInterno: {
            horasSemanales: "",
            horasTotales: "",
            id: "",
            identificacion: "",
            nombres: "",
            rol: "",
            senescyt: "",
            tipo: "",
        }
    },

    personalExternoContratar: {
        idPersonalExternoContratar: {
            funcion: "",
            id: "",
            numeroPersonas: "",
            perfilRequerido: "",
            principalesActividades: "",
            tiempoContratacionMeses: "",
        }

    },
    personalExternoCooperante: {
        idPersonalExternoCooperante: {
            entidad: "",
            id: "",
            nombres: "",
            rol: "",
        }
    },

    informacionTecnicaProyecto: {
        resumenProyecto: "",

        palabraClave1: "",
        palabraClave2: "",
        palabraClave3: "",
        palabraClave4: "",

        introduccionAntecedentes: "",
        introduccionJustificacion: "",

        nombreEquipo1: "",
        nombreEquipo2: "",
        nombreEquipo3: "",

        ubicacionEquipo1: "",
        ubicacionEquipo2: "",
        ubicacionEquipo3: "",

        objetivoGeneral: "",
    },

    metodologiaProyecto: {
        articuloCientifico: '',
        aspectosBioeticos: '',
        descripcionActividadID: '',
        impactoCientifico: '',
        impactoEconomico: '',
        impactoPolitico: '',
        impactoSocial: '',
        metodologia: '',
        otroImpacto: '',
        otrosTransferenciaConocimiento: '',
        prototipo: '',
        registroPropiedadIndustrial: '',
    },

    cronogramaActividades: {

    },

    cronogramaEspA: {
        actividadEspecifica1: "",
        actividadEspecifica2: "",
        actividadEspecifica3: "",
        actividadEspecifica4: "",
        actividadEspecifica5: "",

        fechaInicio1: "",
        fechaInicio2: "",
        fechaInicio3: "",
        fechaInicio4: "",
        fechaInicio5: "",

        fechaFin1: "",
        fechaFin2: "",
        fechaFin3: "",
        fechaFin4: "",
        fechaFin5: "",

        itemPresupuesto1: "",
        itemPresupuesto2: "",
        itemPresupuesto3: "",
        itemPresupuesto4: "",
        itemPresupuesto5: "",

        nombreEvidencia1: "",
        nombreEvidencia2: "",
        nombreEvidencia3: "",
        nombreEvidencia4: "",
        nombreEvidencia5: "",

        nombreResponsableActividad1: "",
        nombreResponsableActividad2: "",
        nombreResponsableActividad3: "",
        nombreResponsableActividad4: "",
        nombreResponsableActividad5: "",

        objetivoEspecificoCronograma1: "",
        objetivoEspecificoCronograma2: "",
        objetivoEspecificoCronograma3: "",
        objetivoEspecificoCronograma4: "",
        objetivoEspecificoCronograma5: "",

        objetivoGeneral: "",

        resultadoObjetivoEspecificoCronograma1: "",

        valorPresupuesto1: "",
        valorPresupuesto2: "",
        valorPresupuesto3: "",
        valorPresupuesto4: "",
        valorPresupuesto5: "",

    },

    cronogramaEspB: {

    },

    cronogramaEspC: {

    },

    cronogramaEspD: {

    },

    cronogramaEspE: {

    },

    resumenPresupuesto: {
        bibliografia: '',
        capacitacion: '',
        equipos: '',
        honorarios: '',
        materialesSuministrosReactivos: '',
        observaciones: '',
        totalGastosDirectos: '',
        viaticosSubsistenciasMovilizacion: '',
    },

});

export { setGlobalState, useGlobalState };