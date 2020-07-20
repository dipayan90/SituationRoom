import React, { Component } from "react";
import { Container, Row} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import './Drilldown.css'


export default class Dashboard extends Component {
    render() {
      return (
        <Container fluid>
            <Row>
                <Accordion defaultActiveKey="0" className="fill-width">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <br/>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Row>
        </Container>
      );
    }
  }