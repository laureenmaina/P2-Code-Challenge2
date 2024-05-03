import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [bots,setBots]=useState([])

  useEffect(()=>
    fetch("http://localhost:3000/bots")
    .then(response =>response.json)
    .then(data =>console.log(data))

  )

  return (
    <div className="App">


    </div>
  );
}

export default App;
