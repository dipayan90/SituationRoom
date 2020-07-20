import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    PieChart, Pie, Legend, Tooltip, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, BarChart, Bar, Cell
  } from 'recharts';


const alarmAggregated = [{name: 'In Alarm', value: 10}, {name: 'Out Of Alarm', value: 290}]
const servicesInAlarm = [{name: 'Service A', value: 2}, {name: 'Service B', value: 7}, {name: 'Service C', value: 1}]
const alarmsByRegion = [{name: 'us-east-1', value: 2}, {name: 'us-west-2', value: 2}, {name: 'ap-northeast-1', value: 1}, {name: 'ap-southeast-1', value: 1}, {name: 'ap-southeast-2', value: 1}]
const alarmsByTime = [{x: "JAN", y: 55}, {x: "FEB", y: 34},   { x: "MAR", y: 45 },{ x: "APR", y: 30},{ x: "MAY", y: 25},{ x: "JUN", y: 10}]
const data = [
    {
      name: 'Failure A', times: 7,
    },
    {
      name: 'Failure B', times: 4,
    },
    {
      name: 'Failure C', times: 3,
    },
    {
      name: 'Failure D', times: 3,
    },
    {
      name: 'Failure E', times: 2,
    }
  ];

export default class Dashboard extends Component {
    render() {
      return (
        <Container fluid="xl">
        <Row>
            <Col>
                <h3>
                    Highlights
                </h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <PieChart width={600} height={300}>
                    <Pie isAnimationActive={true} data={alarmAggregated} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip/>
                </PieChart>  
                <h5>Aggregated Alarm Status</h5>              
            </Col>
            <Col>
                <PieChart width={600} height={300}>
                    <Pie isAnimationActive={true} data={servicesInAlarm} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip/>
                </PieChart>  
                <h5>Services In Alarm</h5>              
            </Col>
            <Col>
                <PieChart width={600} height={300}>
                    <Pie isAnimationActive={true} data={alarmsByRegion} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip/>
                </PieChart>  
                <h5>Alarms by Region</h5>              
            </Col>
        </Row>
        <Row>
            <Col>
                <ScatterChart
                    width={400}
                    height={400}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                      }}
                >
                <CartesianGrid />
                    <XAxis type="category" dataKey="x" name="Month" />
                    <YAxis type="number" dataKey="y" name="count" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={alarmsByTime} fill="#8884d8" />
                </ScatterChart>                
                <h5>Alarms by time</h5>              
            </Col>
            <Col>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="times" fill="#8884d8" />
                </BarChart>           
                <h5>Top Alarms</h5>              
            </Col>
        </Row>
    </Container>
      );
    }
  }