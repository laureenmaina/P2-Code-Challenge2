import React from "react";
import SortBar from "./SortBar";
import BotSpecs from "./BotSpecs";

function BotArmy({ enlistedBots }) {
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

  return (
    <div>
      <SortBar />
      <div className="bg bg-primary">
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-2">
            <h2>Bot Army</h2>
            {enlistedBots.map((bot) => (
              <div key={bot.id}>
                <h1>{bot.id}</h1>
                <img src={bot.avatar_url} alt={bot.id} />
                <p>{bot.catchphrase}</p>
                <div>
                  <img src="src/Images/heartbeat.png" alt="Health" />
                  {bot.health}
                  <img src="src/Images/lightning.png" alt="Damage" />
                  {bot.damage}
                  <img src="src/Images/shield.png" alt="Armor" />
                  {bot.armor}
                </div>
                <button type="button" className="btn btn-secondary">
                  Go Back
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => BotSpecs(bot)}
                >
                  Enlist
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => DeleteBot(bot.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotArmy;
