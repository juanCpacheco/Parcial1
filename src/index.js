import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Lgn";
import Parte from "./Parte";

const root = ReactDOM.createRoot(document.getElementById("root"));
const url = "";

async function fetchInfo(URL) {
    const info = await fetch(URL);
}

root.render(
    <Container>
        <Row xs={1}>
            <Col>
                <Login />
                <Parte />
            </Col>
        </Row>
    </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
