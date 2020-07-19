import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import history from './../history';
import logo from '../logo.gif';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
              <img src={logo} className="App-logo" alt="logo" />
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
              <Col>
                <Button variant="outline-primary" size="lg" block onClick={() => history.push('/dashboard')}>Enter</Button>
              </Col>
            </Row>
          </Container>
        </header>
      </div>  
    );
  }
}