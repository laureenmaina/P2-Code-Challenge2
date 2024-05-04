import './App.css';
import React from 'react';
import { useState } from 'react';
import BotCollection from './components/BotCollection';
import { Routes, Route } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';
import BotArmy from './components/YourBotArmy';
import FilterData from './components/Filter';


function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const releaseBot = (id) => {
    const updatedBots = enlistedBots.filter((bot) => bot.id !== id);
    setEnlistedBots(updatedBots);
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<BotCollection enlistBot={enlistBot} />} />
        <Route path='/bot-army' element={<BotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />} />
        <Route path='/bots/:botId' element={<BotSpecs />} />
        <Route path='/filter' element={<FilterData />} />
      </Routes>
    </div>
  );
}

export default App;
