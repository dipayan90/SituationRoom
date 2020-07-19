import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import './About.css'

export default class Dashboard extends Component {
    render() {
      return (
        <Container fluid="xl" className="vertical-center">
            <Row>
                <Col>
                <Jumbotron>
                    <h1>Situation Room!</h1>
                    <p>
                        Cloudwatch Alarm Dashboard for suite of applications hosted on multiple AWS accounts, 
                        aggregated at one place.
                    </p>
                    <p>
                        <Button variant="primary" href="http://dipayan90.github.io" target="/">Learn more</Button>
                    </p>
                </Jumbotron>                    
                </Col>
            </Row>
        </Container>
      );
    }
  }