import React, { useState } from "react";

import image from "../../assets/utpl.png"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import Split from "react-split";
import Sidebar from "../../Componentes/Sidebar";
import "./pruebas.css"

export default function C11Pruebas() {


    const LimitedTAResumen = ({ rows, cols, value, limit }) => {
        const [{ content, wordCount }, setContent] = useState({
            content: value,
            wordCount: 0
        });

        const setFormattedContent = React.useCallback(
            text => {
                let words = text.split(' ').filter(Boolean);
                if (words.length > limit) {
                    setContent({
                        content: words.slice(0, limit).join(' '),
                        wordCount: limit
                    });
                } else {
                    setContent({ content: text, wordCount: words.length });
                }
            },
            [limit, setContent]
        );

        React.useEffect(() => {
            setFormattedContent(content);
        }, [content, setFormattedContent]);

        return (
            <form className="form">

                <div>
                    

                    <textarea
                        rows={rows}
                        cols={cols}
                        onChange={event => setFormattedContent(event.target.value)}
                        value={content}
                        placeholder={"Máximo 150 palabras"}
                    />
                    <p>
                        {wordCount}/{limit}
                    </p>
                </ div>
            </form>
        );
    };

    const LimitedTAAntecedentes = ({ rows, cols, value, limit }) => {
        const [{ content, wordCount }, setContent] = React.useState({
            content: value,
            wordCount: 0
        });

        const setFormattedContent = React.useCallback(
            text => {
                let words = text.split(' ').filter(Boolean);
                if (words.length > limit) {
                    setContent({
                        content: words.slice(0, limit).join(' '),
                        wordCount: limit
                    });
                } else {
                    setContent({ content: text, wordCount: words.length });
                }
            },
            [limit, setContent]
        );

        React.useEffect(() => {
            setFormattedContent(content);
        }, [content, setFormattedContent]);

        return (
            <form className="form">

                <div>
                    <textarea
                        rows={rows}
                        cols={cols}
                        onChange={event => setFormattedContent(event.target.value)}
                        value={content}
                        placeholder={"Máximo 500 palabras"}

                    />
                    <p>
                        {wordCount}/{limit}
                    </p>
                </ div>
            </form>
        );
    };

    const LimitedTAJustificacion = ({ rows, cols, value, limit }) => {
        const [{ content, wordCount }, setContent] = React.useState({
            content: value,
            wordCount: 0
        });

        const setFormattedContent = React.useCallback(
            text => {
                let words = text.split(' ').filter(Boolean);
                if (words.length > limit) {
                    setContent({
                        content: words.slice(0, limit).join(' '),
                        wordCount: limit
                    });
                } else {
                    setContent({ content: text, wordCount: words.length });
                }
            },
            [limit, setContent]
        );

        React.useEffect(() => {
            setFormattedContent(content);
        }, [content, setFormattedContent]);

        return (
            <form className="form">

                <div>
                    <textarea
                        className="textarea-react"
                        rows={rows}
                        cols={cols}
                        onChange={event => setFormattedContent(event.target.value)}
                        value={content}
                        placeholder={"Máximo 500 palabras"}

                    />
                    <p>
                        {wordCount}/{limit}
                    </p>
                </ div>
            </form>
        );
    };
    return (
        <>
            <Split
                sizes={[30, 70]}
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

                <div>
                    <section>
                        <LimitedTAResumen limit={150} value="" />,
                        <LimitedTAAntecedentes limit={500} value="" />,
                        <LimitedTAJustificacion limit={500} value="" />,
                        {/* <DatePicker
                    selected={this.state.fecha}
                    // selected={date}
                    // onSelect={handleDateSelect} //when day is clicked
                    // onChange={handleDateChange} //only when value has changed
                    
                /> */}

                    </section>

                </ div>
            </Split>
        </>

    )
}

