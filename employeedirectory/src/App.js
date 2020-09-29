import React from 'react';
import './App.css';
import 'react-bootstrap/Row';
import 'react-bootstrap/Col';

function App() {
    
    return (
      <>
        <Nav />
        <Layout>
          <Row >
            <Col>
              <Search></Search>
            </Col>
          </Row>
          <Row>
            <Col>
              <EmployeeTable></EmployeeTable>
            </Col>
          </Row>
        </Layout>
      </> 
  );
  

}

export default App;
