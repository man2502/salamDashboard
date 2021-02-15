import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import { Route } from 'react-router-dom';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './common/fonts.css'
import { withSuspense } from "./hoc/withSuspens";



const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

const App = () => {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Row>
          <Col sm={{ order: 2 }} lg={9} md={9}>
            <div className="App-content">
              <Route path='/dashboard' render={() => <DashboardContainer />} />
              <Route path='/users' render={withSuspense(UsersContainer)} />
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
