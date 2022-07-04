import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    currentUser: null,
    currentProject: null,
    isLoggedIn: false,

    informacionGeneral: {
        actividadCientifica: '',
        alcanceTerritorial: '',
        status: '',
        titulo: '',
    },
    areasConocimiento: {
        actividadCientifica: '',
        objetivoSocioeconomico: '',
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
        // id: {
        //     horasSemanales: "",
        //     horasTotales: "",
        //     id: "",
        //     identificacion: "",
        //     nombres: "",
        //     rol: "",
        //     senescyt: "",
        //     tipo: "",
        // }
    },

    personalExternoContratar: {
    },
    personalExternoCooperante: {
    },

    informacionTecnicaProyecto: {
        resumenProyecto: "",

        palabraClave1: "",
        palabraClave2: "",
        palabraClave3: "",
        palabraClave4: "",

        introduccionAntecedentes: "",
        introduccionJustificacion: "",


        objetivoGeneral: "",
        objetivoEspecifico1: "",
        objetivoEspecifico2: "",
        objetivoEspecifico3: "",
        objetivoEspecifico4: "",
        objetivoEspecifico5: ""
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