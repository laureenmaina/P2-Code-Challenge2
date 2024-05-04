import './App.css';
import React from 'react';
import BotCollection from './components/BotCollection';
import { Routes,Route, Router } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';
import { useState } from 'react';
import BotArmy from './components/YourBotArmy';
import FilterData from './components/Filter';


function App({bots}) {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const releaseBot = (id) => {
    const updatedBots = enlistedBots.filter((bot) => bot.id !== id);
    setEnlistedBots(updatedBots);
  };

 
  return(
      <div>
       <Routes>
        <Route path='/' element={<BotCollection enlistBot={enlistBot} />}/>
        <Route path='/bot-army' element={<BotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />}/>
        <Route path='/bots/:id' element={<BotSpecs />}/>
        <Route path='/filter' element={<FilterData bots={bots}/>}/>
      </Routes>
        
      </div>
   

  )
 
}

export default App;
