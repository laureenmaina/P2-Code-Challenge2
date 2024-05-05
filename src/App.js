import './App.css';
import React from 'react';
import { useState } from 'react';
import BotCollection from './components/BotCollection';
import { Routes, Route } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';
import BotArmy from './components/YourBotArmy';



function App({enlistBot}) {
  const [enlistedBots, setEnlistedBots] = useState([]);

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
      </Routes>
    </div>
  );
}

export default App;
