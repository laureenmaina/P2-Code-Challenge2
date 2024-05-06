import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";
import FilterData from "./Filter";


function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://json-server-bot.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Delete bot
  function deleteBot(id) {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
    fetch(`https://json-server-bot.onrender.com/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Deleted bot"));
  }


  // Sort bots
  const sortBots = (c) => {
    const sortedBots = [...bots].sort((a, b) => {
      if (a[c] < b[c]) return -1; // a should come before b
      if (a[c] > b[c]) return 1; // b should come before a
      return 0;  // order should not change
    });
    setBots(sortedBots);
  };

  return (
    <div>
     
      <div>
      <FilterData bots={bots}/>
      </div>
      <SortBar sortBots={sortBots} /> <br/>
      <div className="row">
        {bots.map((bot) => (
          <div className="col-sm-3 mb-3 mb-sm-2" key={bot.id}>
            <div className="card">
              <Link to={`/bots/${bot.id}`}>
                <img src={bot.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{bot.name}</h5>
                  <p className="card-text">{bot.catchphrase}</p>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      <i className="fa fa-heart">{bot.health}  </i> 
                      <i className="fas fa-bolt ">{bot.damage}  </i>
                      <i className="fas fa-shield-alt"> {bot.armor} </i>
                    </small>
                  </div>
                </div>
              </Link>
              <div className="d-grid gap-2 col-3 mx-auto">
                <button type="button" className="bg bg-danger lg" onClick={() => deleteBot(bot.id)}>X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
