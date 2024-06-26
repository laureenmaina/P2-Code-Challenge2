import React from "react";

function BotArmy({ enlistedBots}) {
  return (
    <div> 
      <div className="bg bg-warning">
      <ul>
        {enlistedBots.map(bot => (

          <div key={bot.id} className="row col-sm-3 mb-3 mb-sm-2 card ">
            
            <div className="row g-0">
              <div className="col-md-4">
                <img src={bot.avatar_url} className="img-fluid rounded-start" alt={bot.name}/>
              </div>
            
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Name: {bot.name}</h5>
                  <p className="card-text">ID: {bot.id}</p>
                  <p className="card-text">{bot.catchphrase}</p>
                  <p className="card-text">Class: {bot.bot_class}</p>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      <i className="fa fa-heart">{bot.health}</i>
                      <i className="fas fa-bolt">{bot.damage}</i>
                      <i className="fas fa-shield-alt">{bot.armor}</i>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </ul>
    </div>
    </div>

  );
}

export default BotArmy;
