import React, { useState, useEffect } from "react";
import SortBar from "./SortBar";

function BotCollection({ enlistBot }) {
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

  function deleteBot(id) {
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
    enlistBot(bot.id);
  };

    const sortBots = (c) => {
    const sortedBots = [...bots].sort((a, b) => {
      if (a[c] < b[c]) return -1;
      if (a[c] > b[c]) return 1;
      return 0;
    });
    setBots(sortedBots);
  };

  return (
    <div>
      <SortBar sortBots={sortBots}/> <br/>
      <div className="row">
        {bots.map((bot) => (
          <div className="col-sm-3 mb-3 mb-sm-2" key={bot.id}>
            <div className="card" onClick={() => ClickCard(bot)}>
              <img src={bot.avatar_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    <i className="fa fa-heart">{bot.health}</i>
                    <i className='fas fa-bolt'>{bot.damage}</i>
                    <i className="fas fa-shield-alt">{bot.armor}</i>
                  </small>
                </div>
                <button type="button" className="bg bg-danger sm" onClick={() => deleteBot(bot.id)}>X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
