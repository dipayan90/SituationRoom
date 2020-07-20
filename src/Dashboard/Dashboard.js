import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron"
import KeyStats from "./KeyStats/KeyStats"
import './Dashboard.css'


export default class Dashboard extends Component {
    render() {
      return (
        <Container fluid="xl" className="slide-down">
        <Row>
            <Col>
            <Jumbotron>
                <KeyStats></KeyStats>
            </Jumbotron>                    
            </Col>
        </Row>
        <Row>
            <Col>
            <Jumbotron>
                <h1>Alarms Drilldown</h1>
            </Jumbotron>                    
            </Col>
        </Row>
    </Container>
      );
    }
  }