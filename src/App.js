import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import { useState } from 'react';
import { Route } from 'react-router-dom';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './common/fonts.css'

const App = () => {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Row>
          <Col sm={{ order: 2 }} lg={9} md={9}>
            <div className="App-content">
              <Route path='/dashboard' render={() =><DashboardContainer/>} />
            </div>
          </Col>

          <Col sm={{ order: 1 }} lg={3} md={3}>
            <Sidebar />
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default App;
