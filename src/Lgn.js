import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Login() {
    const clickSiguiente = (e) => {
        return paso2;
    };

    const paso1 = (
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
                <Button variant="primary" onClick={clickSiguiente}>
                    Siguiente
                </Button>
            </Form>
        </div>
    );

    const paso2 = (
        <div>
            <h1>Acceder</h1>

            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <Form.Label>{}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="ingresa tu constraseña"
                    />
                    <Form.Text className="text-muted">
                        Mostrar constraseña.
                    </Form.Text>
                </Form.Group>
                <Form.Label> Crear cuenta </Form.Label>
                <Button variant="primary" onClick={clickSiguiente}>
                    Siguiente
                </Button>
            </Form>
        </div>
    );

    return paso1;
}

export default Login;
