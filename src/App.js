import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './NavBar';
import react, { Component } anyimport { from } from '../node_modules/react'

/*
function App(){
  return(
    <h2>LANZMIENTOS JUNIO 2022</h2>
    <h3>No te pierdas piezas únicas a la venta</h3>
  )
}
*/

const App = (props) => {
  return (
    <p>
      Aprovechemos las ofertas de lanzamientos {props.name}!
    </p>
  )
}