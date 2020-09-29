import React from 'react';
import Table from 'react-bootstrap/Table';
import employeeData from '../employees.json';


export default function Layout(props) {
    console.log(employeeData);
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => {
            return (
              <tr>
                <td><img alt="Employee Headshot" src={employee.picture.thumbnail}></img></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }