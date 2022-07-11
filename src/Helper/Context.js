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

    // personalInterno: {
    //     idPersonalInterno: {
    //         horasSemanales: "",
    //         horasTotales: "",
    //         id: "",
    //         identificacion: "",
    //         nombres: "",
    //         rol: "",
    //         senescyt: "",
    //         tipo: "",
    //     }
    // },

    personalInterno: {
        //PERSONAL INTERNO
        rolPersonalInterno1: "",
        rolPersonalInterno2: "",
        rolPersonalInterno3: "",
        rolPersonalInterno4: "",
        rolPersonalInterno5: "",

        tipoPersonalInterno1: "",
        tipoPersonalInterno2: "",
        tipoPersonalInterno3: "",
        tipoPersonalInterno4: "",
        tipoPersonalInterno5: "",

        senescyt1: "",
        senescyt2: "",
        senescyt3: "",
        senescyt4: "",
        senescyt5: "",

        identificacionPersonalInterno1: "",
        identificacionPersonalInterno2: "",
        identificacionPersonalInterno3: "",
        identificacionPersonalInterno4: "",
        identificacionPersonalInterno5: "",

        nombrePersonalInterno1: "",
        nombrePersonalInterno2: "",
        nombrePersonalInterno3: "",
        nombrePersonalInterno4: "",
        nombrePersonalInterno5: "",

        horasSemanalesPersonalInterno1: "",
        horasSemanalesPersonalInterno2: "",
        horasSemanalesPersonalInterno3: "",
        horasSemanalesPersonalInterno4: "",
        horasSemanalesPersonalInterno5: "",

        horasTotalesPersonalInterno1: "",
        horasTotalesPersonalInterno2: "",
        horasTotalesPersonalInterno3: "",
        horasTotalesPersonalInterno4: "",
        horasTotalesPersonalInterno5: "",
    },


    // personalExternoContratar: {
    //     idPersonalExternoContratar: {
    //         funcion: "",
    //         id: "",
    //         numeroPersonas: "",
    //         perfilRequerido: "",
    //         principalesActividades: "",
    //         tiempoContratacionMeses: "",
    //     }

    // },
    personalExternoContratar: {
        //PERSONAL EXTERNO CONTRATAR
        perfilRequerido1: "",
        perfilRequerido2: "",
        perfilRequerido3: "",
        perfilRequerido4: "",
        perfilRequerido5: "",

        funcion1: "",
        funcion2: "",
        funcion3: "",
        funcion4: "",
        funcion5: "",

        actividadesDesarrollar1: "",
        actividadesDesarrollar2: "",
        actividadesDesarrollar3: "",
        actividadesDesarrollar4: "",
        actividadesDesarrollar5: "",

        tiempoContratacion1: "",
        tiempoContratacion2: "",
        tiempoContratacion3: "",
        tiempoContratacion4: "",
        tiempoContratacion5: "",

        personasContratar1: "",
        personasContratar2: "",
        personasContratar3: "",
        personasContratar4: "",
        personasContratar5: "",
    },

    // personalExternoCooperante: {
    //     idPersonalExternoCooperante: {
    //         entidad: "",
    //         id: "",
    //         nombres: "",
    //         rol: "",
    //     }
    // },

    //PERSONAL EXTERNO COOPERANTE
    personalExternoCooperante: {
        rolPersonalCooperante1: "",
        rolPersonalCooperante2: "",
        rolPersonalCooperante3: "",
        rolPersonalCooperante4: "",
        rolPersonalCooperante5: "",

        nombrePersonalCooperante1: "",
        nombrePersonalCooperante2: "",
        nombrePersonalCooperante3: "",
        nombrePersonalCooperante4: "",
        nombrePersonalCooperante5: "",

        entidadPersonalCooperante1: "",
        entidadPersonalCooperante2: "",
        entidadPersonalCooperante3: "",
        entidadPersonalCooperante4: "",
        entidadPersonalCooperante5: "",
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