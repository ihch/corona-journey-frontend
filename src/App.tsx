import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [prefectures, setPrefectures] = useState([]);

  useEffect(() => {
    const f = () => {
      fetch("/prefectures")
        .then((response) => {
          return response.json();
        })
        .then((value) => setPrefectures(value));
    };

    f();
  }, []);

  useEffect(() => {
    console.log(prefectures);
  }, [prefectures]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
