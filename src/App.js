import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
    return (
        <div>
            <h1>Acceder</h1>

            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <Form.Label>Usa tu Cuenta de UniAlpes</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Correo electronico"
                    />
                    <Form.Text className="text-muted">
                        Click si olvidaste tu correo.
                    </Form.Text>
                </Form.Group>
                <Form.Label> Crear cuenta </Form.Label>
                <Button variant="primary">Siguiente</Button>
            </Form>
        </div>
    );
}
export default App;
