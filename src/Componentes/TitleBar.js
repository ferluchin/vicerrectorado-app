import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

import image from "../assets/utpl.png"
import "../style.css"

export default function TitleBar() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">

                    <img className="utpl-logo" src={image} style={{ margin: "10px" }} alt="" />
                </div>
                <div className="col-6">
                    <br />
                    <h3 style={{ textAlign: "left" }}>
                        Vicerrectorado de Investigación
                    </h3>
                    <h4 style={{ textAlign: "left" }}>
                        Gerencia de Proyectos
                    </h4>
                </div>
            </div>
            <br />
            <br />

        </div>
    )
}