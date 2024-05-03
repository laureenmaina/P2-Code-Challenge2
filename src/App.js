import './App.css';
import React from 'react';
import BotCollection from './components/BotCollection';
import { Routes,Route } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';


function App() {
  return(
      <div>
       <Routes>
        <Route path='/' element={<BotCollection />}/>
        <Route path='bots/:id' element={<BotSpecs />}/>
      </Routes>
        
      </div>
   

  )
 
}

export default App;
