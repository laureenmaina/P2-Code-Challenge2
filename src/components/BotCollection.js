import React, { useState, useEffect } from "react";
import BotArmy from "./YourBotArmy";
import { Link } from "react-router-dom";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://json-server-bot.onrender.com/bots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const ClickCard =()=>{
   console.log("Clicked"); 
   return <BotArmy />     
  }

  return (
    <div >
    <div className="row">       
      {bots.map((bot) => (
        <div  className="col-sm-3 mb-3 mb-sm-2" >
            <div className="card" key={bot.id} onClick={ClickCard}>
          <img src={bot.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">{bot.catchphrase}</p>
          </div>
        </div>
        </div>
      ))}
         </div>  
         </div>
  );
}

export default BotCollection;
