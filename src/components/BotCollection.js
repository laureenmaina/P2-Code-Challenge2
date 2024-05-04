import React from "react"
import { useState, useEffect } from "react";

function BotCollection({enlistBot,id}) {
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

  function DeleteBot(id) {
    fetch(`https://json-server-bot.onrender.com/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Deleted bot"));
  }

  const ClickCard = (bot) => {
    enlistBot(bot);
  };

  return (
    <div >
    <div className="row">       
      {bots.map((bot) => (
        <div  className="col-sm-3 mb-3 mb-sm-2" >
            <div className="card" key={bot.id} onClick={()=>ClickCard(bot)}>
            <button  type="button"  className="bg bg-danger sm" onClick={()=>DeleteBot(id)}>X</button>
          <img src={bot.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">{bot.catchphrase}</p>
            <div className="card-footer">
              <small className="text-body-secondary">
              <i className="fa fa-heart">{bot.health}</i> 
             <i className='fas fa-bolt'>{bot.damage}</i>
             <i className="	fas fa-shield-alt">{bot.armor}</i>
              </small>
        
            </div>
         
         
           
          </div>
        </div>
        </div>
      ))}
         </div>  
         </div>
  );
}

export default BotCollection;
