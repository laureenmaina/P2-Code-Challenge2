import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BotSpecs({setEnlistedBots,enlistedBots}) {
  const { botId } = useParams();
  const [viewBots, setViewBots] = useState([]);

  useEffect(() => {
    fetch("https://json-server-bot.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setViewBots(data))
      .catch((error) => console.error("Error fetching bots data:", error));
  }, []);

  const selectedBot = viewBots.find((bot) => bot.id === Number(botId));

  const [enlistedBotClasses, setEnlistedBotClasses] = useState({
    Support: false,
    Medic: false,
    Assault: false,
    Defender: false,
    Captain: false,
    Witch: false
  });
  

  const enlistBot = (bot) => {
    const { bot_class } = bot 
    if (!enlistedBotClasses[bot_class]) {
      setEnlistedBotClasses({ ...enlistedBotClasses, [bot_class]: true });
      setEnlistedBots([...enlistedBots, bot]);
    } else {
      console.log(`Already enlisted a bot from ${bot_class}`);
    }
  };

  if (!selectedBot) {
    return <div>Click a Bot...</div>; 
  }
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={selectedBot.avatar_url}
              className="img-fluid rounded-start"
              alt={selectedBot.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name: {selectedBot.name}</h5>
              <p className="card-text">ID: {selectedBot.id}</p>
              <p className="card-text">{selectedBot.catchphrase}</p>
              <p className="card-text">Class: {selectedBot.bot_class}</p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <i className="fa fa-heart">{selectedBot.health}</i>
                  <i className="fas fa-bolt">{selectedBot.damage}</i>
                  <i className="fas fa-shield-alt">{selectedBot.armor}</i>
                </small>
              </div>
              <br />
              <div className="d-grid gap-2 col-4">
              <a href="/" role="button" className="btn btn-secondary">Go Back</a>  
                <button onClick={()=> enlistBot()} className="btn btn-secondary">Enlist</button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
