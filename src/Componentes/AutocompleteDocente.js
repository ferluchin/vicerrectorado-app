import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Autosuggest from 'react-autosuggest';

import "./support.css"


const data = [
    {
        //"id": "1",
        "nombre": "Luis Fernando Granda Morales",
        "identificacion": "1104435092",
        "telefono": "0961769500",
        "correo": "lfgranda3@utpl.edu.ec"
    },
    {
        //"id": "2",
        "nombre": "Monica Elizabeth Abendaño Ramirez",
        "identificacion": "11025879365",
        "telefono": "2418",
        "correo": "mabendano@utpl.edu.ec"
    },
    {
        //"id": "3",
        "nombre": "Boris Antonio Galarza Aguirre",
        "identificacion": "1104435092",
        "telefono": "073701444",
        "correo": "bagalarza1@utpl.edu.ec"
    },
    {
        //"id": "4",
        "nombre": "Rocio del Cisne Uchuari Uchuari",
        "identificacion": "1104435092",
        "telefono": "2346",
        "correo": "ruchuari@utpl.edu.ec"
    },
    {
        //"id": "5",
        "nombre": "Gloria del Carmen Palacio Valdivieso",
        "identificacion": "1104435092",
        "telefono": "07370144",
        "correo": "gpalacio@utpl.edu.ec"
    }
]
// const data = [
//     { nombre: "Nombre1", correo: "Jair Messias Bolsonaro" },
//     { nombre: "Name", correo: "Andrés Manuel López Obrador" },
// ];

export default function AutocompleteDocente() {
    /*
        function useDocentes() {
            const [docentes, setDocentes] = useState([])
    
            useEffect(() => {
                fetch("json/docentes.json")
                    .then(response => response.json())
                    .then(datos => {
                        setDocentes(datos)
                    })
            }, [])
            return docentes
        }
    
        // const [docentes, setDocentes] = useState(data);
    
        // const docentes = useDocentes()
    */
    const [docentes, setDocentes ] = useState(data);
    const [value, setValue] = useState("");
    const [docenteSeleccionado, setDocenteSeleccionado] = useState({});

    const onSuggestionsFetchRequested = ({ value }) => {
        // setDocentes(filtrarDocentes(value));
        // useDocentes(filtrarDocentes(value));
        setDocentes(filtrarDocentes(value));


    }

    const filtrarDocentes = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        var filtrado = data.filter((docente) => {
            var textoCompleto = docente.nombre +
                " - " + docente.identificacion +
                " - " + docente.telefono + " - "
                + docente.correo;

            if (textoCompleto.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputValue)) {
                return docente;
            }
        });

        return inputLength === 0 ? [] : filtrado;
    }

    const onSuggestionsClearRequested = () => {
        // setDocentes([]);
        // useDocentes([]);
        setDocentes([]);
    }

    const getSuggestionValue = (suggestion) => {
        return `${suggestion.nombre} - ${suggestion.identificacion} - ${suggestion.telefono} - ${suggestion.correo}`;
    }

    const renderSuggestion = (suggestion) => (
        <div
            className='sugerencia'
            onClick={() => seleccionarDocente(suggestion)}
        >
            {`${suggestion.nombre} - ${suggestion.identificacion} - ${suggestion.telefono} - ${suggestion.correo}`}
        </div>
    );

    const seleccionarDocente = (docente) => {
        setDocenteSeleccionado(docente);
    }

    const onChange = (e, { newValue }) => {
        setValue(newValue);
    }

    const inputProps = {
        placeholder: "Nombre del docente",
        value,
        //className: "form--input",
        onChange
        
    };

    /*
                            type="text"
                        placeholder="Escribir Texto"
                        className="form--input"
                        name="programaInvestigacion"
    */
    const eventEnter = (e) => {
        if (e.key == "Enter") {
            var split = e.target.value.split('-');
            var docente = {
                nombre: split[0].trim(),
                identificacion: split[1].trim(),
                telefono: split[2].trim(),
                correo: split[3].trim(),

            };
            seleccionarDocente(docente);
        }
    }

    return (
        <div className="App">
            <Autosuggest
                suggestions={docentes}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={eventEnter}

            />
            <br />
            <button
                className='btn btn-primary'
                onClick={() => console.log(docenteSeleccionado)}
                type="button"
            >
                Seleccionar Docente
            </button>
        </div>
    )
}