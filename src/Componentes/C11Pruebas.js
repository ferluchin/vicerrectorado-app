import React from "react";
import "../style.css"


export default function C11Pruebas() {

    const LimitedTAResumen = ({ rows, cols, value, limit }) => {
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
        }, []);

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
        }, []);

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
        }, []);

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
        <div>
            <section>
                <LimitedTAResumen limit={150} value="" />,
                <LimitedTAAntecedentes limit={500} value="" />,
                <LimitedTAJustificacion limit={500} value="" />,

            </section>

        </ div>
    )
}

