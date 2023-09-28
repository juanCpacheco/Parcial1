import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Parte(props) {
    const handleDetail = () => {};

    return (
        <Col>
            <Card style={{ width: "300", height: "200" }}>
                <Card.Body className="mb-3" onClick={handleDetail}>
                    <Card.Img>{props.image}</Card.Img>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>{props.info}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Parte;
