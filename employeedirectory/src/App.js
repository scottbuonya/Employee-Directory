import React from 'react';
import './App.css';
import results from './names.json';

class App extends React.Component  {
 state={
   nameList: results
 }
  render() { 
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">first</th>
              <th scope="col">last</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nameList.map(name=>(
            <tr>


            <th scope="row">{results}</th>
              <td>{results.name}</td>
              <td>{results.location}</td>
              <td>{results.picture}</td>
            </tr>

            ))}
          </tbody>
        </table>
      </>
  );
 }

}

export default App;
