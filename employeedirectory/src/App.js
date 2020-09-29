
import React from 'react';
import './App.css';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <>

      <Nav />
      <Layout>
      {/* two rows with one col, in the first col have a search, in the second col have an employee table */}
          <Row >
            <Col>
              <Search></Search>
            </Col>
          </Row>
          <Row >
            <Col>
              <EmployeeTable></EmployeeTable>
            </Col>
          </Row>
      </Layout>


    </>
  );
}

export default App;
